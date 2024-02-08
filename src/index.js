import { loadAboutUs, loadMenu, loadContact} from './pageLoad.js';


document.addEventListener('DOMContentLoaded', () => {
    const about = document.querySelector("#about");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");

    about.addEventListener('click', loadAboutUs);
    menu.addEventListener('click', loadMenu);
    contact.addEventListener('click', loadContact)
});