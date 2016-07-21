 var can1,ctx1,can2,ctx2,canWidth,canHeight;
 var last_time,delta_time;
 var bgImg = new Image();
 var ane;
 var fruit;
 var mom;
function game(){
    init();
    last_time = Date.now();
    delta_time = 0;
    gameloop();
}
function init(){
    can1 = document.getElementById('canvas1');
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');
    ctx2 = can2.getContext('2d');
    canWidth = can1.width;
    canHeight = can1.height;
    bgImg.src = 'img/background.jpg';
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
}
function gameloop(){
    requestAnimFrame(gameloop);
    var now = Date.now();
    delta_time = now - last_time;
    last_time = now;
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
}