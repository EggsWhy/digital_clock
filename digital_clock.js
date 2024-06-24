function updateClock(){

    const timeNow = new Date()
    
    let hours = timeNow.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours%12 || 12
    hours = hours.toString().padStart(2, 0);
    
    const minutes = timeNow.getMinutes().toString().padStart(2, 0);
    const seconds = timeNow.getSeconds().toString().padStart(2, 0);

    document.getElementById('clock-hour').textContent = hours;
    document.getElementById('clock-minute').textContent = minutes;
    document.getElementById('clock-second').textContent = seconds;
    document.getElementById('clock-24h').textContent = meridiem

}

const timezones = {'Singapore': 8, 'Beijing': 8, 'New York': -4, 'London': 1, 'Tokyo': 9}


// function updateClock(){

//     const timeNow = new Date()

//     let hours = timeNow.getHours();
//     const meridiem = hours >= 12 ? 'PM' : 'AM';
//     hours = hours%12 || 12
//     hours = hours.toString().padStart(2, 0);

//     const minutes = timeNow.getMinutes().toString().padStart(2, 0);
//     const seconds = timeNow.getSeconds().toString().padStart(2, 0);

//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById('clock').textContent = timeString;

// }

function updateCalendar(){

    const dayConverter = {1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat', 7: 'Sun'}
    const monthConverter = {1: 'January', 2: 'Feburary', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}
    const timeNow = new Date()

    let day = timeNow.getDay();
    day = dayConverter[day];

    const date = timeNow.getDate();

    let month = timeNow.getMonth();
    month = monthConverter[month];

    const year = timeNow.getFullYear();

    const dateString = `${day}, ${date} ${month} ${year}`;
    document.getElementById('calendar').textContent = dateString;
}

function changeTimezone(){

    let timeNow = new Date();

    const currentTimezone = 8;
    const newTimezone = document.getElementById('timezone').value;

    const currentTime = document.getElementById('clock').textContent;
    const currentTimeHour = Number(currentTime.slice(0,2));

    const newTimeHour = currentTimeHour - currentTimezone + Number(newTimezone);
    document.getElementById('clock-hour').textContent = newTimeHour;

}



updateClock();
setInterval(updateClock, 1000);
updateCalendar();

