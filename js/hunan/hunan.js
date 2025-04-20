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
    const slider=document.querySelector('.slider');
    // 轮播图点击切换
    let isSliding = false; // 防止多次点击
    slider.addEventListener('click', function(e) {
        if (isSliding) return; // 防止多次点击
        isSliding = true;
        nextSlide();
        setTimeout(() => {
            isSliding = false; 
        }, 1000); // 1秒钟后恢复点击
    });

    
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



    //监听feature的点击事件-切换网页
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('click', function() {
            const text = this.querySelector('h4');
            switch(text.textContent.trim()) {
                case "历史文化":
                    window.location.href = "./hunan-else/hunan-history.html";
                    break;
                case "特色美食":
                    window.location.href = "./hunan-else/hunan-food.html";
                    break;
                case "自然风光":
                    window.location.href = "./hunan-else/hunan-nature.html";
                    break;
            }
        });
    });


    //地图img适配mapcontainer
    const mapContainer = document.getElementById('map');
    const mapImg = mapContainer.querySelectorAll('img');

    if (mapContainer.offsetWidth>mapImg[0].offsetWidth){
        mapContainer.style.offsetWidth= mapImg[0].offsetWidth + 'px';
    }

    

    
    // 图集
    const galleryData=[
        {
            src: "../images/HuNan/我爱芷江.jpg",
            title: "我爱芷江墙",
            desc:"在芷江风雨桥畔，一面写有\"我爱芷江\"的彩绘墙格外醒目。这面充满地域特色的文化墙，以鲜艳的色彩和质朴的标语，与古朴的风雨桥相映成趣，成为游客打卡的热门景点。墙上绘的侗族风情图案与\"我爱芷江\"的深情告白，既展现了当地少数民族文化，又传递着芷江人民对家乡的热爱。每当夕阳西下，暖光洒在墙面上，为这座历史悠久的侗乡小城增添了一抹温暖的现代气息。",
            category: "landscape"
        },
        {
            src:"../images/HuNan/桥下灯笼.jpg",
            title:"河边灯笼",
            desc:"在风雨桥旁的河边，吊脚楼下，夜景很好看的，有时还有雾，老梦幻了",
            category:"landscape"
        },
        {
            src: "../images/HuNan/路牌1.jpg",
            title: "路牌",
            desc:"桥边路牌",
            category:"landscape"
        },
        {
            src: "../images/HuNan/路牌2.jpg",
            title: "路牌",
            desc:"桥边路牌",
            category:"landscape"
        },
        {
            src: "../images/HuNan/银杏.jpg",
            title: "银杏树",
            desc:"好看的银杏树",
            category:"landscape"
        },
        {
            src: "../images/HuNan/芷江鸭.jpg",
            title: "芷江鸭",
            desc:"芷江鸭是湖南省芷江侗族自治县的传统美食，以其独特的腌制和烹饪工艺而闻名。来芷江游玩，没有吃芷江鸭，就相当于没来",
            category: "food"
        },
        {
            src:"../iamges/HuNan/酸萝卜.jpg",
            title:"酸萝卜",
            desc:"一绝好吧，我很挑食的，不吃任何形式的萝卜，除了这个，还必须是这个，先放在面里面的那种小粒的酸萝卜，我也不吃",
            category:"food"
        },
        {
            src: "../images/HuNan/抗战胜利75.jpg",
            title: "文化活动",
            desc:"抗战胜利75周年纪念活动在芷江举行，吸引了众多游客和当地居民参与。活动中有丰富的文艺表演、传统民俗展示以及抗战历史的回顾，旨在弘扬爱国主义精神，铭记历史，珍惜和平。",
            category: "culture"
        },
        {
            src:"#",
            title:"和平节",
            desc:"以和平著称的芷江，必然少不了和平主题的节日",
            category:"culture"
        },
        {
            src: "../images/HuNan/沈从文.jpg",
            title: "沈从文",
            desc:"沈从文在芷江当过一段时间的税务员，虽然大多数人认为《边城》的原型是茶峒古镇，但是作为看了《边城》，某些片段（blue~）有点太像芷江了",
            category: "people"
        },
        {
            src: "../images/HuNan/李梓萌.jpg",
            title: "李梓萌",
            desc:"索子街街长！地位崇高",
            category: "people"
        },
        {
            src: "../images/HuNan/风雨桥-长.jpg",
            title: "风雨桥",
            desc:"绝对不能错过的景点，去芷江不去风雨桥，纯纯sb",
            category: "architecture"
        },
        {
            src: "../images/HuNan/抗日战争纪念馆.jpg",
            title: "抗日战争纪念馆",
            desc:"纪念抗日战争胜利",
            category: "architecture"
        },
        {
            src: "../images/HuNan/夏景.jpg",
            title: "夏景",
            category: "season"
        },
        {
            src: "../images/HuNan/黄昏.jpg",
            title: "黄昏",
            category: "season"
        }
    ]


    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.gallery-modal');
    const modalCaption = document.querySelector('.modal-caption');
    const closeModal = document.querySelector('.close-modal');

    const slideshowContainer = document.getElementsByClassName('slideshow-container');


    // 进入流动屏
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const caption = this.querySelector('h3').textContent;
            const category = this.getAttribute('data-category');

            // 显示模态框
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // 清空容器
            slideshowContainer[0].innerHTML = '';

            // 获取所有同类别图片
            const sameCategoryItems = galleryData.filter(data => data.category === category);
            let currentIndex = 0;
            const slideWidth = 300; // 每张幻灯片的宽度
            const animationSpeed = 2; // 移动速度（像素/帧）
            let animationId;
            const visibleSlides = 3; // 同时显示的幻灯片数量

            // 创建新幻灯片
            function createSlide() {
                if (sameCategoryItems.length === 0) return null;

                const slide = document.createElement("div");
                slide.className = "singal-slide";
                slide.style.position = "absolute";
                slide.style.left = slideshowContainer[0].offsetWidth + "px"; // 从右侧开始
                slide.style.width = slideWidth + "px";
                slide.style.transition = "left 0.5s linear";

                const img = document.createElement('img');
                img.className = "modal-content";
                img.src = sameCategoryItems[currentIndex].src;
                img.alt = sameCategoryItems[currentIndex].title;
                img.style.width = "100%";

                const caption = document.createElement('div');
                caption.className = "modal-caption";
                caption.textContent = sameCategoryItems[currentIndex].title;

                slide.appendChild(img);
                slide.appendChild(caption);

                //为创建的幻灯片添加点击事件
                slide.addEventListener('click', function(){
                    clicksingalslide(slide);
                });

                slideshowContainer[0].appendChild(slide);
                currentIndex = (currentIndex + 1) % sameCategoryItems.length;
                
                return slide;
            }

            function clicksingalslide(slide) {
                // 暂停动画
                stopAnimation();

                // 隐藏所有幻灯片
                const existingSlides = document.querySelectorAll(".singal-slide");
                existingSlides.forEach(i => {
                    i.style.opacity = '0';
                });

                // 创建一个透明层，防止点击其他幻灯片
                const overlay = document.createElement("div");
                overlay.style.position = "fixed";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                overlay.style.zIndex = "500";

                // 点击透明层时关闭详情页
                overlay.addEventListener('click', function() {
                    slideshowContainer[0].removeChild(Detail);
                    slideshowContainer[0].removeChild(overlay);
                    const existingSlides = document.querySelectorAll(".singal-slide");
                    existingSlides.forEach(i => {
                        i.style.opacity = '1';
                    });
                    moveSlides(); // 重新开始动画
                });

                slideshowContainer[0].appendChild(overlay);

                // 创建当前幻灯片详情页
                const Detail = document.createElement('div');
                Detail.className = 'modal-detail';

                // 获取当前选中幻灯片的图片以及介绍
                const Img = slide.querySelector("img");

                //创建标题框
                const Title = slide.querySelector(".modal-caption").textContent;
                const TitleDiv = document.createElement('div');
                TitleDiv.className = 'modal-title';
                TitleDiv.textContent = Title;
                TitleDiv.style.fontSize = '1.5em';
                TitleDiv.style.marginBottom = '10px';

                //创建描述框
                const Desc = galleryData.find(data => data.title === Title)?.desc || "暂无描述";
                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'modal-description';
                descriptionDiv.textContent = Desc;
                descriptionDiv.style.marginTop = '10px';

                // 创建关闭按钮
                const resetButton = document.createElement('button');
                resetButton.textContent = '关闭';
                resetButton.className = 'reset-button';

                //构建详情页
                Detail.appendChild(Img.cloneNode(true));
                Detail.appendChild(TitleDiv);
                Detail.appendChild(descriptionDiv);
                Detail.appendChild(resetButton);

                // 将详情页添加到模态框中
                slideshowContainer[0].appendChild(Detail);

                // 添加关闭按钮事件
                resetButton.addEventListener('click', function() {
                    slideshowContainer[0].removeChild(Detail);
                    slideshowContainer[0].removeChild(overlay);
                    const existingSlides = document.querySelectorAll(".singal-slide");
                    existingSlides.forEach(i => {
                        i.style.opacity = '1';
                    });
                    moveSlides(); // 重新开始动画
                });
            }

            // 移动所有幻灯片
            function moveSlides() {
                const slides = document.querySelectorAll('.singal-slide');
                let allOut = true;
                if(slides.length == 0) {
                    createSlide();
                }
                slides.forEach((slide, index) => {
                    const currentLeft = parseInt(slide.style.left);
                    const newLeft = currentLeft - animationSpeed;
                    slide.style.left = newLeft + "px";

                    //如果在中间的一个区域内，适当变大
                    const letfrange=slideshowContainer[0].offsetWidth/2-slide.offsetWidth;
                    const rightrange=slideshowContainer[0].offsetWidth/2;
                    if (newLeft > letfrange && newLeft < rightrange) {
                        slide.style.transform = "scale(1.2)";
                    } else {
                        slide.style.transform = "scale(1)";
                    }

                    // 如果幻灯片全部移入并且当前是最后一个元素，则创建新的幻灯片
                    if (newLeft < slideshowContainer[0].offsetWidth-slide.offsetWidth && index === slides.length - 1) {
                        createSlide();
                    }

                    // 检查是否完全移出视图
                    if (newLeft >= -slide.offsetWidth) {
                        allOut = false;
                    } else {
                        // 完全移出后移除
                        slide.remove();
                    }
                });

                animationId = requestAnimationFrame(moveSlides);
            }

            // 停止动画函数
            function stopAnimation() {
                cancelAnimationFrame(animationId);
            }

            // 开始动画
            moveSlides();
            

            // 当模态框关闭时停止动画
            closeModal.addEventListener('click', function() {
                stopAnimation();
            });

            // 点击模态框外部也停止动画
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    stopAnimation();
                }
            });
        });
    });


    
    //关闭按钮
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    //图片外点击关闭
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    //为每个存在的图片添加点击事件
    const modalImages = document.querySelectorAll('singal-slide img');
    modalImages.forEach(image => {
        image.addEventListener('click', function() {
            const src = this.src;
            const title = this.alt;
            modalCaption.textContent = title;
            modal.querySelector('.modal-content').src = src;
        });
    });



    // 表单提交
    const contactForm = document.getElementById('contactForm');
    const subscribeForm = document.getElementById('subscribeForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        alert('感谢您的留言！我会尽快回复您。');
        this.reset();
    });
    
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
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