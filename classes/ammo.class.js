class Ammo extends MovableObject {


    constructor(x, y, otherDirection) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.width = 0;
        this.height = 0;
        this.charachterX = x,
        this.charachterY = y;
        this.otherDirection = otherDirection
        this.speedY = 5;
        this.throw();
    }
}