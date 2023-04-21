var paused = false;

var timePoint = 0;
function togglePause() {
    paused = !paused;
}

var canvasWidth = window.innerWidth / 2;
var canvasHeight = window.innerHeight - 400;

class Game {
    constructor(){

        this.fps = 60;
        this.gameSpeed = 1;

        this.problems = [];
        this.problemTimer = 0;
        this.problemInterval = 60*2;
        
        this.makeHardTimer = 0;
        this.makeHardInterval = 60*10;

        this.gameIsRunning = true;
    };

    prepare(){
        // Belöjük meg beállítjuk a canvas méreteit, stb.
        this.canvas = document.querySelector("#game_screen");
        this.ctx = this.canvas.getContext("2d", {});
        
        this.ctx.imageSmoothingEnabled = true;

        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#ABABAB';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.player = new Player({
            game: this,
            spawnpoint: new Point2D((this.canvas.width/2 + 30),(this.canvas.height)),
            size: {
                width: 200,
                height: 200
            }
        });

        this.road = new Road({canvas: this.canvas});
        this.bg = new Background({canvas: this.canvas});
        
    }

    toggleScreen(id,toggle){
        let element = document.getElementById(id)

        if(toggle)
            element.classList.remove('d-none');
        else{
            element.classList.add('d-none');
        }
    }

    addProblem(){
        this.problems.push( new Problems({game: this}) );
    }

    resize(x,y){
        this.canvas.width = x / 2;
        this.canvas.height = y - 400;
    }

    start(){
        this.toggleScreen('startScreen',false);
        this.toggleScreen("gameOver",false);
        this.toggleScreen("stage",true);

        this.prepare();
        this.loop = setInterval((d) => {
            if(!paused)
                this.update(d);
            else{
                (new TextCoord(this.canvas.width/10, this.canvas.height/6, "paused").draw(this.ctx));
            }
        }, 1000/this.fps);
    }

    stop(){
        clearInterval();
    }

    reset(){
        paused = false;
        timePoint = 0;
    }

    update(){
        if(!this.gameIsRunning) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#79D021';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.save();


        this.bg.render();
        this.road.render(null);
        

        if(this.problemTimer > this.problemInterval){
            this.addProblem();
            this.problemTimer = 0;
        }
        else{
            this.problemTimer += Number.isNaN(this.problemTimer)?0:1;
            console.log(this.problemTimer);
        }


        this.problems.forEach(function(item,index,object){
            if(item.isActive()){
                item.update();
            }else{
                object.splice(index, 1);
            }
        })
        
        // Játkos Játszik Játszódik a Játékos játszik a játokkal játokoskodik a játékban a játékos
        this.player.velocityX = 0;
        if(keys.d.pressed) 
            this.player.velocityX = 1;
        else if(keys.a.pressed) 
            this.player.velocityX = -1;
        this.player.draw();
        this.player.update();


        // Ütközés :scream:
        this.problems.forEach( e => {

            let Collider1 = new Collider({
                position: {
                    x: e.position.x+5,
                    y: e.position.y+5
                },
                width: e.width-10,
                height: e.height-10
            })

            let Collider2 = new Collider({
                position: {
                    x: this.player.position.x+25,
                    y: this.player.position.y+10
                },
                width: this.player.width-50,
                height: this.player.height-25
            });

            //Collider1.drawOut(this.ctx);
            //Collider2.drawOut(this.ctx);

            if(Collider2.isCollidingTo(Collider1)){
                this.gameIsRunning = false;
                this.stop();

                this.toggleScreen('startScreen',false);
                this.toggleScreen("stage",false);

                this.toggleScreen("gameOver",true);

            }
        });


        (new TextCoord(this.canvas.width/2, 25, Number.parseInt((timePoint++)/60)).draw(this.ctx));


        this.ctx.restore();
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
