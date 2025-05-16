class MovableObject extends DrawableObject {

    currentImage = 0;
    speed = 0.3;
    otherDirection = false;
    lastHit;








    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i]
        this.img = this.imageCache[path]
        this.currentImage++
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







}