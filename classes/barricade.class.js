class Barricade extends MovableObject {
    offset = {
        top: this.height - (this.height / 2),
        bottom: 0,
        left: this.width - (this.width / 2),
        right: this.width - (this.width / 2)
    }

    constructor(x,y, width, height, url) {
        super().loadImage(url);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}