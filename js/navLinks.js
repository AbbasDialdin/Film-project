import { global } from "./global.js";


export default function navLinks(){
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        if(link.getAttribute("href") === global.currentPage){
            link.classList.add("active");
        }
    });
}