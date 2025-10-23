// 全局变量
let currentExample = 0;
let flippedIndex = -1;
let completedSentences = 0;
let totalSentences = 0;

// 翻转指定卡片
function flipCard(card) {
    const cardIndex = parseInt(card.classList[1].split('-')[1]);
    
    if (cardIndex === 0) {
        if (flippedIndex === 5) {
            card.classList.add('flipped');
        }
        return;
    }
    
    if ((cardIndex === 1 && flippedIndex === -1) || (cardIndex === flippedIndex + 1)) {
        card.classList.add('flipped');
        flippedIndex = cardIndex;
        
        if (flippedIndex === 5) {
            setTimeout(() => {
                document.querySelector('.card-0').classList.add('flipped');
            }, 300);
        }
        
        const prompt = card.querySelector('.validation-prompt');
        if (prompt) {
            prompt.remove();
        }
        
        if (cardIndex < 5) {
            const nextCard = document.querySelector(`.card-${cardIndex + 1}`);
            if (nextCard && !nextCard.querySelector('.validation-prompt')) {
                const prompt = document.createElement('div');
                prompt.className = 'validation-prompt';
                prompt.textContent = '点击验证';
                nextCard.querySelector('.card-front').appendChild(prompt);
            }
        }
    }
}

// 翻转所有卡片
function flipAllCards() {
    for (let i = 1; i <= 5; i++) {
        const card = document.querySelector(`.card-${i}`);
        card.classList.add('flipped');
        
        const prompt = card.querySelector('.validation-prompt');
        if (prompt) {
            prompt.remove();
        }
    }
    
    setTimeout(() => {
        document.querySelector('.card-0').classList.add('flipped');
    }, 300);
    
    flippedIndex = 5;
}

// 重置所有卡片
function resetAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flipped');
        
        const prompt = card.querySelector('.validation-prompt');
        if (prompt) {
            prompt.remove();
        }
    });
    
    document.querySelector('.card-0').classList.remove('flipped');
    
    for (let i = 1; i <= 5; i++) {
        const card = document.querySelector(`.card-${i}`);
        card.classList.remove('flipped');
    }
    
    const firstCard = document.querySelector('.card-1');
    if (firstCard && !firstCard.querySelector('.validation-prompt')) {
        const prompt = document.createElement('div');
        prompt.className = 'validation-prompt';
        prompt.textContent = '点击验证';
        firstCard.querySelector('.card-front').appendChild(prompt);
    }
    
    flippedIndex = -1;
}

// 显示动词原形提示
function showHint() {
    const hintMessage = document.getElementById('hintMessage');
    const currentExampleData = appConfig.examples[currentExample];
    const verb = currentExampleData.verb;
    
    hintMessage.textContent = verb;
    hintMessage.style.display = 'block';
    
    setTimeout(() => {
        hintMessage.style.display = 'none';
    }, 2000);
}

// 切换到下一个例句
function switchExample() {
    // 记录当前句子完成
    completedSentences++;
    
    // 检查是否完成所有练习
    if (completedSentences >= totalSentences) {
        showCompletionMessage();
        return;
    }
    
    currentExample = (currentExample + 1) % appConfig.examples.length;
    updateExample();
    resetAllCards();
}

// 更新当前例句的界面显示
function updateExample() {
    const example = appConfig.examples[currentExample];
    
    const chineseCardFront = document.querySelector('.card-0 .card-front .card-content');
    const chineseCardBack = document.querySelector('.card-0 .card-back .card-content');
    chineseCardFront.textContent = example.chinese;
    chineseCardBack.textContent = example.german;
    
    for (let i = 1; i <= 5; i++) {
        const partCard = document.querySelector(`.card-${i} .card-back .model-part`);
        const part = example.parts.find(p => p.position === i);
        partCard.textContent = part ? part.text : '-';
    }
    
    const indicator = document.querySelector('.example-indicator');
    indicator.textContent = `例句 ${currentExample+1}/${appConfig.examples.length}`;
}

// 显示完成消息
function showCompletionMessage() {
    const lessonName = getLessonName();
    alert(`恭喜！您已完成${lessonName}的所有练习！`);
    
    // 通知父窗口（如果存在）
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({
            type: 'lessonCompleted',
            lesson: lessonName
        }, '*');
    }
    
    // 保存到本地存储
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completedLessons.includes(lessonName)) {
        completedLessons.push(lessonName);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    }
}

// 获取当前课程名称
function getLessonName() {
    const title = document.title;
    if (title.includes('A1-1')) return 'A1-1';
    if (title.includes('A1-2')) return 'A1-2';
    if (title.includes('A1-3')) return 'A1-3';
    return 'A1练习';
}

// 页面加载完成后的初始化函数
window.onload = function() {
    totalSentences = appConfig.examples.length;
    updateExample();
    
    const exampleCard = document.querySelector('.card-0');
    exampleCard.classList.remove('flipped');
    
    const chineseCardFront = exampleCard.querySelector('.card-front .card-content');
    const chineseCardBack = exampleCard.querySelector('.card-back .card-content');
    const currentExampleData = appConfig.examples[currentExample];
    chineseCardFront.textContent = currentExampleData.chinese;
    chineseCardBack.textContent = currentExampleData.german;
    
    for (let i = 1; i <= 5; i++) {
        const card = document.querySelector(`.card-${i}`);
        card.classList.remove('flipped');
    }
    
    const firstCard = document.querySelector('.card-1');
    if (firstCard && !firstCard.querySelector('.validation-prompt')) {
        const prompt = document.createElement('div');
        prompt.className = 'validation-prompt';
        prompt.textContent = '点击验证';
        firstCard.querySelector('.card-front').appendChild(prompt);
    }
    
    // 添加禁用功能
    initSecurityFeatures();
};

// 初始化安全功能
function initSecurityFeatures() {
    // 禁用右键菜单
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // 禁用键盘快捷键
    document.addEventListener('keydown', function(e) {
        // 禁用F12、Ctrl+Shift+I、Ctrl+U、Ctrl+S、Ctrl+A、Ctrl+C、Ctrl+V、Ctrl+X
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 's') ||
            (e.ctrlKey && e.key === 'a') ||
            (e.ctrlKey && e.key === 'c') ||
            (e.ctrlKey && e.key === 'v') ||
            (e.ctrlKey && e.key === 'x')) {
            e.preventDefault();
            return false;
        }
    });
    
    // 禁用拖拽
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // 禁用选择文本
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
}