//轮播图
//首先获取图片的id名称
var focusImg = document.getElementById('focusImg');
var startX,startY;
focusImg.addEventListener('touchstart',function (e) {
    e.preventDefault();
    startX = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].pageY;
});
focusImg.addEventListener('touchmove',function (e) {
    e.preventDefault();
    let X, Y;
    moveEndX = e.changedTouches[0].pageX;
    moveEndY = e.changedTouches[0].pageY;
    X = moveEndX - startX;
    Y = moveEndY - startY;
    //值大一点可以防止滑过头
    if ( X > 50 ) {
        add();
    }
    else if ( X < -50 ){
        noAdd();
    }else {
        console.log('meiyouhuadon');
    }

});

//设置一个可以切换图片src的标识
var sign = 1;
//轮播图ul对象
var lbtul=document.getElementById('dian');
//获取ul的子节点，即li节点
var lids=lbtul.children;
//轮播图滑动
function lbthd(lbd){
    showPic(lbd.textContent)
}

//在这里要给你的图片的src设置成类似pic1.jpg  pic2.jpg这种形式
function showPic(index){
    var imgSrc = './imgs/lbt/lb' + index + '.jpg';
    //图片用的名称是class而不是id
    //那么就不能使用focusImg.src这个方法，要使用focusImg.setAttribute('src'， imgSrc);方法
    //修改img的src地址
    focusImg.src = imgSrc;
    //恢复之前li点的样式
    var hfdli;
    for(hfdli of lids){
        hfdli.style.color='#eeeeee';
        hfdli.style.backgroundColor='#eeeeee';
        hfdli.style.height='10px';
        hfdli.style.width='10px';
    }
    //修改当前li的样式
    var dqtdli = lids.item(index-1);
    dqtdli.style.color='#acacac';
    dqtdli.style.backgroundColor='#a0a0a0';
    dqtdli.style.height='15px';
    dqtdli.style.width='15px';
}

function changePic(){
    sign++;
    //当图片轮播到第六张的时候让他变成第一张图片
    if(sign === 7){
        sign = 1;
    }
    showPic(sign);
}
//也可以直接把changePic()写在定时器里面
timer=setInterval(changePic, 1500);
function sbys() {
    // 停止定时器
    clearInterval(timer);
}


function sbyc() {
    //开始定时器
    timer=setInterval(changePic, 1500);
}

//浏览器加载时显示
window.onload = showPic(sign);
//左滑动用
function add(){
    sign++;
    if(sign === 7){
        sign = 1;
    }
    showPic(sign);
}
// 右滑动用
function noAdd(){
    sign--;
    if(sign === 0){
        sign = 6;
    }
    showPic(sign);
}
var wzdata=document.getElementById('pmdwz');
console.log(wzdata);
function xiugdata() {
    let data=new Date();
    wzdata.innerText=`现在是${data}`;
}
xiugdata();
setInterval(xiugdata,1000);
