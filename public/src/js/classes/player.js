class Player{
    constructor({game, spawnpoint}){
        this.game = game;
        this.ctx = game.ctx;
        this.canvas = game.canvas;

        this.width = 200;
        this.height = 200;

        this.position = spawnpoint;
        this.position.x -= this.width/2;
        this.position.y -= (this.height+10);
        
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
        this.playerSpriteFrame = new Point(0,0);    //a sima kocsik, 1,0 a törött!

        //Collider
        this.colli = new Collider({
            game: this.game,
            position: this.position,
            width: this.width,
            height: this.height
        })
    }

    draw(){
        //Ajutó
        this.playerSprite.render(this.playerSpritePos, this.playerSpriteFrame);

        this.ctx.beginPath();
        //Collider
        this.ctx.rect(this.colli.position.x, this.colli.position.y, this.colli.width, this.colli.height);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "#000";
        this.ctx.strokeRect(this.colli.position.x, this.colli.position.y, this.colli.width, this.colli.height);
    }

    update(){
        // Betartjuk a sebesség korlátozástazért na
        if(this.velocityX > 10)
        this.velocityX = 10;
        if(this.velocityX < -10)
        this.velocityX = 10;
        
        if((this.sides.left + this.velocityX >= 0) && (this.sides.right + this.velocityX <= this.canvas.width)){
            //pozició váltás mintha nem lenne holnap
            this.position.x += this.velocityX;
            this.sides.left = this.position.x,
            this.sides.right = this.position.x + this.width
        }else this.velocityX = 0;


        this.colli.update(this.position);
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