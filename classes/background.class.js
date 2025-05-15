class Background extends MovableObject {
    x = 0;
    height = 480;
    width = 720;
    y = 0;
    speed;
  

    constructor(imagePath, x, s) {
        super().loadImage(imagePath)
        this.x = x;
        this.speed = s
    }

    
}