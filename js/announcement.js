// 公告栏弹窗实现
(function() {
  // 检查是否已经显示过公告
  if (!localStorage.getItem('announcementShown')) {
    // 创建弹窗元素
    const announcement = document.createElement('div');
    announcement.id = 'announcement-popup';
    announcement.style.position = 'fixed';
    announcement.style.bottom = '20px';
    announcement.style.right = '20px';
    announcement.style.width = '300px';
    announcement.style.padding = '15px';
    announcement.style.backgroundColor = '#fff';
    announcement.style.borderRadius = '5px';
    announcement.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    announcement.style.zIndex = '9999';
    
    // 弹窗内容
    announcement.innerHTML = `
      <h3 style="margin-top:0;">公告</h3>
      <p>欢迎访问我的网站！</p>
      <button id="close-announcement" style="margin-top:10px;">我知道了</button>
    `;
    
    // 添加到页面
    document.body.appendChild(announcement);
    
    // 关闭按钮事件
    document.getElementById('close-announcement').addEventListener('click', function() {
      announcement.style.display = 'none';
      localStorage.setItem('announcementShown', 'true');
    });
  }
})();