import background from "./background";
import kirby from "./kirby";
import controllers from "./controllers";
import Rectangle from "./Rectangle";

const game ={
    canvas : document.getElementById('game'),
    context : null,
    spriteSheetsSrc : ['../resources/background.jpg', '../resources/kirby.png'],
    spriteBackground : new Image(),
    spriteKirby : new Image(),
    started :  false,
    spriteLoadedCounter : 0,
    spriteLoadedTotal : 2,
    rectangle1 : null,
    rectangle2: null,

    init(){
        this.context = this.canvas.getContext('2d');
        this.rectangle1 = new Rectangle(this,0, true);
        this.rectangle2 = new Rectangle(this,300 );

         this.spriteBackground.addEventListener('load',()=>{
             //controllers.init(this);
             background.init(this);
             this.animateIfPossible();

         });
        this.spriteKirby.addEventListener('load',()=>{
            //controllers.init(this);
            kirby.init(this);

            this.animateIfPossible();

        });

        this.spriteBackground.src = this.spriteSheetsSrc[0];
        this.spriteKirby.src = this.spriteSheetsSrc[1];
    },

    animateIfPossible(){
        this.spriteLoadedCounter++;
        if (this.spriteLoadedCounter === this.spriteLoadedTotal){
            this.animate();
        }
    },

    animate(){
        window.requestAnimationFrame(() => {
            this.animate();
        })
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        background.update();
        kirby.update();
        this.rectangle1.update();
        this.rectangle2.update();


    },

    renderSpriteFrameBakcground(coordinates){

        this.context.drawImage(
            this.spriteBackground,
            coordinates.sx,
            coordinates.sy,
            coordinates.sw,
            coordinates.sh,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh,

        );


    },
    renderSpriteFrameKirby(coordinates){

        this.context.drawImage(
            this.spriteKirby,
            coordinates.sx,
            coordinates.sy,
            coordinates.sw,
            coordinates.sh,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh,

        );


    },



}
game.init();
