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


document.getElementById('lsearchbtn').addEventListener("click", searchProducts);

let displaySection = document.getElementById("main-product-section-div");
let wishlistArr = [] || JSON.parse(localStorage.getItem("wishlist")) ;

let displayData = (products) => {
    displaySection.innerText = "";
    products.map((ele) => {
        let productDiv = document.createElement("div");
        productDiv.setAttribute("id", "product-section-card");
        

        let img = document.createElement("img");
        img.src = ele.images[0];
        img.setAttribute("id", "product-img")
        img.addEventListener("click", () => {
            localStorage.setItem("selected_product", JSON.stringify(ele));
            window.location.href = "../indiv.html";
        })

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

        let favIcon = document.createElement("i");
        favIcon.setAttribute("class", "fa-regular fa-heart faclass")
        favIcon.addEventListener("click", () => {
            wishlistArr.push(ele);
            localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
            favIcon.setAttribute("class", "fa-solid fa-heart faclass");
        })

        priceDiv.append(price, discountedPrice);

        productDiv.append(img, favIcon, title, priceDiv, discount);
        displaySection.append(productDiv);
    })
}
let array;
let array1;
let showData = async() => {
    let res = await fetch("https://asos-mock-data.onrender.com/men");
    let data = await res.json();
    console.log(data);
    array = data;
    array1 = data;
    setTimeout(() => {
        displayData(data);
    }, 200);
}

showData();

// filtering data
// sort by price
let sortPrice = document.getElementById("sort-price");


// let changePrice = async () => {
//     let selectedVal = sortPrice.value;
//     console.log(selectedVal);
//     if(selectedVal === "lth") {
//        let res = await fetch("http://localhost:3000/women?_sort=discounted_price&_order=asc");
//        let data = await res.json();
//        console.log(data);
//        displayData(data);
//     }
//     if(selectedVal === "htl") {
//         let res = await fetch("http://localhost:3000/women?_sort=discounted_price&_order=desc");
//         let data = await res.json();
//         console.log(data);
//         displayData(data);
//     }
//     // displayData(women);
// }
// sortPrice.addEventListener("change", changePrice);


let changePrice = async () => {
    let selectedVal = sortPrice.value;
    console.log(selectedVal);
    if(selectedVal === "lth") {
        array.sort(function(a,b) {
            return a.discounted_price - b.discounted_price;
        })
        console.log(array);
       displayData(array);
    }
    if(selectedVal === "htl") {
        array.sort(function(a,b) {
            return b.discounted_price - a.discounted_price;
        })
        displayData(array);
    }
    // displayData(women);
}
sortPrice.addEventListener("change", changePrice);

// filter by brand 
// let filterBrand = document.getElementById("filter-by-sort");

// let brandFilter = async () => {
//     let selectedVal = filterBrand.value;
//     console.log(selectedVal);
//     let res = await fetch(`http://localhost:3000/women?brand=${selectedVal}`);
//     let data = await res.json();
//     console.log(data);
//     displayData(data);
// }

// filterBrand.addEventListener("change", brandFilter);


let filterBrand = document.getElementById("filter-by-sort");

let brandFilter = async () => {
    let selectedVal1 = filterCategory.value;
    let selectedVal2 = filterColor.value;
    let selectedVal3 = filterBrand.value;
    let selectedVal4 = filterDiscount.value;
    console.log(selectedVal3);
    array = array1.filter(function(e) {
        if(selectedVal2 === "" && selectedVal1 === "" && selectedVal4 === "") {
            return e.brand === selectedVal3;
        } else if(selectedVal2 === "" && selectedVal4 === "") {
            return (e.brand === selectedVal3 && e.category === selectedVal1)
        } else if(selectedVal1 === "" && selectedVal4 === "") {
            return (e.brand === selectedVal3 && e.color === selectedVal2)
        } else if (selectedVal2 === "" && selectedVal1 === "") {
            return (e.brand === selectedVal3 && e.discount === selectedVal4)
        } else if(selectedVal1 === "") {
            return (e.color === selectedVal2 && e.brand === selectedVal3 && e.discount === selectedVal4)
        } else if(selectedVal2 === "") {
            return (e.category === selectedVal1 && e.brand === selectedVal3 && e.discount === selectedVal4)
        } else if(selectedVal4 === "") {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.brand === selectedVal3)
        }
         else {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.brand === selectedVal3 && e.discount === selectedVal4)
        }
    })
    displayData(array);
}

filterBrand.addEventListener("change", brandFilter);

