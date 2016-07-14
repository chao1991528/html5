var starObj = function(){
    this.x ;
    this.y;
    this.picNo;
    this.ySpd;
    this.xSpd;
    this.beta;
}
starObj.prototype.init = function(){
    this.x = Math.random()*600 + 100; 
    this.y = Math.random() *300 + 150;
    this.picNo = Math.floor(Math.random()*7);
    this.xSpd = Math.random() * 0.3-0.15;
    this.ySpd = Math.random()  * 0.3-0.15;
}

starObj.prototype.update = function(){
    this.x += this.xSpd;
    this.y += this.ySpd;
    if(this.x<100  || this.x >700){
        this.init();
        return;
    }
    if(this.y<150 || this.y >450){
        this.init();
        return;
    }
    if(deltaTime>20){
        this.picNo += 1;
        this.picNo  = this.picNo%7;
    }  
}

starObj.prototype.drawStar = function(){
    ctx.save();
    if(switcher){
        ctx.globalAlpha = 1;
    }else{
        ctx.globalAlpha = 0;
    }
    ctx.drawImage(starImg, this.picNo*7, 0, 7, 7,this.x, this.y, 7, 7); 
    ctx.restore();   
}