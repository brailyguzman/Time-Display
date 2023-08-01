document.addEventListener('DOMContentLoaded', () => {
    displayTime();
    setInterval(displayTime, 1000)
})

function displayTime() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
    document.getElementById('timezone').innerText = userTimeZone
}
