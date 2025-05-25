class Sound {
    /**
     * Plays a sound effect if music is not muted.
     * @param {string} url - Path to the audio file.
     * @param {number} volume - Volume level from 0 to 1.
     */
    playSounds(url, volume) {
        if (!this.musicMute) {
            let newSound = new Audio(url);
            newSound.volume = volume;
            newSound.play();
        }
    };


    /**
     * Prepares background music with the given volume.
     * @param {number} volume - Volume level from 0 to 1.
     */
    playBackgroundMusic(volume) {
        this.music = new Audio("./audio/music.mp3");
        this.music.volume = volume;
        this.music.loop = true;
    };


    /** Stops and resets the background music. */
    stopMusic() {
        if (this.music) {
            this.music.pause();
            this.music.currentTime = 0;
        }
    };


    /** Starts the background music if not muted. */
    startMusic() {
        if (!this.musicMute) {
            this.playBackgroundMusic(0.1);
            this.music.play();
        }
    };

}