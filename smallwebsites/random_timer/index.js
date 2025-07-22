let interval = null;
let startTime = null;
let endTime = null;
let isRunning = false;
let alarmSound = document.getElementById("alarm_sound");

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function startTimer() {
    if (isRunning) return;

    const max = parseInt(document.getElementById("time_max").value);
    const min = parseInt(document.getElementById("time_min").value);

    if (isNaN(max) || isNaN(min) || max <= min) {
        alert("Please enter valid min and max values (max > min).");
        return;
    }

    const maxSec = max * 60;
    const minSec = min * 60;
    const randomTime = Math.floor(Math.random() * (maxSec - minSec + 1)) + minSec;

    startTime = Date.now();
    endTime = startTime + randomTime * 1000;
    isRunning = true;

    interval = setInterval(() => {
        const currentTime = Date.now();
        const timePassed = Math.floor((currentTime - startTime) / 1000);
        const timeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000));

        document.getElementById("timer_show").textContent = formatTime(timePassed);

        if (currentTime >= endTime) {
            clearInterval(interval);
            isRunning = false;
            alarmSound.play();
            alert("Time's up!");
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }
    }, 500);
}

function stopTimer() {
    if (interval) {
        clearInterval(interval);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    document.getElementById("timer_show").textContent = "00:00";
}
