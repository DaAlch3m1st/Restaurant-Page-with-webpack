import { content } from ".";

const div = document.createElement('div');
div.classList.add('contact-div')

export function headerContact() {
    const contactTitle = document.createElement('h2');

    contactTitle.textContent = "Our contact";

    content.append(div);
    div.appendChild(contactTitle);
}

export function location() {
    const para = document.createElement('p');
    para.textContent = "Calle Victor Emilio Estrada";

    div.appendChild(para);
}

export function contact() {
    const para = document.createElement('p');
    para.textContent = "0800774433";

    div.appendChild(para);
}

export function disclaimer() {
    const footer = document.createElement('footer');
    footer.textContent = "This isn't a real restaurant.";

    div.appendChild(footer);
}