import { format, startOfDay, addHours, isPast, getHours } from 'https://esm.run/date-fns';


const currentDate = new Date();
const dateStart = startOfDay(currentDate);
const startHour = 8;
const workingHours = 12;

const currentDateString = `${format(currentDate, 'cccc, MMMM do yyyy')}`;
document.getElementById('current-date').innerText = currentDateString;


export function editHour(hour){
    const current = addHours(startHour, hour);
    const description = prompt(`What would you like to add at ${format(current, 'h a - cccc, MMMM do yyyy')}`)
    console.log(description);
}



const hourBoxes = [];

// Build list for hours
for (let hourIndex = startHour; hourIndex < startHour + workingHours; hourIndex++) {
    const current = addHours(dateStart, hourIndex);
    let past = '';
    if (isPast(current)) {
        past = 'is-past';
    }
    let isCurrent = '';
    if(getHours(currentDate) === hourIndex) {
        past = '';
        isCurrent = 'is-current';
    }

    hourBoxes.push(`<li id='hour-${hourIndex}' class='hour-box ${past} ${isCurrent}'><div class='hour'>${format(current, "h a")}</div><div id='hour-${hourIndex}-desc' class='description'>---</div><button onclick='editHour(${hourIndex})'>Edit</button></li>`);
}


document.getElementById('hour-container').innerHTML = hourBoxes.join('');