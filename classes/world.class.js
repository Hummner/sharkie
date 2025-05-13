class World {
    charachter = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    light = new Light();
    floor = new Floor();
    water = new Water();
    backgrounds = [
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png"),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png"),
    ]

    ctx;
    canvas;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.charachter.world = this
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0);


        this.addToMap(this.water);
        this.addToMap(this.light);
        this.addObjectsToMap(this.backgrounds);


        this.addToMap(this.floor);
        this.addToMap(this.charachter);
        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x, 0);






        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        })
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x =  object.x * -1;

        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.otherDirection) {
            this.ctx.restore();
            object.x =  object.x * -1;
        }
    }
}