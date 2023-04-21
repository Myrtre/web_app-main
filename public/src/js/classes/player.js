class Player{
    constructor({game, spawnpoint, size}){
        this.game = game;
        this.ctx = game.ctx;
        this.canvas = game.canvas;

        this.width = size.width;
        this.height = size.height;

        this.position = spawnpoint;
        this.position.x -= this.width/2;
        this.position.y -= (this.height+10);
        
        this.speed = 5;
        // mozgásváltozás +/-
        this.velocityX = 0;

        //A Karakter "szélei"
        this.sides = {
            left: this.position.x,
            right: this.position.x + this.width
        }

        // Kisautó kirajzolás
        this.playerSprite = new Sprite({
            ctx: this.ctx,
            img_url: '../src/assets/playerCar.png',
            width: this.width,
            height: this.height,
            framerate: 2
        });
        this.playerSpritePos = this.position;
        this.playerSpriteFrame = new Point2D(0,0);    //a sima kocsik, 1,0 a törött!

    }

    draw(){
        //Ajutó
        this.ctx.save();
        this.playerSprite.render(this.playerSpritePos, this.playerSpriteFrame);
        this.ctx.restore();
    }

    update(){
        // Betartjuk a sebesség korlátozástazért na
        this.velocityX *= this.speed;
        if(this.velocityX > 10)
            this.velocityX = 10;
        if(this.velocityX < -10)
            this.velocityX = -10;
        
        if((this.sides.left + this.velocityX >= 0) && (this.sides.right + this.velocityX <= this.canvas.width)){
            //pozició váltás mintha nem lenne holnap
            this.position.x += this.velocityX;
            this.sides.left = this.position.x,
            this.sides.right = this.position.x + this.width
        }else this.velocityX = 0;
    }

    gatherData(){
        const playerInfo = {
            "x": this.position.x,
            "y": this.position.y,
            "width": this.width,
            "height": this.height
        }
        return playerInfo;
    }
}