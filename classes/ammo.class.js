class Ammo extends MovableObject {
    

    constructor() {
        super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png")
        this.width = 20;
        this.height = 20;
        this.throw(200, 400);
    }


    throw(x, y) {
        setTimeout(() => {
             this.x = x;
        this.y = y;
        this.speedY= 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 6;
        }, 20);
            
        }, 1000);
        MovableObject.attack = true;
        setTimeout(() => {
            MovableObject.attack = false;
        }, 5000);
       
    }
}