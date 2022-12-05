import {header} from '../components/header.js';
import {footer} from '../components/footer.js';

let headerDiv = document.getElementById('header');
headerDiv.innerHTML = header();

let footerDiv = document.getElementById('footer');
footerDiv.innerHTML = footer();


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

let deleteItem = (index) => {
    wishlistItems.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    displayWishlist(wishlistItems);
    noOfItems.innerText = wishlistItems.length;
}

let wishlistItems = JSON.parse(localStorage.getItem("wishlist"));
console.log(wishlistItems);

let wishlistDiv = document.getElementById("wishlist-items");

let noOfItems = document.getElementById("no-of-items");
noOfItems.innerText = wishlistItems.length;

let displayWishlist = (data) => {
    wishlistDiv.innerHTML = "";
    data.forEach((ele, i) => {
        
        let productDiv = document.createElement("div");
        productDiv.setAttribute("id", "product-section-card");

        let img = document.createElement("img");
        img.src = ele.images[0];
        img.setAttribute("id", "product-img")

        let title = document.createElement("h2");
        title.innerText = ele.title;
        title.setAttribute("id", "product-title");

        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("id", "product-price-div");

        let price = document.createElement("p");
        price.innerText = `£${ele.price}`;
        price.setAttribute("id", "product-price");

        let discountedPrice = document.createElement("p");
        discountedPrice.innerText = `£${ele.discounted_price}`;
        discountedPrice.setAttribute("id", "product-discount-price");

        let discount = document.createElement("p");
        discount.innerText = `${ele.discount} %`;
        discount.setAttribute("id", "product-discount");

        let delIcon = document.createElement("i");
        delIcon.setAttribute("class", "fa-solid fa-trash-can faclass");
        delIcon.addEventListener("click", () => {
            deleteItem(i);
        })

        let color = document.createElement("h3");
        color.innerText = ele.color;
        color.setAttribute("id", "product-color");

        let button = document.createElement("button");
        button.innerText = "MOVE TO BAG";
        button.setAttribute("id", "product-button");
        button.addEventListener("click", () => {
            addToCart(ele);
        })

        priceDiv.append(price, discountedPrice);

        productDiv.append(img, delIcon, title, priceDiv, discount, color, button);
        wishlistDiv.append(productDiv);

    })
}

displayWishlist(wishlistItems);


let cartProducts = [] || JSON.parse(localStorage.getItem("cart")) ;
let addToCart = (product) => {
    cartProducts.push(product);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
}