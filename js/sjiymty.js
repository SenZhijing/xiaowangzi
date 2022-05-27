var totop=document.getElementById('gdrxj');
//先隐藏
totop.style.display='none';
//获取可视区域的高度
var ksHeight = document.documentElement.clientHeight;
//窗口滚动条滚动事件
window.onscroll = function() {
    //获取滚动条的滚动高度
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= ksHeight) {
        //如果滚动高度大于可视区域高度，则显示回到顶部按钮
        totop.style.display = 'block';
    } else { //否则隐藏
        totop.style.display = 'none';
    }
};