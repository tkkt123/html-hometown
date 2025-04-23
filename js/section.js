document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("cq_pic");

    // 鼠标移动事件
    document.addEventListener("mousemove", (event) => {
        const x = event.clientX; // 鼠标相对于视口的水平位置
        const y = event.clientY; // 鼠标相对于视口的垂直位置

        // 计算图片的偏移量
        const offsetX = (x / window.innerWidth - 0.5) * 250; // 根据鼠标水平位置计算偏移量
        const offsetY = (y / window.innerHeight - 0.5) * 100; // 根据鼠标垂直位置计算偏移量

        // 设置图片的 transform 属性
        image.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(30deg)`;
    });
});