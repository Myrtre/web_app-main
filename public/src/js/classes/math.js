class Point2D{
    constructor(x = 0,y = 0) {
        this.x = x,
        this.y = y;
    }
}

function subPoint2D(pt1, pt2){
    return new Point2D(pt1.x - pt2.x, pt1.y - pt2.y);
}

class Point3D{
    constructor(x = 0,y = 0,z=0) {
        this.x = x,
        this.y = y;
        this.z = z;
    }
}
class Triangle{ 
    constructor(p0, p1, p2, t0, t1, t2) {
	    this.p0 = p0;
	    this.p1 = p1;
	    this.p2 = p2;

	    this.t0 = t0;
	    this.t1 = t1;
	    this.t2 = t2;
    }
}
class Random{
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}

class TextCoord{ 
    constructor(x,y,text) {
	    this.x = x;
        this.y = y;
        this.text = text;
    }

    draw(ctx){
        ctx.save();
            ctx.fillStyle = "#f5f5f5";
            ctx.font = 'bold 24px sans-serif';
            ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}
  