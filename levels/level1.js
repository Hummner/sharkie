const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new JellyFish(5, 800),
        new JellyFish(8, 1500),
        new JellyFish(10, 2000),
        new Endboss()
    ],
    [
        new Light()
    ],
    [
        // new Background("img/3. Background/Layers/5. Water/D2.png", -719, 0.3),
        // new Background("img/3. Background/Layers/3.Fondo 1/D2.png", -719, 0.2),
        // new Background("img/3. Background/Layers/4.Fondo 2/D2.png", -719, 2),
        // new Background("img/3. Background/Layers/2. Floor/D2.png", -719, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 0, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 0, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 0, 2),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 0, 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719, 2),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 719 * 2, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 2, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 2, 2),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 719 * 2, 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719 * 3, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 3, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 3, 2),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719 * 3, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 719 * 4, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 4, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 4, 2),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 719 * 4, 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719 * 5, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 5, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 5, 2),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719 * 5, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 719 * 6, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 6, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 6, 2),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 719 * 6, 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719 * 7, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 7, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 7, 2),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719 * 7, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 719 * 8, 6),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 8, 3),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 8, 2),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 719 * 8, 0)
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()

    ],
    [
        new PoisonBottle(400, 800),
        new PoisonBottle(800, 1200),
        new PoisonBottle(1200, 1500),
        new PoisonBottle(1500, 3000)
    ]


)