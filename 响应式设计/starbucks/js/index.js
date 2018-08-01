$(function () {


var W = document.body.clientWidth;
var clientW = (0.7) * W
$('.slide-container').css('width', function(){
    return 4 * clientW;
});
window.onresize = function(){
    clientW = document.body.clientWidth;
    $('.slide-container img').css({
        width: clientW
    });
    $('.slide-container').css('width', function(){
        return 4 * clientW;
    });
};


var nowIndex = 1;

var speed = 1500;

var play = function(){
    if(nowIndex == 4){
        nowIndex = 1;
        $('.slide-container').css({
            transition: 'none',
            transform: 'translateX(0px)'
        });
        speed = 0;
    }else{
        $('.slide-container').css({
            transition: 'transform .8s ease',
            transform: 'translateX(-'+ clientW * (nowIndex++) +'px)'
        });
        speed = 1500;
    }
    clearTimeout(timer);
    timer = setTimeout(play, speed);
};
var timer = setTimeout(play, speed);


});