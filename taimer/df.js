// переменные кнопок
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');

// переменные времени
let h = document.getElementById('hour');
let m = document.getElementById('minute');
let s = document.getElementById('sec');

var startTimer = null
// логика таймера
function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
        alert('время вышло')
        clearInterval(startTimer)
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        s.value = 59;
        m.value = 59;
        h.value--;
    }
}

// остановка таймера
stop.addEventListener('click', stopTime);
function stopTime() {
    start.disabled = false;
    clearInterval(startTimer)
    ("click", () => {
    start_btn.disabled = false;
    pause_btn.disabled = true;
    stop_btn.disabled = true;
});
}

// отсчитывание таймера
start.addEventListener('click', function () {
    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }
    startInterval()
})

// сброс таймера
reset.addEventListener('click', function () {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer()
    clearInterval(startTimer)
})
// закрывание кнопок
start.addEventListener("click", () => {
    start.disabled = true;
    reset.disabled = true;
    stop.disabled = false;
});
stop.addEventListener("click", () => {
    start.disabled = false;
    reset.disabled = false;
    stop.disabled = true;
});
reset.addEventListener("click", () => {
    start.disabled = false;
    reset.disabled = true;
});


