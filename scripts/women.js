import {header} from "../components/header.js";
import {footer} from "../components/footer.js";

document.querySelector(".header").innerHTML=header();
document.querySelector(".lfooter").innerHTML=footer();

// linking to product page

var linkedDivs = document.querySelectorAll('.clickable');

linkedDivs.forEach(el => {
    el.addEventListener('click', () => {
        window.location.href = '../womenProduct.html';
    })
})
