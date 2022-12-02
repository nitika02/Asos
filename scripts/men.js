import {header} from '../components/header.js';
import {footer} from '../components/footer.js';

let headerDiv = document.getElementById('header');
headerDiv.innerHTML = header();

let footerDiv = document.getElementById('footer');
footerDiv.innerHTML = footer();

// linking to product page

var linkedDivs = document.querySelectorAll('.clickable');

linkedDivs.forEach(el => {
    el.addEventListener('click', () => {
        window.location.href = '../menProduct.html';
    })
})
