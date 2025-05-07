document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    let lastScrollY = window.scrollY;
    let ticking = false;

    // 1. Header 滚动隐藏/显示
    function updateHeader() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = "translateY(-100%)";
            header.style.transition = "transform 0.4s ease";
        } else {
            header.style.transform = "translateY(0)";
            header.style.transition = "transform 0.4s ease";
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });

    // 2. 平滑滚动（适用于锚点跳转）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // 3. 滚动进入动画
    const revealElements = document.querySelectorAll("main section, .gallery img, blockquote");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.classList.add("reveal");
        revealObserver.observe(el);
    });
});
