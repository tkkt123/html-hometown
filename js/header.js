document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // 向下滚动 - 隐藏头部
            header.style.transform = "translateY(-100%)";
            header.style.transition = "transform 0.4s ease";
        } else {
            // 向上滚动 - 显示头部
            header.style.transform = "translateY(0)";
            header.style.transition = "transform 0.4s ease";
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
});
