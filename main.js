websiteData.forEach(item => {
    const card = document.createElement('a');
    card.className = 'site-card';
    
    // 设置数据标签属性
    card.dataset.tags = JSON.stringify(item.tags?.map(t => t.text) || []);
    
    // 标准卡片内容
    card.innerHTML = `
        <img src="${item.preview}" class="preview-image">
        <h2 class="site-title">${item.title}</h2>
        <p class="site-description">${item.description}</p>
        <div class="tag-container">
            ${item.tags?.map(t => `<span class="tag" style="--tag-color: ${t.color}">${t.text}</span>`).join('')}
        </div>
    `;

    // 添加链接地址
    if (item.url) {
        card.href = item.url;
    }

    container.appendChild(card);
});