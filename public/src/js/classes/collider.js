class Collider{
    constructor({position, width, height}){
        this.position = position;
        this.width = width;
        this.height = height;

        this.sx = 0;
        this.sy = 0;

        this.sides = {
            up: this.position.y ,
            left: this.position.x,
            bottom: this.position.y + this.height,
            right: this.position.x + this.width
        }
    }

    update({sx,sy}){
        this.sx = sx;
        this.sy = sy;
        this.position.x += sx;
        this.position.y += sy;
        this.sides = {
            up: this.position.y ,
            left: this.position.x,
            bottom: this.position.y + this.height,
            right: this.position.x + this.width
        }
    }

    isColliding = (coli1, coli2) =>{
        if(
            (coli1.sides.up <= coli2.sides.bottom)      && (coli1.sides.bottom >= coli2.sides.up) &&
            (coli1.sides.right >= coli2.sides.left) && (coli1.sides.left <= coli2.sides.right)
        ){ return true; }
        return false;
    }

    isCollidingTo(coli2){
        if(
            (this.sides.up < coli2.sides.bottom)      &&   (this.sides.bottom > coli2.sides.up) &&
            (this.sides.right > coli2.sides.left)     &&   (this.sides.left < coli2.sides.right)
        ){ return true; }
        return false;
    }

    drawOut(ctx){
        ctx.save();
        ctx.beginPath();
            ctx.rect(this.position.x+this.sx, this.position.y+this.sy, this.width, this.height);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.closePath();
            ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        ctx.restore();
    }
}