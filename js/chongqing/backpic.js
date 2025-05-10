document.addEventListener('DOMContentLoaded', function() {
    const backgroundContainer = document.querySelector('.background-container');
    const images = document.querySelectorAll('img');
    let lastActiveImage = null;

    // 创建 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // 确保图片已加载
                if (img.complete) {
                    updateBackground(img);
                } else {
                    img.onload = () => updateBackground(img);
                }
            }
        });
    }, {
        threshold: 0.5, // 当图片显示50%时触发
        rootMargin: '0px'
    });

    // 监听所有图片
    images.forEach(img => observer.observe(img));

    // 更新背景函数
    function updateBackground(img) {
        if (lastActiveImage === img) return;
        
        lastActiveImage = img;
        
        // 创建新背景图片预加载
        const tempImage = new Image();
        tempImage.src = img.src;
        
        tempImage.onload = () => {
            backgroundContainer.style.opacity = '0';
            
            setTimeout(() => {
                backgroundContainer.style.backgroundImage = `url(${img.src})`;
                backgroundContainer.style.opacity = '1';
            }, 300);
        };
    }

    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 在更新背景函数中使用节流
const throttledUpdateBackground = throttle(updateBackground, 300);