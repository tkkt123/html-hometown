document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // 美食卡片动画
    const foodCards = document.querySelectorAll('.food-card');
    const streetItems = document.querySelectorAll('.street-item');
    
    const foodObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    foodCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        foodObserver.observe(card);
    });
    
    streetItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        foodObserver.observe(item);
    });
    
    // 食材列表动画
    const ingredientItems = document.querySelectorAll('.ingredient-list li');
    ingredientItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    const ingredientObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ingredientItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
                ingredientObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    ingredientObserver.observe(document.querySelector('.ingredient-list'));
});

