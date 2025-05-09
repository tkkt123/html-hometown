document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#over_all_intro .slide');
    let currentSlide = 0;
  console.log(slides);
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    setInterval(nextSlide, 5000);
  });
document.addEventListener('DOMContentLoaded', () => {
    initCarousel('#over_all_intro .slide', 5000);
    initSwitcher('scjs', 4); // 第一个section，4个按钮
    initSwitcher('scjs2', 4); // 第二个section，4个按钮
});
function initCarousel(selector, interval) {
    const slides = document.querySelectorAll(selector);
    let currentSlide = 0;
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === 0) slide.classList.add('active');
    });
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(nextSlide, interval);
}
function initSwitcher(prefix, buttonCount) {
    const buttons = [];
    const contents = [];
    for (let i = 1; i <= buttonCount; i++) {
        const btn = document.getElementById(`${prefix}-btn-${i}`);
        const content = document.getElementById(`${prefix}-content-${i}`); 
        if (btn && content) {
            buttons.push(btn);
            contents.push(content);
        }
    }
    contents.forEach((content, index) => {
        content.classList.remove('active');
        if (index === 0) content.classList.add('active');
    });
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            contents[index].classList.add('active');
        });
    });
}