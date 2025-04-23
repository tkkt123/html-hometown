document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("cq_pic");

    // 鼠标移动事件
    document.addEventListener("mousemove", (event) => {
        const x = event.clientX; // 鼠标相对于视口的水平位置
        const y = event.clientY; // 鼠标相对于视口的垂直位置

        // 计算图片的偏移量
        const offsetX = (x / window.innerWidth - 0.5) * 50; // 根据鼠标水平位置计算偏移量
        const offsetY = (y / window.innerHeight - 0.5) * 10; // 根据鼠标垂直位置计算偏移量

        // 设置图片的 transform 属性
        image.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(30deg)`;
    });

    // 鼠标悬停事件
    image.addEventListener("mouseenter", () => {
        console.log("鼠标悬停");
        image.style.filter = "blur(5px)"; // 添加虚化效果
    });

    // 鼠标移出事件
    image.addEventListener("mouseleave", () => {
        console.log("鼠标移出");
        image.style.filter = "none"; // 移除虚化效果
    });
});


// 湖南部分
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('#hn-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

//图片集food
document.addEventListener("DOMContentLoaded", () => {
            //图片集food
            const imagelist_food = [
                {
                    src: '../images/HuNan/芷江鸭.jpg',
                    alt: '芷江鸭',
                    title: '芷江鸭',
                    desc:'美味的鸭肉，鲜嫩可口'
                },
                {
                    src: '../images/HuNan/臭豆腐.jpg',
                    alt: '臭豆腐',
                    title: '臭豆腐',
                    desc:'长沙的经典小吃，外脆内嫩'
                },
                {
                    src: '../images/HuNan/糖油粑粑.jpg',
                    alt: '糖油粑粑',
                    title: '糖油粑粑',
                    desc:'甜而不腻，口感独特'
                },
                {
                    src: '../images/HuNan/剁椒鱼头.jpg',
                    alt: '剁椒鱼头',
                    title: '剁椒鱼头',
                    desc:'鲜香扑鼻，辣味十足'
                },
                {
                    src: '../images/HuNan/酸辣粉.jpg',
                    alt: '酸辣粉',
                    title: '酸辣粉',
                    desc:'酸辣可口，令人垂涎'
                },
                {
                    src: '../images/HuNan/口味虾.jpg',
                    alt: '口味虾',
                    title: '口味虾',
                    desc:'麻辣鲜香，令人回味无穷'
                },
                {
                    src: '../images/HuNan/腊肉.jpg',
                    alt: '湘西腊肉',
                    title: '湘西腊肉',
                    desc:'传统腊肉，风味独特'
                },
                {
                    src: '../images/HuNan/红烧肉.jpg',
                    alt: '红烧肉',
                    title: '红烧肉',
                    desc:'毛主席最爱，在他的家乡做的必然不差'
                },
            ];
        const hn_gallery_food=document.querySelector('#hn-food .hn-gallery');
        currentIndex = 0;
        const visibleImages = 3;
        const foodlentgh=imagelist_food.length;
        function updateGallery_food() {
            foodImages = imagelist_food.slice(currentIndex, Math.min(foodlentgh, currentIndex + visibleImages));
            if (foodImages.length < visibleImages) {
                foodImages = foodImages.concat(imagelist_food.slice(0, visibleImages - foodImages.length));
            }
            hn_gallery_food.innerHTML = foodImages.map(image => `
                <div class="hn-gallery-item"">
                    <img src="${image.src}" alt="${image.alt}" title="${image.title}">
                    <div class="hn-overlay">
                        <p>${image.title}</p>
                    </div>
                </div>
            `).join('');
    
            // 为每个 .hn-gallery-item 绑定点击事件
            const galleryItems = hn_gallery_food.querySelectorAll('.hn-gallery-item');
            galleryItems.forEach((item, index) => {
                item.addEventListener('click', function () {
                    showImageDetails(foodImages[index]);
                });
            });
        }
        function showImageDetails(item){
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
                document.body.removeChild(overlay);
            });
            document.body.appendChild(overlay);
    
            // 创建一个图片详情页
            const detailPage = document.createElement("div");
            detailPage.style.position = "fixed";
            detailPage.style.top = "50%";
            detailPage.style.left = "50%";
            detailPage.style.transform = "translate(-50%, -50%)";
            detailPage.style.width = "80%";
            detailPage.style.height = "80%";
            detailPage.style.backgroundColor = "white";
            detailPage.style.zIndex = "1000";
            detailPage.style.overflow = "auto";
            detailPage.style.overflowX = 'hidden';
            detailPage.style.borderRadius = "10px ";
    
            overlay.appendChild(detailPage);
    
            // 创建图片元素
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt;
            img.title = item.title;
            img.style.margin = "20px";
            img.style.width = "100%";
            detailPage.appendChild(img);
    
            // 创建标题元素
            const title = document.createElement("h2");
            title.innerText = item.title;
            title.style.textAlign = "center";
            title.style.marginTop = "10px";
            title.style.color = "#333";
            detailPage.appendChild(title);
    
            // 创建描述元素
            const desc = document.createElement("p");
            desc.innerText = item.desc;
            
            detailPage.appendChild(desc);
        }
        function slideNext_food() {
            const galleryItems = hn_gallery_food.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                const currentTransform = parseInt(item.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
                item.style.transform = `translateX(${currentTransform - 300}px)`; // 假设每张图片宽度为 300px
            });
        
            currentIndex = (currentIndex + 1) % foodlentgh;
            updateGallery_food(); // 更新图片
        }
        function slidePrev_food() {
            const galleryItems = hn_gallery_food.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                const currentTransform = parseInt(item.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
                item.style.transform = `translateX(${currentTransform + 300}px)`; // 假设每张图片宽度为 300px
            });
        
            currentIndex = (currentIndex - 1 + foodlentgh) % foodlentgh;
            updateGallery_food(); // 更新图片
        }
        updateGallery_food();
        // 绑定按钮事件
        document.querySelector('#hn-food .next-button').addEventListener('click', slideNext_food);
        document.querySelector('#hn-food .prev-button').addEventListener('click', slidePrev_food);
});

//图片集heritage
document.addEventListener("DOMContentLoaded", () => {
    //图片集heritage
    const imagelist_heritage=[
        {
            src: '../images/HuNan/湘绣.jpg',
            alt: '湘绣',
            title: '湘绣',
            desc: '传统手工艺，精美绝伦'
        },
        {
            src: '../images/HuNan/风雨桥.jpg',
            alt: '风雨桥',
            title: '风雨桥',
            desc: '风景如画，历史悠久'
        },
        
        {
            src: '../images/HuNan/土家族吊脚楼.jpg',
            alt: '土家族吊脚楼',
            title: '土家族吊脚楼',
            desc: '土家族吊脚楼，独特的建筑风格'
        },
        {
            src:'../images/HuNan/凤凰古城1.jpg',
            alt: '凤凰古城',
            title: '凤凰古城',
            desc: '美丽的古城，历史悠久,建筑独特'
        },
        {
            src: '../images/HuNan/黄梅戏.jpg',
            alt: '黄梅戏',
            title: '黄梅戏 ',
            desc: '是由山歌、秧歌、茶歌、采茶灯、花鼓调，先于农村，后入城市，逐步形成发展起来的一个剧种。 它吸收了 汉剧 、 楚剧 、 高腔 、 采茶戏 、 京剧 等众多剧种的因素，逐渐形成了自己的艺术特点。上图是黄梅戏传统戏曲--女驸马'
        }

    ];
const hn_gallery_heritage=document.querySelector('#hn-heritage .hn-gallery');
currentIndex = 0;
const visibleImages = 3;
const heritagelength=imagelist_heritage.length;
function updateGallery_heritage() {
    heritageImages = imagelist_heritage.slice(currentIndex, Math.min(heritagelength, currentIndex + visibleImages));
    if (heritageImages.length < visibleImages) {
        heritageImages = heritageImages.concat(imagelist_heritage.slice(0, visibleImages - heritageImages.length));
    }
    hn_gallery_heritage.innerHTML = heritageImages.map(image => `
        <div class="hn-gallery-item"">
            <img src="${image.src}" alt="${image.alt}" title="${image.title}">
            <div class="hn-overlay">
                <p>${image.title}</p>
            </div>
        </div>
    `).join('');

    // 为每个 .hn-gallery-item 绑定点击事件
    const galleryItems = hn_gallery_heritage.querySelectorAll('.hn-gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showImageDetails(heritageImages[index]);
        });
    });
}
function showImageDetails(item){
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
        document.body.removeChild(overlay);
    });
    document.body.appendChild(overlay);

    // 创建一个图片详情页
    const detailPage = document.createElement("div");
    detailPage.style.position = "fixed";
    detailPage.style.top = "50%";
    detailPage.style.left = "50%";
    detailPage.style.transform = "translate(-50%, -50%)";
    detailPage.style.width = "80%";
    detailPage.style.height = "80%";
    detailPage.style.backgroundColor = "white";
    detailPage.style.zIndex = "1000";
    detailPage.style.overflow = "auto";
    detailPage.style.overflowX = 'hidden';
    detailPage.style.borderRadius = "10px ";

    overlay.appendChild(detailPage);

    // 创建图片元素
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.title = item.title;
    img.style.margin = "20px";
    img.style.width = "100%";
    detailPage.appendChild(img);

    // 创建标题元素
    const title = document.createElement("h2");
    title.innerText = item.title;
    title.style.textAlign = "center";
    title.style.marginTop = "10px";
    title.style.color = "#333";
    detailPage.appendChild(title);

    // 创建描述元素
    const desc = document.createElement("p");
    desc.innerText = item.desc;
    
    detailPage.appendChild(desc);
}
function slideNext_heritage() {
    const galleryItems = hn_gallery_heritage.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        const currentTransform = parseInt(item.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        item.style.transform = `translateX(${currentTransform - 300}px)`; // 假设每张图片宽度为 300px
    });

    currentIndex = (currentIndex + 1) % heritagelength;
    updateGallery_heritage(); // 更新图片
}
function slidePrev_heritage() {
    const galleryItems = hn_gallery_heritage.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        const currentTransform = parseInt(item.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        item.style.transform = `translateX(${currentTransform + 300}px)`; // 假设每张图片宽度为 300px
    });

    currentIndex = (currentIndex - 1 + heritagelength) % heritagelength;
    updateGallery_heritage(); // 更新图片
}
updateGallery_heritage();
// 绑定按钮事件
document.querySelector('#hn-heritage .next-button').addEventListener('click', slideNext_heritage);
document.querySelector('#hn-heritage .prev-button').addEventListener('click', slidePrev_heritage);
});

//图片集tourist
document.addEventListener("DOMContentLoaded", () => {
    //图片集tourist
    const imagelist_tourist=[
        {
            src: '../images/HuNan/张家界.jpg',
            alt: '张家界',
            title: '张家界',
            desc: '世界自然遗产，风景如画'
        },
        {
            src: '../images/HuNan/岳麓山.jpg',
            alt: '岳麓山',
            title: '岳麓山',
            desc: '著名的风景名胜区，历史悠久'
        },
        {
            src: '../images/HuNan/凤凰古城2.jpg',
            alt: '凤凰古城',
            title: '凤凰古城',
            desc: '历史文化名城，风景如画'
        },
        {
            src: '../images/HuNan/岳阳楼.jpg',
            alt: '岳阳楼',
            title: '岳阳楼',
            desc: '历史悠久的名楼，风景如画'
        },
        {
            src: '../images/HuNan/橘子洲头.jpg',
            alt: '橘子洲头',
            title: '橘子洲头',
            desc: '长沙著名景点，风景如画'
        },
        {
            src: '../images/HuNan/长沙博物馆.jpg',
            alt: '长沙博物馆',
            title: '长沙博物馆',
            desc: '展示丰富的历史文化'
        },
    ];
    const hn_gallery_tourist=document.querySelector('#hn-tourist .hn-gallery');
    currentIndex = 0;
    const visibleImages = 3;
    const touristlength=imagelist_tourist.length;
    function updateGallery_tourist() {
    touristImages = imagelist_tourist.slice(currentIndex, Math.min(touristlength, currentIndex + visibleImages));
    if (touristImages.length < visibleImages) {
        touristImages = touristImages.concat(imagelist_tourist.slice(0, visibleImages - touristImages.length));
    }
    hn_gallery_tourist.innerHTML = touristImages.map(image => `
        <div class="hn-gallery-item"">
            <img src="${image.src}" alt="${image.alt}" title="${image.title}">
            <div class="hn-overlay">
                <p>${image.title}</p>
            </div>
        </div>
    `).join('');

    // 为每个 .hn-gallery-item 绑定点击事件
    const galleryItems = hn_gallery_tourist.querySelectorAll('.hn-gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showImageDetails(touristImages[index]);
        });
    });
}
function showImageDetails(item){
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
        document.body.removeChild(overlay);
    });
    document.body.appendChild(overlay);

    // 创建一个图片详情页
    const detailPage = document.createElement("div");
    detailPage.style.position = "fixed";
    detailPage.style.top = "50%";
    detailPage.style.left = "50%";
    detailPage.style.transform = "translate(-50%, -50%)";
    detailPage.style.width = "80%";
    detailPage.style.height = "80%";
    detailPage.style.backgroundColor = "white";
    detailPage.style.zIndex = "1000";
    detailPage.style.overflowX = 'hidden';
    detailPage.style.overflow = "auto";
    detailPage.style.borderRadius = "10px ";

    overlay.appendChild(detailPage);

    // 创建图片元素
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.title = item.title;
    img.style.margin = "20px";
    img.style.width = "100%";
    detailPage.appendChild(img);

    // 创建标题元素
    const title = document.createElement("h2");
    title.innerText = item.title;
    title.style.textAlign = "center";
    title.style.marginTop = "10px";
    title.style.color = "#333";
    detailPage.appendChild(title);

    // 创建描述元素
    const desc = document.createElement("p");
    desc.innerText = item.desc;
    
    detailPage.appendChild(desc);
}
function slideNext_tourist() {
    const galleryItems = hn_gallery_tourist.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        const currentTransform = parseInt(item.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        item.style.transform = `translateX(${currentTransform - 300}px)`; // 假设每张图片宽度为 300px
    });

    currentIndex = (currentIndex + 1) % touristlength;
    updateGallery_tourist(); // 更新图片
}
function slidePrev_tourist() {
    const galleryItems = hn_gallery_tourist.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        const currentTransform = parseInt(item.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        item.style.transform = `translateX(${currentTransform + 300}px)`; // 假设每张图片宽度为 300px
    });

    currentIndex = (currentIndex - 1 + touristlength) % touristlength;
    updateGallery_tourist(); // 更新图片
}
updateGallery_tourist();
// 绑定按钮事件
document.querySelector('#hn-tourist .next-button').addEventListener('click', slideNext_tourist);
document.querySelector('#hn-tourist .prev-button').addEventListener('click', slidePrev_tourist);
});