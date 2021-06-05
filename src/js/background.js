const background = {
    game : null,
    frame: {
        sx: 4,
        sy: 4,
        sw: 6500,
        sh: 600,
        dx: 0,
        dy: 0,
        dw: 6500,
        dh: 600,
    },
    speed : 1,
    maxOffset : 0,
    update(){

        if (this.frame.dx <= -this.maxOffset){
            this.frame.dx = 0;

        }
        this.frame.dx -= this.speed;
        this.game.renderSpriteFrameBakcground(this.frame);
    },

    init(game) {
        this.game = game;
        this.maxOffset = this.frame.sw - game.canvas.width;


    },


}
export default background;