document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#over_all_intro .slide');
    let currentSlide = 0;
  console.log(slides);
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    setInterval(nextSlide, 4000);
  });