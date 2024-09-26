import { content } from ".";

export function desc() {
    const div = document.createElement('div');
    const para = document.createElement('p');

    para.textContent = "THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE THIS IS THE DESCRIPTION EXAMPLE"

    div.classList.add('desc-div');
    para.classList.add('para-content');

    div.appendChild(para);
    content.append(div);
}