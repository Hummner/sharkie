class World {
    charachter = new Character();
    hpStatus = new StatusBar();
    ammo = [];

    level = level1;

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
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.throwAmmo();
        }, 200);



    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.charachter.isColliding(enemy)) {

                this.charachter.hit();


            }
        })
    }

    throwAmmo() {

        if (this.keyboard.SPACE) {
            let bottle = new Ammo();
            this.ammo.push(bottle);

        }
    }

    setWorld() {
        this.charachter.world = this

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0);



        this.addObjectsToMap(this.level.light);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.ammo);






        this.addToMap(this.charachter);


        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.hpStatus);






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
            this.flipImage(object);

        }
        object.draw(this.ctx)
        object.drawFrame(this.ctx)
        object.drawFrameRed(this.ctx)

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        this.ctx.restore();
        object.x = object.x * -1;
    }


}