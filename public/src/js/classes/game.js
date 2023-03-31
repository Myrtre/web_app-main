let lastTime =0;
function loop(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    window.game.update(deltaTime);
    requestAnimationFrame(loop);
}
class Game {
    constructor(){
        // Belöjük meg beállítjuk a canvas méreteit, stb.
        this.canvas = document.querySelector("#game_stage");
        this.ctx = this.canvas.getContext("2d");
            this.canvas.width = window.innerWidth - 200;
            this.canvas.height = window.innerHeight - 400;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#ABABAB';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.sprite = new Sprite({
            ctx: this.ctx,
            img_url: '../src/assets/spriteTest.png',
            width: 100,
            height: 100,
            framerate: 7
        });

        this.spriteFrame = new Point(0,0);
        this.spritePos = new Point(0,0);

        this.player = new Player({
            game: this,
            spawnpoint: new Point((this.canvas.width/2),(this.canvas.height))
        });
        
    };

    resize(x,y){
        this.canvas.width = x - 200;
        this.canvas.height = y - 400;
    }

    update(deltaTime){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#ABABAB';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.spriteFrame.x = 0
        this.spriteFrame.y = 0

        //this.spritePos.x = (this.spritePos.x + 1.1) % 256;

        this.sprite.render(this.spritePos, this.spriteFrame);


        // Játkos Játszik Játszódik a Játékos játszik a játokkal játokoskodik a játékban a játékos
        this.player.velocityX = 0;
        if(keys.d.pressed) 
            this.player.velocityX = 1;
        else if(keys.a.pressed) 
            this.player.velocityX = -1;
        this.player.draw();
        this.player.update();
    }
}

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
};

// const mouse = { 
//     x: innerWidth/2,
//     y: innerHeight/2
// }
// 
// window.addEventListener("mousemove", (event) => {
//     mouse.x = event.clientX - 535;
//     mouse.y = event.clientY - 50;
// });
