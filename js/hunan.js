document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 移动端菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 关闭移动菜单
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // 轮播图自动播放
    const slides=document.querySelectorAll('#home .slide');
    let currentSlide = 0;
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(nextSlide, 5000);

    
    // 技能条动画
    const skills = document.querySelectorAll('.skill');
    
    function animateSkills() {
        skills.forEach(skill => {
            const percent = skill.getAttribute('data-percent');
            const progressBar = skill.querySelector('.skill-progress');
            
            progressBar.style.width = percent + '%';
        });
    }
    
    // 当技能部分进入视口时触发动画
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(aboutSection);
    
    // 图集模态框
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.querySelector('.modal-caption');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const caption = this.querySelector('h3').textContent;
            
            modalImg.src = imgSrc;
            modalCaption.textContent = caption;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // 表单提交
    const contactForm = document.getElementById('contactForm');
    const subscribeForm = document.getElementById('subscribeForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 这里可以添加表单验证和AJAX提交
        alert('感谢您的留言！我会尽快回复您。');
        this.reset();
    });
    
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 这里可以添加订阅逻辑
        alert('感谢订阅！您将收到我们的最新更新。');
        this.reset();
    });
    
    // 初始化地图 (需要替换为实际的地图API代码)
    function initMap() {
        // 这里需要替换为实际的地图初始化代码
        // 示例使用Google Maps API:
        /*
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 你的纬度, lng: 你的经度 },
            zoom: 12
        });
        
        new google.maps.Marker({
            position: { lat: 你的纬度, lng: 你的经度 },
            map: map,
            title: '我的家乡'
        });
        */
        
        // 如果没有地图API，可以显示一个占位图
        const mapContainer = document.getElementById('map');
        if (mapContainer && !mapContainer.hasChildNodes()) {
            mapContainer.innerHTML = '<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:#eee;color:#666;">地图位置</div>';
        }
    }
    
    // 如果地图API已加载，调用initMap
    if (typeof google !== 'undefined') {
        initMap();
    } else {
        // 如果没有加载地图API，也显示占位图
        initMap();
    }
    
    // 页面加载动画
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'fadeInUp 1s ease 0.5s forwards';
    }
});