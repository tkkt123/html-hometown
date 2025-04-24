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

    // 建筑卡片hover事件,将图片在原地将隐藏的部分显示出来
    const imgs= document.querySelectorAll('.architecture-card img');
    imgs.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'all 0.5s ease';
            img.closest('.architecture-card').style.overflow = 'visible';
            img.style.objectFit = 'cover';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.transition = 'all 0.5s ease';
            img.closest('.architecture-card').style.overflow = 'hidden';

            img.closest('.architecture-card').style.height = '';
        });
    });
});

// architecture-card轮播图自动切换
document.addEventListener('DOMContentLoaded', function() {

});