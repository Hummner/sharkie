class DrawableObject {

    x = 120;
    y = 400;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(e) {
            console.warn("Error loading image", e);
            console.log("Path: ", this.img.src)
        }
        
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })

    }

    drawFrame(ctx) {
        if (this instanceof Slash) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameRed(ctx) {
        if( this instanceof Endboss) {
        const x = this.x + this.offset.left;
        const y = this.y + this.offset.top;
        const width = this.width - this.offset.left - this.offset.right;
        const height = this.height - this.offset.top - this.offset.bottom;

        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "red";
        ctx.rect(x, y, width, height);
        ctx.stroke();
        }
    }

}