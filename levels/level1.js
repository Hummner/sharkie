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
        new Background("img/3. Background/Layers/5. Water/D2.png", -719, 0.3),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", -719, 0.2),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", -719, 0.1),
        new Background("img/3. Background/Layers/2. Floor/D2.png", -719, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 0, 0.3),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 0, 0.2),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 0, 0.1),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 0, 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719, 0.3),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719, 0.2),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719, 0.1),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 719*2, 0.3),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 719*2, 0.2),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 719*2, 0.1),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 719*2, 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719*3, 0.3),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719*3, 0.2),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719*3, 0.1),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719*3, 0),

        new Background("img/3. Background/Layers/5. Water/D1.png", 719*4, 0.3),
        new Background("img/3. Background/Layers/3.Fondo 1/D1.png", 719*4, 0.2),
        new Background("img/3. Background/Layers/4.Fondo 2/D1.png", 719*4, 0.1),
        new Background("img/3. Background/Layers/2. Floor/D1.png", 719*4, 0),

        new Background("img/3. Background/Layers/5. Water/D2.png", 719*5, 0.3),
        new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719*5, 0.2),
        new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719*5, 0.1),
        new Background("img/3. Background/Layers/2. Floor/D2.png", 719*5, 0)
    ],
    [
        new Coin(100),
        new Coin(400),
        new Coin(800),
    ]


)