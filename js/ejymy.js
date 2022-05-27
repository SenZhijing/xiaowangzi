var navas=document.getElementsByClassName('ejdhla');
navas.item(0).style.backgroundColor='white';
//修改nav导航栏样式
function ggays(dqdja){
    for(let na of navas){
        na.style.backgroundColor=' #b1c3ff';
        if(dqdja===na){
            dqdja.style.backgroundColor='white';
        }
    }
}
//iframe自适应窗口网页
function ifmzisy() {
    var iframe=document.getElementById('ejymif');
    //初始化高度为300；
    iframe.height=300;
    //获取滚动条的高度
    var bHeight = iframe.contentWindow.document.body.scrollHeight;
    // var bWidth = iframe.contentWindow.document.body.scrollWidth;
    // 获取元素内容的高度
    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
    // var dWidth= iframe.contentWindow.document.documentElement.scrollWidth;
    var sheight = Math.max(bHeight, dHeight);
    iframe.height=sheight;
    // var width=Math.max(bWidth,dWidth);
     // iframe.width=width;
}
//当窗口大小改变时，会触发
window.onresize=function () {
  ifmzisy();
};