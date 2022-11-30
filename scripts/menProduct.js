// displaying items

let fetchData = async () => {

    let url = `http://localhost:3000/men`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    displayData(data);
}

let displaySection = document.getElementById("main-product-section-div");
let wishlistArr = [];

let displayData = (data) => {
    data.map((ele) => {
        let productDiv = document.createElement("div");
        productDiv.setAttribute("id", "product-section-card");
        productDiv.addEventListener('click', () => {
            localStorage.setItem('selected_product', JSON.stringify(ele));
            window.location.href = "indiv.html";
        });

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


fetchData();
