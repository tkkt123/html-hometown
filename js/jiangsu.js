
const cards = document.querySelectorAll('.premium-card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const modal = document.querySelector(`.modal[data-modal="${modalId}"]`);
        modal.style.display = 'block';

        new Swiper(modal.querySelector('.swiper-container'), {
loop: true, // 新增：开启无限循环
autoplay: { delay: 3000 }, // 新增：自动播放（3秒间隔）
pagination: { el: '.swiper-pagination' },
});
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
});
let photoIndex = 0;
        const photos = document.querySelectorAll('.photo');

        // 初始化时强制显示第一张图片（避免首次加载空白）
        photos[0].classList.add('show');

        function showNextPhoto() {
            photos[photoIndex].classList.remove('show');
            photoIndex = (photoIndex + 1) % photos.length;
            photos[photoIndex].classList.add('show');
        }

        // 3秒切换一次（建议首次切换延迟0.5秒，避免初始化闪烁）
        setInterval(showNextPhoto, 3000);