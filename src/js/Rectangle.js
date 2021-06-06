
export default class Rectangle{

    constructor(game, x, isFirst) {
        this.game = game;
        this.height = 25;
        this.width = 150;
        this.x = x;
        this.yTable = [140,228,328];

        //this.y = this.getRandomArbitrary(150,600);
        if(isFirst){
            this.y = this.yTable[0];
        }
        else {
            this.y = this.yTable[1];
        }

    }
    update(){
        this.draw();
        this.x--;
        if (this.x < -this.width){
            this.x = 400;
            this.y = this.yTable[this.getRandomArbitrary(0,this.yTable.length)];

        }

    }

    draw(){

        this.game.context.beginPath();

        this.game.context.fillRect(this.x,this.y,this.width,this.height);



    }
    getRandomArbitrary(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
    }

}