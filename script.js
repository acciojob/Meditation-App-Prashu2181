document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("meditation-video");
    const playButton = document.querySelector(".play");
    const timeDisplay = document.querySelector(".time-display");
    const timeButtons = document.querySelectorAll(".time-options button");
    const beachSoundButton = document.getElementById("beach-sound");
    const rainSoundButton = document.getElementById("rain-sound");

    const sounds = {
        beach: { video: "Sounds/beach.mp4", audio: "Sounds/beach.mp3" },
        rain: { video: "Sounds/rain.mp4", audio: "Sounds/rain.mp3" }
    };

    let selectedTime = 600; // Default 10 minutes
    let currentAudio = new Audio(sounds.beach.audio);
    let isPlaying = false;

    playButton.addEventListener("click", () => {
        if (isPlaying) {
            video.pause();
            currentAudio.pause();
            playButton.textContent = "▶️";
        } else {
            video.play();
            currentAudio.play();
            playButton.textContent = "⏸️";
        }
        isPlaying = !isPlaying;
    });

    timeButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.id === "smaller-mins") selectedTime = 120;
            if (button.id === "medium-mins") selectedTime = 300;
            if (button.id === "long-mins") selectedTime = 600;
            timeDisplay.textContent = `${Math.floor(selectedTime / 60)}:0`;
        });
    });

    beachSoundButton.addEventListener("click", () => {
        switchSound("beach");
    });

    rainSoundButton.addEventListener("click", () => {
        switchSound("rain");
    });

    function switchSound(type) {
        video.src = sounds[type].video;
        currentAudio.pause();
        currentAudio = new Audio(sounds[type].audio);
        if (isPlaying) {
            video.play();
            currentAudio.play();
        }
    }
});
