class Problems{
    constructor({game, speed=0.85}){
        this.game = game;
        this.ctx = this.game.ctx;
        this.canvas = this.game.canvas;

        this.speed = speed;

        this.width= 70;
        this.height= 70;

        this.active = true;
        this.position = new Point2D( new Random().getRandomInt(this.canvas.width/3,this.canvas.width/3*2) , this.canvas.height/3 - 50 );
        this.selectedType = new Random().getRandomInt(0,4);

        this.imgSprite = new Sprite({
            ctx: this.ctx,
            img_url: '../src/assets/problems.png',
            width: this.width,
            height: this.height,
            framerate: 4
        });

        this.types = [
            new Point2D(0,0),
            new Point2D(1,0),
            new Point2D(2,0),
            new Point2D(3,0)
        ]

    }

    isActive(){
        return this.active;
    }

    update(){
        this.imgSprite.render(this.position, this.types[this.selectedType]);

        this.position.y += this.speed;
        if(this.position.y > this.canvas.height + this.height){
            this.active = false;
        }
    }
}