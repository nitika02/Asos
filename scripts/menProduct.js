// displaying items

let displaySection = document.getElementById("main-product-section-div");
let wishlistArr = [] || JSON.parse(localStorage.getItem("wishlist")) ;
let data = [];

let fetchData = async () => {

    let url = `http://localhost:3000/men`;

    let response = await fetch(url);
    data = await response.json();
    console.log(data);
    displayData(data);
}

fetchData();


let displayData = (data) => {
    displaySection.innerText = "";
    data.map((ele) => {
        let productDiv = document.createElement("div");
        productDiv.setAttribute("id", "product-section-card");
        productDiv.addEventListener("click", () => {
            localStorage.setItem("selected_product", JSON.stringify(ele));
            window.location.href = 'indiv.html';
        })

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

        let favIcon = document.createElement("i");
        favIcon.setAttribute("class", "fa-regular fa-heart faclass")
        favIcon.addEventListener("click", () => {
            wishlistArr.push(ele);
            localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
            favIcon.setAttribute("class", "fa-solid fa-heart faclass");
            //  window.location.href = "../wishlist/wishlist.html"
        })

        priceDiv.append(price, discountedPrice);

        productDiv.append(img, favIcon, title, priceDiv, discount);
        displaySection.append(productDiv);
    })
}


// filtering data
// sort by price
let sortPrice = document.getElementById("sort-price");


let changePrice = () => {
    let selectedVal = sortPrice.value;
    console.log(selectedVal);
    if(selectedVal === "lth") {
        data.sort(function(a,b) {
            return a.discounted_price - b.discounted_price;
        })
    }
    if(selectedVal === "htl") {
        data.sort(function(a,b) {
            return b.discounted_price - a.discounted_price;
        })
    }
    displayData(data);
}
sortPrice.addEventListener("change", changePrice);

// filter by brand 
let filterBrand = document.getElementById("filter-by-sort");

let brandFilter = () => {
    let selectedVal = filterBrand.value;
    console.log(selectedVal);
    let filteredBrand = data.filter(function(e) {
        if(selectedVal === "all") {
            return true;
        } else {
            return e.brand === selectedVal;
        }
    });
    console.log(filteredBrand);
    displayData(filteredBrand);
}

filterBrand.addEventListener("change", brandFilter);

// filter by category

let filterCategory = document.getElementById("category");

let categoryFilter = () => {
    let selectedVal = filterCategory.value;
    let filteredCategory = data.filter(function(e) {
        if(selectedVal === "all") {
            return true;
        } else {
            return e.category === selectedVal;
        }
    });
    displayData(filteredCategory);
}

filterCategory.addEventListener("change", categoryFilter);

// filter by color

let filterColor = document.getElementById("filter-by-color");

let colorFilter = () => {
    let selectedVal = filterColor.value;
    let filteredColor = data.filter(function(e) {
        if(selectedVal === "all" ){
            return true;
        } else {
            return e.color === selectedVal;
        }
    });
    displayData(filteredColor);
}

filterColor.addEventListener("change", colorFilter);

// filter by discount

let filterDiscount = document.getElementById("filter-by-discount");

let discountFilter = () => {
    let selectedVal = filterDiscount.value;
    console.log(selectedVal);
    let filteredDiscount = data.filter(function(e) {
        if(selectedVal === "all") {
            return true;
        } else {
            return Number(e.discount) == selectedVal;
        }
    });
    console.log(filteredDiscount);
    displayData(filteredDiscount);
}

filterDiscount.addEventListener("change", discountFilter);
