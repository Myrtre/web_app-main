class Road{
    constructor({canvas}){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.roadBaseC = '#565656';
        //this.roadLineC = 'whitesmoke';

        this.basePoints = {
            lt: new Point2D( this.canvas.width/3, this.canvas.height/3),  //[l]eft[t]op
            rt: new Point2D( this.canvas.width/3*2, this.canvas.height/3),  //[r]right[t]op
            rb: new Point2D( this.canvas.width+10, this.canvas.height+10),  //[r]right[b]ottom
            lb: new Point2D( -10, this.canvas.height+10)   //[l]eft[b]ottom
        }  

        this.linePoints = {
            lt: new Point2D( (this.basePoints.lt.x + this.basePoints.rt.x)/2 - 10, this.basePoints.lt.y),                             //[l]eft[t]op
            rt: new Point2D( (this.basePoints.lt.x + this.basePoints.rt.x)/2 + 10, this.basePoints.lt.y),                            //[r]right[t]op
            rb: new Point2D( (this.basePoints.lb.x + this.basePoints.rb.x)/2 + 80, this.canvas.height+10),                          //[r]right[b]ottom
            lb: new Point2D( (this.basePoints.lb.x + this.basePoints.rb.x)/2 - 80, this.canvas.height+10)   //[l]eft[b]ottom
        }  
    };

    drawRoadBase(){
        this.ctx.fillStyle = this.roadBaseC;
        this.ctx.save();
        this.ctx.beginPath();
            this.ctx.moveTo(this.basePoints.lt.x,this.basePoints.lt.y);
            this.ctx.lineTo(this.basePoints.rt.x,this.basePoints.rt.y);
            this.ctx.lineTo(this.basePoints.rb.x,this.basePoints.rb.y);
            this.ctx.lineTo(this.basePoints.lb.x,this.basePoints.lb.y);
            this.ctx.lineTo(this.basePoints.lt.x,this.basePoints.lt.y);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    };

    drawRoadLine(deltaT){
        let dy = deltaT;
        this.ctx.save();
        //this.ctx.beginPath();
        let region = new Path2D();
            region.moveTo(this.linePoints.lt.x,this.linePoints.lt.y);
            region.lineTo(this.linePoints.rt.x,this.linePoints.rt.y);
            region.lineTo(this.linePoints.rb.x,this.linePoints.rb.y);
            region.lineTo(this.linePoints.lb.x,this.linePoints.lb.y);
            region.lineTo(this.linePoints.lt.x,this.linePoints.lt.y);
        region.closePath();
        this.ctx.restore();
    };

    render(deltaT){
        this.ctx.save();
            this.drawRoadBase();
            //this.drawRoadLine(deltaT);
        this.ctx.restore();
    };
};

class Background{
    constructor({canvas}){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.isEnoughCloud = false;
        this.rand = new Random().getRandomInt(2,5);
        
        this.cloudSprite = new Sprite({
            ctx: this.ctx,
            img_url: '../src/assets/clouds.png',
            width: 150,
            height: 80,
            framerate: 2
            }
        );
        
        this.clouds = [ new Point2D(0,0), new Point2D(0,1)];
        this.spawns = [];
        
        this.generateSpawn();
    };
    generateSpawn(){
       for(let i = 0; i < this.rand;i++){
            this.spawns.push(new Point2D( new Random().getRandomInt(100,this.canvas.width-100), new Random().getRandomInt(0,this.canvas.height/3 - 80)));
       }
    }

    makeSomeClouds(){
        
        if(this.isEnoughCloud) return;

        for(let i = 0; i < this.rand; i++){
            this.cloudSprite.render( this.spawns[i], this.clouds[new Random().getRandomInt(0,1)]);
        }


        //this.isEnoughCloud = true;
    }

    render(){
        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height/3);
        this.ctx.fillStyle = '#9EECFF';
        this.ctx.fill();

        this.makeSomeClouds();
        this.ctx.restore();
    }
}