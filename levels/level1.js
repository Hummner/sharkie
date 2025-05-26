/**
 * The current game level instance.
 * Contains enemies, light elements, background objects, coins, poison bottles, and barricades.
 * Initialized by the `startLevel()` function.
 * @type {Level}
 */
let level1;

/**
 * Initializes the game level with enemies, background layers,
 * collectible coins, poison bottles, and barricades.
 * Creates a new `Level` instance and assigns it to `level1`.
 */
function startLevel() {
    level1 = new Level(
        /**
         * Array of enemy objects (pufferfishs, jellyfish, and endboss).
         * PufferFish and jellyfish are placed at specific positions.
         */
        [
            new PufferFish(300),
            new PufferFish(150),
            new PufferFish(300),
            new PufferFish(150),
            new PufferFish(300),
            new PufferFish(150),
            new PufferFish(300),
            new PufferFish(150),
            new JellyFish(5, 1000),
            new JellyFish(8, 2500),
            new JellyFish(10, 4000),
            new JellyFish(15, 4100),
            new Endboss()
        ],
        /** 
         * Array of light effects or ambient objects (e.g., bubbles, lighting).
         */
        [
            new Light()
        ],

        /** 
         * Array of layered background images, repeated across the level width
         * to simulate parallax scrolling. Each layer has a different speed.
         */
        [
            new Background("img/3. Background/Layers/5. Water/D2.png", -719, 6),
            new Background("img/3. Background/Layers/3.Fondo 1/D2.png", -719, 3),
            new Background("img/3. Background/Layers/4.Fondo 2/D2.png", -719, 2),
            new Background("img/3. Background/Layers/2. Floor/D2.png", -719, 0),

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
            new Background("img/3. Background/Layers/2. Floor/D1.png", 719 * 8, 0),

            new Background("img/3. Background/Layers/5. Water/D2.png", 719 * 9, 6),
            new Background("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 9, 3),
            new Background("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 9, 2),
            new Background("img/3. Background/Layers/2. Floor/D2.png", 719 * 9, 0),
        ],

        /** 
         * Array of collectible coin objects placed throughout the level.
         */
        [
            new Coin(200, 600),
            new Coin(1300, 1500),
            new Coin(2300, 0),
            new Coin(2400, 0),
            new Coin(2500, 0)
        ],

        /** 
         * Array of poison bottle items used as ammo. Placed along the level path.
         */
        [
            new PoisonBottle(400, 700),
            new PoisonBottle(900, 1200),
            new PoisonBottle(1300, 1500),
            new PoisonBottle(3000, 3500),
            new PoisonBottle(4200, 5000),
            new PoisonBottle(4200, 5000),
        ],

        /**
         * Array of barricade objects used to block player movement.
         * Each barricade has a position, size, and image source.
         */
        [
            new Barricade(3500, 300, 400, 200, "img/3. Background/Barrier/2.png"),
            new Barricade(1000, 0, 400, 500, "img/3. Background/Barrier/1.png"),

        ]
    );
}