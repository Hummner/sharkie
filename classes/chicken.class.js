class Chicken extends MovableObject {

    height = 70;
    width = 110;

     offset = {
        top: 10,
        bottom: 20,
        left: 10,
        right: 20
    }
    WALKING_IMAGES = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ];
    

    constructor() {
        super().loadImage("/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");

        this.x = 200 + Math.random() * 500;
        this.y = 100 + Math.random() * 300;
        this.loadImages(this.WALKING_IMAGES)
        this.speed = 0.3 + Math.random() * 0.5;
        this.animate();
        


    }

    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000/ 60);
         
        setInterval(() => {
            this.playAnimation(this.WALKING_IMAGES);
            
        }, 150)

    }

}