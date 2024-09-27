import { content } from ".";
const div = document.createElement('div');
div.classList.add('schedule-div');

export function breakfast() {
    const breakfastTitle = document.createElement('h4');
    const breakfastHours = document.createElement('p');

    breakfastTitle.textContent = "Breakfast";
    breakfastHours.textContent = "6:00 AM - 11:00 AM";

    content.append(div);
    div.appendChild(breakfastTitle);
    div.appendChild(breakfastHours);
}

export function lunch() {
    const lunchTitle = document.createElement('h4');
    const lunchHours = document.createElement('p');

    lunchTitle.textContent = "Lunch";
    lunchHours.textContent = "11:00 AM - 5:00 PM";

    div.appendChild(lunchTitle);
    div.appendChild(lunchHours);
}

export function dinner() {
    const dinnerTitle = document.createElement('h4');
    const dinnerHours = document.createElement('p');

    dinnerTitle.textContent = "Dinner";
    dinnerHours.textContent = "5:00 PM - 11:00 PM";

    div.appendChild(dinnerTitle);
    div.appendChild(dinnerHours);
}