class Sprite{
    constructor({ctx,img_url,width=64, height=64, framerate=1}){
        this.ctx = ctx;
        this.isLoaded = false;

        this.size = new Point2D(64,64);   //Alapértelmezett méret
        this.size.x = width
        this.size.y = height;

        this.framerate = framerate;

        this.image = new Image();
        this.image.src = img_url;
        this.image.sprite = this;
        this.image.onload = () => {
            this.isLoaded = true;
            this.uv_x = Math.floor(this.image.width / this.framerate);
            this.uv_y = this.image.height;
        }
    }
    
    scaleUp(x,y){
        this.size.x += x
        this.size.y += y;
    }

    render(position, frame){
        if(!this.isLoaded) return;

        this.ctx.save();
        const cropped ={
            position: {
                x: this.uv_x * frame.x,
                y: frame.y
            },
            width: this.uv_x,
            height: this.uv_y
        }

        this.ctx.drawImage(
            this.image, 
            cropped.position.x,
            cropped.position.y,
            cropped.width,
            cropped.height,
            position.x,
            position.y,
            this.size.x,
            this.size.y
            );
        this.ctx.restore();
    }
}