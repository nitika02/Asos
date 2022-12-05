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
        window.location.href = './menProduct.html';
    })
})


// searchbar functionality

let searchProducts = async () => {

    let query = document.getElementById("search").value;

    let response = await fetch(`https://asos-mock-data.onrender.com/women?category=${query}`);
    let data = await response.json();
    console.log(data);
    localStorage.setItem("search_results", JSON.stringify(data));
    localStorage.setItem("search", "true");
    window.location.href = "./womenProduct.html";
}

document.getElementById('lsearchbtn').addEventListener("click", searchProducts);

document.getElementById('search').addEventListener("keypress", (e) => {
    if(e.key == 'Enter'){
        searchProducts();
    }
});