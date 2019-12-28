const app = () => {
    const redCircle = document.querySelector("#red-circle path");
    const sessions = document.querySelector("#sessions");
    const timer = document.querySelector("#timer");
    const command = document.querySelector("#command");
    const play = document.querySelector("#play");
    const pause = document.querySelector("#pause");
    let minutesDuration = 1500;
    let sessionCounter = 1;
    let redCircleOutline = document.querySelector("#red-circle path").getTotalLength();

    // Add event for play button
    play.addEventListener("click", e => {
    	console.log("hi");
        play.classList.add("hidden");
        pause.classList.remove("hidden");

        // Play button function
        const runCountdown = () => {
            minutesDuration -= 1;
            let timerText = `${Math.floor(minutesDuration / 60)}:${Math.floor(minutesDuration % 60)}`;
            timer.textContent = timerText;
            sessions.textContent = `Session ${sessionCounter}`;
            command.textContent = "Focus";
            redCircleOutline -= redCircleOutline / minutesDuration;
            redCircle.style.strokeDashoffset = redCircleOutline;

            // If minutes < 10
            if (Math.floor(minutesDuration / 60 < 10)) {
                timerText = `0${Math.floor(minutesDuration / 60)}:${Math.floor(minutesDuration % 60)}`;
                timer.textContent = timerText;
            }
            // If seconds < 10
            if (Math.floor(minutesDuration % 60 < 10)) {
                timerText = `${Math.floor(minutesDuration / 60)}:0${Math.floor(minutesDuration % 60)}`;
                timer.textContent = timerText;
            }
            // If minutes and seconds < 10
            if (Math.floor(minutesDuration / 60 < 10) && Math.floor(minutesDuration % 60 < 10)) {
                timerText = `0${Math.floor(minutesDuration / 60)}:0${Math.floor(minutesDuration % 60)}`;
                timer.textContent = timerText;
            }
        };
        const countdown = setInterval(runCountdown, 1000);

        // Add event for pause button
        pause.addEventListener("click", e => {
            pause.classList.add("hidden");
            play.classList.remove("hidden");
            clearInterval(countdown);
        });
    });
};

app();