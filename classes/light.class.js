class Light extends MovableObject {
x = 0;
y = 0;
width = 780;
height = 400;

constructor() {
    super().loadImage("img/3. Background/Layers/1. Light/COMPLETO.png");

    this.x = 200 + Math.random() * 500;
    
    }
}