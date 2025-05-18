class MovableObject extends DrawableObject {

    currentImage = 0;
    currentImageOnlyOneAnimation = 0;
    speed = 0.3;
    otherDirection = false;
    lastHit;
    acceleration = 1;
    attack;
   



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            }

        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof Ammo) {
            return true
        } else {
            return this.y < 180;
        }

    }




    playAnimation(images) {
        let i = this.currentImage % images.length; // 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    playOnlyOneAnimation(images, toStop) {

        let i = this.currentImageOnlyOneAnimation % images.length;
        if (toStop) return;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImageOnlyOneAnimation++

    }

    moveLeft() {
        this.x -= this.speed;

    }

    moveBackgroundRight() {

        this.world.level.backgrounds.forEach(layer => {
            layer.x += layer.speed;
        });



    }

    moveBackgroundLeft() {

        this.world.level.backgrounds.forEach(layer => {
            layer.x -= layer.speed;
        });


    }


    moveRight() {
        this.x += 10;


        console.log(this.world.level.backgrounds[0].speed);




    }

    moveUp() {
        this.speedY = 10;
    }

    setTime(timeout) {
        this.timeCounter = true
        setTimeout(() => {
            return this.timeCounter = false
        }, timeout);

    }





    // if(charachter.x + charachter.width > Chicken.x && Character.y + charachter.height > Chicken.y && charachter.x < Chicken.x && charachter.y < Chicken.y + Chicken.height) {

    // }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left && //jobb also jobbra-balra
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && // jobb also fel -le
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right && // bal felso - jobbra balra eltolas
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom; // bal also - fel - le
    }

    hit() {

        if (this.hp == 0) {
            this.hp = 0;
        } else {
            this.hp -= 5;
            this.lastHit = new Date().getTime();

        }
        this.world.hpStatus.setPercentage(this.hp);
        console.log(this.hp)

    }

    isDead() {
        return this.hp == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isShoot() {
        if (this.attackTime) {
            return true
        } else {
            return false
        }
    }

    isMeleeAttack() {
        if (this.meleeAttackTime) {
            return true
        } else {
            return false
        }
    }







}