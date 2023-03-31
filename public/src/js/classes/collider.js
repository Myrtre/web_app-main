class Collider{
    constructor({game,position, width, height}){
        this.ctx = game.ctx;
        this.position = position;
        this.width = width;
        this.height = height;

        this.sides = {
            up: this.position.y ,
            left: this.position.x,
            bottom: this.position.y + this.height,
            right: this.position.x + this.width
        }
    }

    update(position){
        this.sides = {
            up: position.y ,
            left: position.x,
            bottom: position.y + this.height,
            right: position.x + this.width
        }
    }

    isColliding(coli1, coli2){
        if(
            (coli1.sides.up <= coli2.sides.bottom)      && (coli1.sides.bottom >= coli2.sides.up) &&
            (coli1.sides.right >= coli2.sides.left) && (coli1.sides.left <= coli2.sides.right)
        ){
            return true;
        }
        return false;
    }
}