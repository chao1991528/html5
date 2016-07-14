var can;
var ctx;
var w,h;
var img = new Image();
var starImg = new Image();
var stars = [];
var num=50;
var lastTime;
var deltaTime;
var switcher = false;
function init(){
    document.addEventListener('mousemove', mousechange,false);
    can = document.getElementById('canvas');
    ctx = can.getContext("2d");
    w = can.width;
    h = can.height;
    for(var i=0; i<num; i++){
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    img.src = 'img/girl.jpg';
    starImg.src = 'img/star.png';
    lastTime = Date.now();
    begin();
}

function begin(){
    window.requestAnimFrame(begin);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    fillCanvas();
    fillImg();
    fillStars();
}

function fillStars(){
    for(var i=0; i<num; i++){
        stars[i].update();
        stars[i].drawStar();
    }
}

function fillImg(){
    var padLeft=100;
    var padTop = 150;
    var heght = 300;
    var width = 600;
    ctx.drawImage(img, padLeft, padTop, width,heght);
}

function fillCanvas(){
    ctx.fillStyle = "#393550";
    ctx.fillRect(0, 0, w, h);
}

function mousechange(e){
    if(e.offsetX || e.layerX){
        var px = e.offsetX == undefined?e.layerX:e.offsetX;
        var py = e.offsetY == undefined?e.layerY:e.offsetY;
        if(px>100 && px<700 && py>150 &&py<450){
            switcher = true;
        }else{
            switcher = false;
        }
    }
}