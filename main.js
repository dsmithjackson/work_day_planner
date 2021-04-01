import { format,  } from 'https://esm.run/date-fns';

const workingHours = 8;
const currentDate = new Date();

const currentDateString = `${format(currentDate, 'cccc, MMMM do yyyy')}`;


document.getElementById('current-date').innerText = currentDateString;

const hourBoxes = [];

// Build list for hours
for (let hourIndex = 0; hourIndex < workingHours; hourIndex++) {
    hourBoxes.push(`<li class='hour-box'><div class='hour'>Hour</div><div class='description'>Description</div><button>Edit</button></li>`);
}

document.getElementById('hour-container').innerHTML = hourBoxes.join('');