import { content } from ".";

export function desc() {
    const div = document.createElement('div');
    const para = document.createElement('p');
    const h3 = document.createElement('h3');

    h3.textContent = "About us";
    para.textContent = "We are an Ecuadorian restaurant with typical dishes of the coastal region, our dishes change every day so is not always the same, but you can see above of us what we normally serve.";

    h3.classList.add('desc-header');
    div.classList.add('desc-div');
    para.classList.add('para-content');
    
    div.appendChild(h3);
    div.appendChild(para);
    content.append(div);
}