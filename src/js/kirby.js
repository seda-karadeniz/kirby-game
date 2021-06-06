import background from "./background";


const kirby ={
    game : null,
    frame : [
        {sx:5,sy:222},
        {sx:38,sy:222},
        {sx:71,sy:222},
        {sx:104,sy:222},
        {sx:137, sy:222},
        {sx:170, sy:222},
        {sx:203, sy:222},
        {sx:236, sy:222},
    ],
    width : 20,
    height : 20,
    x : 40,
    y : 107,
    maxAnimationStep:0,
    animationStep : 0,
    counterIntervall : 0,
    maxIntervall : 6,
    fallSpeed : 0,
    maxFallSpeed : 2,




    init(game){
        this.game = game;
        this.maxAnimationStep = this.frame.length-1;
        this.fallSpeed = 0;
        this.maxFallSpeed = 2;
        this.jump();

    },

    update() {
        if (!(this.collisionRectangle())  ){
            if (this.fallSpeed < this.maxFallSpeed){
                this.fallSpeed += this.game.gravity;
            }
            this.y += this.fallSpeed;
        }
        if (this.y > background.frame.dh){
            console.log('oui')
            this.game.cancelAnimation();
        }


        this.render();

    },

    render(){
        this.counterIntervall++;
        if (!(this.counterIntervall % this.maxIntervall)){
            this.counterIntervall = 0;
            this.animationStep++;
            if (this.animationStep > this.maxAnimationStep){
                this.animationStep = 0;
            }
        }
        this.game.context.save();
        this.game.context.translate(this.x, this.y);
        this.game.renderSpriteFrameKirby({
            sx: this.frame[this.animationStep].sx,
            sy: this.frame[this.animationStep].sy,
            sw : this.width,
            sh : this.height,
            dx: -this.width / 2,
            dy: -this.height / 2,
            dw: this.width,
            dh: this.height,
        });
        this.game.context.restore();

    },

    collisionRectangle(){

        if ((this.x <= this.game.rectangle1.x + this.game.rectangle1.width) &&
            (this.x + this.width >= this.game.rectangle1.x) &&
            (this.y + this.height === this.game.rectangle1.y+10)
            ||
            ((this.x <= this.game.rectangle2.x + this.game.rectangle2.width) &&
            (this.x + this.width >= this.game.rectangle2.x) &&
            (this.y + this.height === this.game.rectangle2.y+10))){
            return true
        }

        else {
            return false;
        }

    },
    jump(){
        window.addEventListener('keydown', (e)=>{
            if (e.key === 'j'){
                this.y -= 40;
                this.x += 15;

            }
        })
    }
}

export default kirby;