class PoisonBottle extends MovableObject {

    constructor(minX, maxX) {
        super().loadImage("./img/4. Marcadores/Posión/Light - Left.png");
        this.y = 350;
        this.x = minX + Math.random() * maxX;
        this.width = 50;
        this.height = 60;
        this.percentage = 0;
    }

    setPercentage() {
        
    }








}