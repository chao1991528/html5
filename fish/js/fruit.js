var fruitObj = function(){
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i=0; i<this.num; i++){
        this.fruitType[i] = '';
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = 0.005*Math.random()+0.005;
    }
    this.orange.src = 'img/fruit.png';
    this.blue.src = 'img/blue.png';
}
fruitObj.prototype.draw = function(){
    for(var i = 0; i<this.num; i++ ){
        if(this.alive[i]){
            if(this.l[i] <=10){
                this.l[i] += this.spd[i]*delta_time; 
            } else{
                this.y[i] -= this.spd[i]*6*delta_time; 
            } 
            var pic;
            if(this.fruitType[i] == 'blue'){
                pic = this.blue;
            } else{
                pic = this.orange;
            }    
            ctx2.drawImage(pic, this.x[i]-this.l[i]*0.5, this.y[i]-this.l[i], this.l[i], this.l[i]);
        }
        if(this.y[i] < 10){
            this.alive[i] = false;
        }
    }
} 

fruitObj.prototype.born = function(i){
    var aneId = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneId];
    this.y[i] = canHeight - ane.y[aneId];
    this.l[i] = 0;
    var ran = Math.random();
    if(ran>0.5){
        this.fruitType[i] = 'blue';
    }else{
        this.fruitType[i] = 'orange';
    }
    this.alive[i] = true;
}
function fruitMonitor(){
    var total = 0; 
    for(var i=0; i<fruit.num; i++){
        if(fruit.alive[i]){
            total++;
        }
    }
    if(total < 15){
        sendFruit();
    }
}
function sendFruit(){
    for(var i=0; i<fruit.num; i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}