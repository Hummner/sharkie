const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Light()
    ],
    [
        new Background("img/3. Background/Layers/5. Water/D2.png", -719),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", -719),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", -719),
        new Background("img/3. Background/Layers/2. Floor/D2.png", -719),

        new Background("img/3. Background/Layers/5. Water/D1.png", 0),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 0),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 0),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719),

        new Background("img/3. Background/Layers/5. Water/D1.png", 1439),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 1439),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 1439),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 1439),

        new Background("img/3. Background/Layers/5. Water/D2.png", 2159),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 2159),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 2159),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 2159)
    ],
    [
        new Coin(100),
        new Coin(400),
        new Coin(800),
    ]


)