document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // 建筑卡片动画
    const architectureCards = document.querySelectorAll('.architecture-card');
    architectureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500);
    });

    
});