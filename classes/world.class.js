class World {
    charachter = new Character();
    hpStatus = new StatusBar();

    ammo = [];
    slash = [];

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
            this.meleeAttackA()
        }, 100);
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.charachter.isColliding(enemy)) {

                this.charachter.hit();
            }
        });



        this.level.enemies.forEach(enemy => {
            const hitAmmo = this.ammo.find(a => enemy.isColliding(a));
            const meleehit = this.slash.find(s => enemy.isColliding(s));
            if (hitAmmo || meleehit) {
                console.log("hit");
                enemy.hp = 0;
                enemy.currentImageOnlyOneAnimation = 0;

            }
        })
    }

    throwAmmo() {

        if (this.keyboard.SPACE && !this.charachter.isHurt() && this.ammo.length == 0) {
            this.charachter.attackTime = true;
            setTimeout(() => {
                let bubble = new Ammo(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
                this.ammo.push(bubble);
                this.charachter.currentImageOnlyOneAnimation = 0;

            }, 750);


            setTimeout(() => {
                this.charachter.attackTime = false;
            }, 850)
            setTimeout(() => {
                this.ammo = [];
            }, 1500)

        }
    }

    meleeAttackA() {
        if (this.keyboard.D && this.slash.length == 0 && !this.charachter.isHurt()) {
            let slashAttckInterval = setInterval(() => {
                let slashAttack = new Slash(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
                this.slash.push(slashAttack);
            }, 50);
            this.charachter.currentImageOnlyOneAnimation = 0;
            this.charachter.meleeAttackTime = true;
            setTimeout(() => {
                clearInterval(slashAttckInterval)
                this.charachter.meleeAttackTime = false;
                this.slash = [];
            }, 850)

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
        this.addObjectsToMap(this.slash);






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