// filter by category

let filterCategory = document.getElementById("category");
let filterColor = document.getElementById("filter-by-color");
let filterDiscount = document.getElementById("filter-by-discount");

let categoryFilter = async () => {
    let selectedVal1 = filterCategory.value;
    let selectedVal2 = filterColor.value;
    let selectedVal3 = filterBrand.value;
    let selectedVal4 = filterDiscount.value;
    array = array1.filter(function(e) {
        if(selectedVal2 === "" && selectedVal3 === "" && selectedVal4 === "") {
            return e.category === selectedVal1;
        } else if(selectedVal2 === "" && selectedVal3 === "") {
            return (e.category === selectedVal1 && e.discount === selectedVal4)
        } else if(selectedVal2 === "" && selectedVal4 === "") {
            return (e.category === selectedVal1 && e.brand === selectedVal3)
        } else if (selectedVal3 === "" && selectedVal4 === "") {
            return (e.category === selectedVal1 && e.color === selectedVal2)
        } else if(selectedVal3 === "") {
            return (e.color === selectedVal2 && e.category === selectedVal1 && e.discount === selectedVal4)
        } else if(selectedVal2 === "") {
            return (e.category === selectedVal1 && e.brand === selectedVal3 && e.discount === selectedVal4)
        } else if(selectedVal4 === "") {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.brand === selectedVal3)
        }
        else {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.brand === selectedVal3 && e.discount === selectedVal4)
        }
    })
    console.log(selectedVal1);
    console.log(selectedVal2);
    console.log(selectedVal3);
    console.log(selectedVal4);
    console.log(array);
    displayData(array);
}

filterCategory.addEventListener("change", categoryFilter);

// filter by color



let colorFilter = async () => {
    let selectedVal1 = filterCategory.value;
    let selectedVal2 = filterColor.value;
    let selectedVal3 = filterBrand.value;
    let selectedVal4 = filterDiscount.value;
    array = array1.filter(function(e) {
        if(selectedVal1 === "" && selectedVal3 === "" && selectedVal4 === "") {
            return e.color === selectedVal2;
        } else if(selectedVal1 === "" && selectedVal4 === "") {
            return (e.color === selectedVal2 && e.brand === selectedVal3)
        } else if(selectedVal1 === "" && selectedVal3 === "") {
            return (e.color === selectedVal2 && e.discount === selectedVal4)
        } else if (selectedVal3 === "" && selectedVal4 === "") {
            return (e.color === selectedVal2 && e.category === selectedVal1)
        } else if(selectedVal1 === "") {
            return (e.color === selectedVal2 && e.brand === selectedVal3 && e.discount === selectedVal4)
        } else if(selectedVal3 === "") {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.discount === selectedVal4)
        } else if(selectedVal4 === "") {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.brand === selectedVal3)
        }
        else {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.brand === selectedVal3 && e.discount === selectedVal4)
        }
    })
    displayData(array);
}

filterColor.addEventListener("change", colorFilter);

// filter by discount


let discountFilter = async () => {
    let selectedVal1 = filterCategory.value;
    let selectedVal2 = filterColor.value;
    let selectedVal3 = filterBrand.value;
    let selectedVal4 = parseInt(filterDiscount.value);
    array = array1.filter(function(e) {
        if(selectedVal2 === "" && selectedVal3 === "" && selectedVal1 === "") {
            return e.discount === selectedVal4;
        } else if(selectedVal2 === "" && selectedVal3 === "") {
            return (e.discount === selectedVal4 && e.category === selectedVal1)
        } else if(selectedVal2 === "" && selectedVal1 === "") {
            return (e.discount === selectedVal4 && e.brand === selectedVal3)
        } else if (selectedVal3 === "" && selectedVal1 === "") {
            return (e.discount === selectedVal4 && e.color === selectedVal2)
        } else if(selectedVal1 === "") {
            return (e.color === selectedVal2 && e.brand === selectedVal3 && e.discount === selectedVal4)
        } else if(selectedVal2 === "") {
            return (e.category === selectedVal1 && e.brand === selectedVal3 && e.discount === selectedVal4)
        } else if(selectedVal3 === "") {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.discount === selectedVal4)
        }
        else {
            return (e.category === selectedVal1 && e.color === selectedVal2 && e.brand === selectedVal3 && e.discount === selectedVal4)
        }
        
    })
    console.log(selectedVal4);
    console.log(typeof selectedVal4)
    displayData(array);
}

filterDiscount.addEventListener("change", discountFilter);

