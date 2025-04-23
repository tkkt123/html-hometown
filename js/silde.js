document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#cq_slide .cq_mysilde");
    const section = document.querySelector("#cq");
    let currentIndex = 0;

    // 显示指定的幻灯片
    function showSlide(index) {
        slides[currentIndex].classList.remove("active"); // 移除当前图片的选中状态
        currentIndex = (index + slides.length) % slides.length; // 确保索引在范围内
        slides[currentIndex].classList.add("active"); // 设置下一张图片为选中状态

        // 设置被选中图片为背景
        const selectedImage = slides[currentIndex].querySelector("img").src;
        section.style.backgroundImage = `url(${selectedImage})`;

        console.log("选中")
    }

    // 上一张
    document.querySelector(".prev").addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    // 下一张
    document.querySelector(".next").addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    // 初始化背景图片
    showSlide(currentIndex);
});