class World {
    charachter = new Character();
    hpStatus = new StatusBar();
    coinStatus = new CoinStatusbar();
    poisionStatus = new PoisonStatus();

    ammo = [];
    slash = [];
    soundspool = [];



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
                if (enemy.thunderstrike) {
                    this.charachter.thunderHit();
                    this.playSounds("./audio/electric.wav", 0.1)

                } else {
                    this.charachter.hit();
                }

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
        });

        this.level.coins.forEach(coin => {
            if (this.charachter.isColliding(coin)) {
                this.collectCoin(coin);
                this.playSounds("./audio/collect.wav", 0.1)
                console.log("Collected");
            }
        })

        this.level.poisonBottle.forEach(bottle => {
            if (this.charachter.isColliding(bottle)) {
                this.collectBottle(bottle);
                console.log("Collected", bottle.x);
                this.playSounds("./audio/bottleCollect.wav", 0.1)
            }
        })
    }

    collectCoin(coin) {
        this.coinStatus.percentage += 20;
        this.coinStatus.setPercentage(this.coinStatus.percentage);
        this.level.coins.splice(this.level.coins.indexOf(coin), 1);
    }

    collectBottle(bottle) {
        this.poisionStatus.percentage += 25;
        this.poisionStatus.setPercentage(this.poisionStatus.percentage);
        this.level.poisonBottle.splice(this.level.poisonBottle.indexOf(bottle), 1);
    }

    playSounds(url, volume) {
        let newSound = new Audio(url);
        newSound.volume = volume;
        newSound.play();
    }

    playBackgroundMusic(volume) {
        let randomInterval = 5000;
            setTimeout(() => {
                let music = new Audio("./audio/music.mp3");
                music.volume = volume;
                music.loop = true;
                music.play();
                setInterval(() => {
                    let bulb = new Audio("./audio/bulb.wav");
                    bulb.volume = volume + 0.1;
                    bulb.play();
                    randomInterval = 1000 + Math.random() * 4000;
                }, randomInterval);
                    
                

            }, 500);
        };
    






    throwAmmo() {

        if (this.keyboard.SPACE && !this.charachter.isHurt() && this.ammo.length == 0 && !this.charachter.isDead() && !this.charachter.attackTime) {
            this.charachter.attackTime = true;
            setTimeout(() => {
                if (this.poisionStatus.percentage != 0) {
                    let bubble = new PoisonAmmo(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
                    this.ammo.push(bubble);
                    this.charachter.currentImageOnlyOneAnimation = 0;
                    this.poisionStatus.percentage -= 25;
                    this.poisionStatus.setPercentage(this.poisionStatus.percentage);

                    console.log("Poison")

                } else {
                    let bubble = new Ammo(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
                    this.ammo.push(bubble);
                    this.charachter.currentImageOnlyOneAnimation = 0;
                }
                this.playSounds("./audio/shoot.wav", 0.5)



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
        if (this.keyboard.D && this.slash.length == 0 && !this.charachter.isHurt() && !this.charachter.isDead()) {
            let slashAttackInterval = setInterval(() => {
                let slashAttack = new Slash(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
                this.slash.push(slashAttack);


            }, 50);
            this.playSounds("./audio/slash-short-short.wav", 0.5)
            this.clearMeleeAttackAnimation(slashAttackInterval)
        }
    }

    clearMeleeAttackAnimation(slashAttackInterval) {
        let deleteSlash = setInterval(() => {
            this.slash.splice(0, 1);
        }, 70);
        this.charachter.currentImageOnlyOneAnimation = 0;
        this.charachter.meleeAttackTime = true;
        setTimeout(() => {
            clearInterval(slashAttackInterval)
            clearInterval(deleteSlash)
            this.charachter.meleeAttackTime = false;
            this.slash = [];
        }, 850)
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
        this.addObjectsToMap(this.level.poisonBottle);
        this.addObjectsToMap(this.ammo);
        this.addObjectsToMap(this.slash);






        this.addToMap(this.charachter);


        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.hpStatus);
        this.addToMap(this.coinStatus);
        this.addToMap(this.poisionStatus);






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