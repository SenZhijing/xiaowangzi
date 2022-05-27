//按类名 获得所有相册里的div，得到的是集合转为数组，以便用foreach循环
var sytp = Array.from(document.getElementsByClassName('sdt'));
//图片旋转度数
var Deg = 360 / sytp.length;

function djsdxc() {
//foreach循环，使每张图旋转
    sytp.forEach(function (tp, index) {
        tp.style.transform = `rotateY(${Deg * index}deg) translateZ(300px)`;
        tp.style.zIndex = `${-index}`;
    });
}
function huifu() {
    sytp.forEach(function (tp,index) {
       tp.style.transform='';
    });
}
var ronqi=document.getElementById('wrap');
document.onmousedown= function(event){
    //利用正则得到x，y轴的数值
    var reg = /-?[0-9]+\.?[0-9]*/g;
    var bf = ronqi.style.transform|| '0,0';

    var arr = bf.match(reg);
    var bfX = Number(arr[0]);
    var bfY = Number(arr[1]);
    var startX = event.pageX;
    var startY = event.pageY;
    document.onmousemove= function(event) {
        var disX = event.pageX - startX -100;
        var disY = event.pageY - startY-100 ;
        var y=(disX+bfY)%360;
        var x=(disY+bfX)%360;
        ronqi.style.transform= "rotateX("+x+"deg) rotateY("+y+"deg)";
    };
    document.onmouseup=function(event) {
        document.onmousemove=null;
        document.onmouseup=null;
    };
    return false;
};
ronqi.style.animation='dh3dxz 20s infinite linear';
var qybt=document.getElementsByClassName('qy3d');
//3d相册动画的开关，手滑的开关。开了动画后，手滑用不了，所以相当于开关了
function kqdh(bt) {
    var str = bt.textContent;
    if(str==='启用自动3D'){
        ronqi.style.animation='dh3dxz 16s infinite linear';
    }else{

        ronqi.style.animation=null;
    }
}


