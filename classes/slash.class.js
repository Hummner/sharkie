class Slash extends MovableObject {


    constructor(x, y, otherDirection) {
        super().loadImage("")
        this.width = 0;
        this.heigth = 0;
        this.charachterX = x;
        this.charachterY = y;
        this.otherDirection = otherDirection
        this.meleeAttack();
    }



    meleeAttack() {
        let offsetX;
        let offsetY = +120;

      
            if (this.otherDirection) {
                this.otherDirection = true
                offsetX = -90;
            } else {
                this.otherDirection = false
                offsetX = +90;
            }
            this.width = 150;
            this.heigth = 100;

            this.x = this.charachterX + offsetX;
            this.y = this.charachterY + offsetY;





    }
}