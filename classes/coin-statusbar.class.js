class CoinStatusbar extends DrawableObject {

    COIN_BAR = [
        "./img/4. Marcadores/green/Coin/0_  copia 4.png",
        "./img/4. Marcadores/green/Coin/20_  copia 2.png",
        "./img/4. Marcadores/green/Coin/40_  copia 4.png",
        "./img/4. Marcadores/green/Coin/60_  copia 4.png",
        "./img/4. Marcadores/green/Coin/80_  copia 4.png",
        "./img/4. Marcadores/green/Coin/100_ copia 4.png"
    ]

    percentage = 0;
    scale = 1;
    scalingUp = false;


    constructor() {
        super();
        this.loadImages(this.COIN_BAR);
        this.x = 10;
        this.y = 45;
        this.setPercentage(0)
        this.width = 150;
        this.height = 45;
    }

    setPercentage(percentage) {
        this.percentage = percentage;

        let path = this.COIN_BAR[this.resolveImageIndex()]
        this.img = this.imageCache[path]
        this.scalingUp = true;
        this.scale = 1;
        this.update();


    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5
        } else if (this.percentage > 80) {
            return 4
        } else if (this.percentage > 60) {
            return 3
        } else if (this.percentage > 40) {
            return 2
        } else if (this.percentage > 20) {
            return 1
        } else {
            return 0
        }
    }

    update() {
        // Animation: wachsen und wieder zurück
        if (this.scalingUp) {
            this.scale += 0.05;
            if (this.scale >= 1.3) {
                this.scalingUp = false;
            }
        } else if (this.scale > 1) {
            this.scale -= 0.05;
        }
    }



}