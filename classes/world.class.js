class World {
    charachter = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    light = new Light();

    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.charachter.img, this.charachter.x, this.charachter.y, this.charachter.width, this.charachter.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
        })
        this.ctx.drawImage(this.light.img, this.light.x, this.light.y, this.light.width, this.light.height)



        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}