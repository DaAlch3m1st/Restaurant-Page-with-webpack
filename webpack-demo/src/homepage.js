import { content } from '.';
import BreakfastImage from './assets/img/pexels1.jpg';
import LunchImage from './assets/img/pexels2.jpg';
import DinnerImage from './assets/img/pexels3.jpg';


export function title() {
    const x = document.createElement('h1');
    x.innerHTML = 'Name of the restaurant';
    document.getElementById('content').appendChild(x);
    return x;
}

export function images() {
    // Add the image to our existing div.
    const breakfast = new Image();
    const lunch = new Image();
    const dinner = new Image();

    const div = document.createElement('div');
    // document.getElementById('content').append(div);
    content.append(div);
    div.classList.add('images-container');

    breakfast.src = BreakfastImage;
    lunch.src = LunchImage;
    dinner.src = DinnerImage;

    div.appendChild(breakfast);
    div.appendChild(lunch);
    div.appendChild(dinner);
}