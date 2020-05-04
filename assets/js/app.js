const main = document.getElementsByTagName('main')[0];

const inputHours = document.getElementById('hours');
const inputMinutes = document.getElementById('minutes');
const inputSeconds = document.getElementById('seconds');

const timerHours = document.getElementsByClassName('timerhrs')[0];
const timerMinutes = document.getElementsByClassName('timermins')[0];
const timerSeconds = document.getElementsByClassName('timersecs')[0];

const setTimeButton = document.getElementsByClassName('set-time')[0];
const startButton = document.getElementsByClassName('start')[0];
const stopButton = document.getElementsByClassName('stop')[0];
const resetButton = document.getElementsByClassName('reset')[0];

const setTimeDiv = document.getElementsByClassName('timesetdiv')[0];

const timerInfo = document.getElementsByClassName('timer-info')[0];
const totalTimer = document.getElementsByClassName('time')[0];
const timerValue = document.querySelector('.timer-value');
let runTimer = false;

// Set defaults if empty
if (inputHours.value === '')  {
    inputHours.value = 0;
}

if (inputMinutes.value === '')    {
    inputMinutes.value = 0;
}

if (inputSeconds.value === '')  {
    inputSeconds.value = 0;
}




//Event listener
main.addEventListener('click', (event) => {

    
    if (event.target === setTimeButton) {
            if (inputHours.value < 10)  {
                timerHours.innerText = '0' + inputHours.value;
            } else {
                timerHours.innerText = inputHours.value;
            }
            if (inputMinutes.value < 10)    {
                timerMinutes.innerText = '0' + inputMinutes.value;
            } else {
                timerMinutes.innerText = inputMinutes.value;
            }
            if (inputSeconds.value < 10)    {
                timerSeconds.innerText = '0' + inputSeconds.value;
            } else {
                timerSeconds.innerText = inputSeconds.value;
            }

        setTimeDiv.style.display = 'none';
        timerInfo.innerText = `${timerHours.innerText}:${timerMinutes.innerText}:${timerSeconds.innerText}`;
    }

    
    if (event.target === startButton && runTimer === false)   {

            startInterval();
    }

    if (event.target === stopButton)    {
        clearInterval(int);
        runTimer = false;
    }

    if (event.target === resetButton)   {
        clearInterval(int);
        runTimer = false;
        timerHours.innerText = '00';
        timerMinutes.innerText = '00';
        timerSeconds.innerText = '00';
        setTimeDiv.style.display = 'block';

    }
});


function startInterval()    {
    runTimer = true;
    let seconds = hoursToSeconds();


    if (seconds > 0)    {
        int = setInterval(() => { //especially defined without keyword to make it global to be seen in stop function
            seconds--;
            let arr = secondsToHours(seconds);
            if (arr[0] < 10)    {
                timerHours.innerText = '0' +arr[0];
            } else {
                timerHours.innerText = arr[0];
            }
            if (arr[1] < 10)    {
                timerMinutes.innerText = '0' +arr[1];
            } else {
                timerMinutes.innerText = arr[1];
            }
            if (arr[2] < 10)    {
                timerSeconds.innerText = '0' +arr[2];
            } else {
                timerSeconds.innerText = arr[2];
            }
         
            hoursToSeconds();
            
            if (seconds === 0)  {
                clearInterval(int);

                timerValue.innerText = 'THE TIMER HAS ENDED!';
                timerValue.style.color = 'green';
            }
        }, 1000);
    }
}

function secondsToHours (seconds)   {
    let hours = Math.floor(seconds/3600);
    seconds -= hours*3600;
    let minutes = Math.floor(seconds/60);
    seconds -= minutes*60;
    return [hours, minutes, seconds];
}

function hoursToSeconds()    {
    return +(+timerHours.innerText * 3600 + +timerMinutes.innerText * 60 + +timerSeconds.innerText);
}

