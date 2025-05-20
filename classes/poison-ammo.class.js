class PoisonAmmo extends MovableObject {


    constructor(x, y, otherDirection) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.width = 0;
        this.height = 0;
        this.charachterX = x,
        this.charachterY = y;
        this.speedY = 5;
        this.otherDirection = otherDirection
        this.throw();
    }
    
}