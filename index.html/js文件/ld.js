document.addEventListener('DOMContentLoaded', function() {
    // 获取part10中的top-tp图片元素
    const topTpImage = document.querySelector('.part10 .top-tp img');

    if (topTpImage) {
        // 添加点击事件
        topTpImage.addEventListener('click', function() {
            // 跳转到detail.html页面
            window.location.href = '../html文件/detail.html';
        });
    }
});