
function loop(){
    window.game.update();
    requestAnimationFrame(loop);
}

class Game{
    constructor(canvas, gl){
        this.canvas = canvas;
        this.gl = gl;

        this.worldMatrix = new Mtx3();
    
        //this.sp1 = new Sprite(this.gl,"../res/img/teszt.jpg",vsSource, fsSource,{width: 64, height: 64});
        //this.sp2 = new Sprite(this.gl,"../res/img/profPics.jpg",vsSource, fsSource, {width:100,height:100});
        
        this.sp3 = new Sprite(this.gl,"../res/img/spriteTest.png",vsSource, fsSource, {width:64,height:64});

        this.sp3Pos = new Point();
        this.sp3Frame = new Point();
        
    }
    resize(x,y){
        this.canvas.width = x - 50;
        this.canvas.height = y - 200;

        let widthRatio = x /(y/240);
        //this.worldMatrix = new Mtx3().transition(-1,1).scale(1,-2/2);
        this.worldMatrix = new Mtx3().transition(-1,1).scale(2/widthRatio, -2/240);
    }
    update(){
        // set up Canvas for every Time
        this.gl.viewport(0,0, this.canvas.width, this.canvas.height);
        this.gl.clearColor(.75, .85, .8, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        

        this.sp3Frame.x = (new Date() *0.006) % 3
        this.sp3Frame.y = (new Date() *0.002) % 3

        this.sp3Pos.x = (this.sp3Pos.x + 1.1) % 256;

        this.sp3.render(this.sp3Pos,this.sp3Frame);

        this.gl.flush();
    }
}
