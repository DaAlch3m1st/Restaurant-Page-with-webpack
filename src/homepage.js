import { content } from '.';
import BreakfastImage from './assets/img/pexels1.jpg';
import LunchImage from './assets/img/pexels2.jpg';
import DinnerImage from './assets/img/pexels3.jpg';

const div = document.createElement('div');
div.classList.add('images-container');

export function title() {
    const x = document.createElement('h1');
    x.innerHTML = 'La sazon de Cagua';
    document.getElementById('content').appendChild(x);
    return x;
}

export function images() {
    const breakfast = new Image();
    const lunch = new Image();
    const dinner = new Image();

    // document.getElementById('content').append(div);
    content.append(div);

    breakfast.src = BreakfastImage;
    lunch.src = LunchImage;
    dinner.src = DinnerImage;

    div.appendChild(breakfast);
    div.appendChild(lunch);
    div.appendChild(dinner);
}