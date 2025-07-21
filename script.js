document.addEventListener('DOMContentLoaded', function() {
    // 更新时间
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('zh-CN', { hour12: false });
        document.getElementById('current-time').textContent = timeString;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
    
    // 导航栏交互
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.id === 'nav-business') {
                e.preventDefault();
                document.getElementById('business-modal').style.display = 'flex';
            } else if (this.id === 'nav-me') {
                e.preventDefault();
                document.getElementById('me-modal').style.display = 'flex';
            } else {
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 关闭弹窗
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // 点击弹窗外部关闭
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
    
    // 换肤功能
    const themeItems = document.querySelectorAll('.theme-item');
    themeItems.forEach(item => {
        item.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            document.querySelector('.traffic-info').style.backgroundColor = color;
            document.querySelector('.header').style.backgroundColor = color;
            document.querySelectorAll('.close-btn').forEach(btn => {
                btn.style.backgroundColor = color;
            });
            document.getElementById('me-modal').style.display = 'none';
        });
    });
});