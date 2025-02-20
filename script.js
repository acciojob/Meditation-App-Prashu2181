document.addEventListener("DOMContentLoaded", () => {
    const timeDisplay = document.querySelector(".time-display");
    const playButton = document.querySelector(".play");
    const audio = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");

    const smallerMinsBtn = document.querySelector(".smaller-mins");
    const mediumMinsBtn = document.querySelector(".medium-mins");
    const longMinsBtn = document.querySelector(".long-mins");

    let timeLeft = 600; // Default to 10 minutes
    let timer;
    let isPlaying = false;

    function updateTime() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    playButton.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            clearInterval(timer);
            timer = null;
            playButton.textContent = "▶️";
        } else {
            audio.play().catch(() => console.log("Audio play error"));
            timer = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTime();
                } else {
                    clearInterval(timer);
                }
            }, 1000);
            playButton.textContent = "⏸️";
        }
        isPlaying = !isPlaying;
    });

    // Time selection buttons
    smallerMinsBtn.addEventListener("click", () => {
        timeLeft = 120;
        updateTime();
    });

    mediumMinsBtn.addEventListener("click", () => {
        timeLeft = 300;
        updateTime();
    });

    longMinsBtn.addEventListener("click", () => {
        timeLeft = 600;
        updateTime();
    });

    updateTime(); // Set initial time display
});
