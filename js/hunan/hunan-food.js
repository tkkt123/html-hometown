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


//炒菜小游戏部分
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
    
    // 炒菜小游戏逻辑
    const pot = document.getElementById('pot');
    const cookBtn = document.getElementById('cook-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultArea = document.getElementById('result-area');
    const resultMessage = document.getElementById('result-message');
    const resultDish = document.getElementById('result-dish');
    
    let ingredientsInPot = [];
    let seasoningsInPot = [];
    
    // 设置拖拽功能
    document.querySelectorAll('.ingredient, .seasoning').forEach(item => {
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.dataset.name);
            e.dataTransfer.setData('type', this.classList.contains('ingredient') ? 'ingredient' : 'seasoning');
            setTimeout(() => this.style.opacity = '0.4', 0);
        });
        
        item.addEventListener('dragend', function() {
            this.style.opacity = '1';
        });
    });
    
    // 设置放置区域
    pot.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    pot.addEventListener('drop', function(e) {
        e.preventDefault();
        const itemName = e.dataTransfer.getData('text/plain');
        const itemType = e.dataTransfer.getData('type');
        
        // 检查是否已经放入锅中
        if (itemType === 'ingredient' && !ingredientsInPot.includes(itemName)) {
            ingredientsInPot.push(itemName);
            addToPot(itemName, itemType);
        } else if (itemType === 'seasoning' && !seasoningsInPot.includes(itemName)) {
            seasoningsInPot.push(itemName);
            addToPot(itemName, itemType);
        }
    });
    
    // 添加到锅中的函数
    function addToPot(name, type) {
        const items = type === 'ingredient' ? ingredientsInPot : seasoningsInPot;
        if (items.includes(name)) {
            const itemElement = document.createElement('div');
            itemElement.textContent = getEmoji(name) + ' ' + name;
            itemElement.className = type + ' in-pot';
            itemElement.dataset.name = name;
            pot.appendChild(itemElement);
            
            // 标记原始元素为已使用
            document.querySelectorAll(`.${type}[data-name="${name}"]`).forEach(el => {
                if (!el.classList.contains('in-pot')) {
                    el.style.opacity = '0.5';
                    el.style.pointerEvents = 'none';
                }
            });
        }
    }
    
    // 获取emoji
    function getEmoji(name) {
        const emojiMap = {
            '鸡蛋': '🥚',
            '青菜': '🥬',
            '辣椒': '🌶️',
            '肉片': '🥩',
            '米饭': '🍚',
            '豆腐': '🍞',
            '盐': '🧂',
            '酱油': '🫙',
            '醋': '🍶',
            '辣椒粉': '🌶️'
        };
        return emojiMap[name] || '';
    }
    
    // 开始炒菜
    cookBtn.addEventListener('click', function() {
        if (ingredientsInPot.length === 0 && seasoningsInPot.length === 0) {
            alert('请至少放入一种食材或调味品！');
            return;
        }
        
        // 添加烹饪动画
        pot.classList.add('cooking-animation');
        cookBtn.disabled = true;
        
        // 模拟烹饪过程
        setTimeout(() => {
            pot.classList.remove('cooking-animation');
            showResult();
        }, 2000);
    });
    
    // 显示结果
    function showResult() {
        const dish = determineDish();
        resultMessage.textContent = dish.message;
        resultDish.textContent = dish.emoji;
        resultArea.style.display = 'block';
        
        // 滚动到结果区域
        resultArea.scrollIntoView({ behavior: 'smooth' });
    }
    
    // 确定菜品
    function determineDish() {
        // 检查特定组合
        if (ingredientsInPot.includes('鸡蛋') && ingredientsInPot.includes('米饭') && 
            seasoningsInPot.includes('盐')) {
            return { emoji: '🍳', message: '恭喜！你做出了蛋炒饭！芷江特色小吃！' };
        }
        
        if (ingredientsInPot.includes('肉片') && ingredientsInPot.includes('辣椒') && 
            seasoningsInPot.includes('酱油') && seasoningsInPot.includes('盐')) {
            return { emoji: '🥘', message: '哇！湘味小炒肉！香辣可口！' };
        }
        
        if (ingredientsInPot.includes('豆腐') && seasoningsInPot.includes('辣椒粉')) {
            return { emoji: '🧆', message: '香辣豆腐！有点像芷江臭豆腐的味道！' };
        }
        
        if (ingredientsInPot.includes('青菜') && seasoningsInPot.includes('盐')) {
            return { emoji: '🥗', message: '清炒时蔬！健康又美味！' };
        }
        
        // 默认结果
        const randomDishes = [
            { emoji: '🍲', message: '美味大杂烩！有点像芷江的"乱七八糟"！' },
            { emoji: '🥣', message: '家常小菜！看起来还不错！' },
            { emoji: '🍛', message: '混合炒菜！闻起来很香！' }
        ];
        return randomDishes[Math.floor(Math.random() * randomDishes.length)];
    }
    
    // 重置游戏
    resetBtn.addEventListener('click', function() {
        // 清空锅
        pot.innerHTML = '';
        ingredientsInPot = [];
        seasoningsInPot = [];
        
        // 重置所有食材和调味品
        document.querySelectorAll('.ingredient, .seasoning').forEach(item => {
            item.style.opacity = '1';
            item.style.pointerEvents = 'auto';
        });
        
        // 隐藏结果区域
        resultArea.style.display = 'none';
        
        // 启用烹饪按钮
        cookBtn.disabled = false;
    });
});