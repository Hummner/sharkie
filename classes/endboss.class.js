class Endboss extends MovableObject {

    y = -800;
    width = 500;
    height = 600;
    offset = {
        top: 300,
        bottom: 140,
        left: 50,
        right: 100
    }

    WALKING_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/13.png"

    ];

    INTRO_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png"
    ]


    constructor() {

        super().loadImage(this.INTRO_IMAGES[0]);
        this.loadImages(this.INTRO_IMAGES)
        this.loadImages(this.WALKING_IMAGES);
    
        this.x = 550;


    }


    animate() {
        let introCounter = 0;
        this.y = -200;
        setInterval(() => {

                if (introCounter < 10) {
                    this.playAnimation(this.INTRO_IMAGES);
                    introCounter++;
                } else {
                    this.playAnimation(this.WALKING_IMAGES)
                    
                }
          



        }, 150);

    }

}