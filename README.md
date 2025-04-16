# WebDesignWork
A homework for web design, which is typically for accomplishing the task assigned by teacher

## Basic Information
**主题**：一个介绍我们各自家乡的画廊展览。  

**主要分块**：  
1. 主画廊页面：用瀑布流或者网格的形式展览家乡的图片。用户可以点击查看大图、幻灯片式的浏览或者查看图片文字等等  
2. 个人主页：我们每个人有一个独立展出的页面，内容包括个人简介、我眼中的家乡等内容    

**设计与技术部分**：就是分工部分。主要是主画廊的工作分配和各自的主页。主页部分大家就自己决定，只需要画风一致就可以了。然后主画廊部分分为四部分的话如下：  
1. 负责主画廊的首页整体布局、图片排版、搭配CSS动画效果；
2. 编写点击图片弹出图片展示的交互功能，比如大图模式，夜晚模式等；
3. 负责设计并开发统一风格的个人主页模板，方便大家填充，并自己更改；
4. 整合导航和页面的调整逻辑，负责各网页的样式统一
   
**预期功能（自选）**：
1. 可以在主画廊部分实现图片的分类，过滤的功能；  
2. 做一个搜索框，输入文字搜索图片的标题  
3. 做一个幻灯片模式，即点击后可以选择图片做类似幻灯片的播放。 
    
**样例网站**：   
1. https://www.saatchiart.com/  
2. https://www.kokuto-shouchu.co.jp/  
3. https://soles-gaufrette.com/  
**注**：这些网站水平比较高，仅作为参考不是说要复制（（，大概框架是这样。  

## 文件目录结构

    WEBDESIGNWORK/
    ├── README.md               // 作业说明        
    ├── pages/   
    |   ├── index.html          // 首页 
    |   ├── personal1.html      // 组员1的个人主页
    |   ├── personal2.html      // 组员2的个人主页
    |   ├── personal3.html      // 组员3的个人主页
    |   └── personal4.html      // 组员4的个人主页
    ├── css/
    │   ├── reset.css           // 重置样式（可选）
    │   └── style.css           // 全站公共样式
    ├── js/
    │   └── main.js             // 页面交互逻辑代码（如过滤、懒加载、灯箱、幻灯片等）
    ├── images/
    │   ├── gallery/            // 存放画廊中使用的图片
    │   └── personal/           // 存放每个组员个人主页的头像或相关图片
    └── assets/
        └── fonts/              // 字体文件（如果有）
