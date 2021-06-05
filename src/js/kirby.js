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
    width : 21,
    height : 21,
    x : 40,
    y : 107,
    maxAnimationStep:0,
    animationStep : 0,
    counterIntervall : 0,
    maxIntervall : 6,



    init(game){
        this.game = game;
        this.maxAnimationStep = this.frame.length-1;

    },

    update() {
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
}

export default kirby;