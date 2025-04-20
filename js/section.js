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