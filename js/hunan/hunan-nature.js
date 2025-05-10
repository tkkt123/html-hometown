document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // 缩略图切换
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImg = document.querySelector('.main-img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImg.src = this.src;
        });
    });
    
    // 河流风光轮播
    const riverSlides = document.querySelectorAll('.river-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(index) {
        riverSlides.forEach(slide => slide.classList.remove('active'));
        riverSlides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % riverSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + riverSlides.length) % riverSlides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // 自动轮播
    let slideInterval = setInterval(nextSlide, 5000);
    
    // 鼠标悬停时暂停轮播
    const riverSlider = document.querySelector('.river-slider');
    riverSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    riverSlider.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // 四季切换标签
    const tabBtns = document.querySelectorAll('.tab-btn');
    const seasonPanels = document.querySelectorAll('.season-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const season = this.getAttribute('data-season');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            seasonPanels.forEach(panel => panel.classList.remove('active'));
            document.getElementById(season).classList.add('active');
        });
    });
    
    // 滚动动画
    const featureItems = document.querySelectorAll('.feature-item');
    const riverListItems = document.querySelectorAll('.river-list li');
    //IntersectionObserver：用于监听目标元素是否进入视口。
    const natureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        natureObserver.observe(item);
    });
    
    riverListItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        natureObserver.observe(item);
    });
});