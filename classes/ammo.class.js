class Ammo extends MovableObject {


    constructor(x, y, otherDirection) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.width = 0;
        this.height = 0;
        this.charachterX = x,
        this.charachterY = y;
        this.otherDirection = otherDirection
        this.throw();
    }

    throw() {
        let direction;
        this.width = 25;
        this.height = 25;
        this.x = this.charachterX + 120;
        this.y = this.charachterY + 140;
        this.speedY = 5;
        this.applyGravity();
        if (this.otherDirection) {
            this.otherDirection = true
            direction = -10;
        } else {
            this.otherDirection = false
            direction = 10;
        }
        setInterval(() => {
            this.x += direction;
        }, 10);
    }
}