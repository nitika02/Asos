var product = {
    title: "ASOS DESIGN lightweight bomber jacket in black",
    price: 30.0,
    discount: -25,
    discounted_price: 22.5,
    rating: 4.1,
    brand: "Asos Design",
    color: "Black",
    category: "Jacket",
    images: [
        "https://images.asos-media.com/products/asos-design-lightweight-bomber-jacket-in-black/201560664-1-black?$n_640w$&wid=513&fit=constrain",
        "https://images.asos-media.com/products/asos-design-lightweight-bomber-jacket-in-black/201560664-2?$n_240w$&wid=75&fit=constrain",
        "https://images.asos-media.com/products/asos-design-lightweight-bomber-jacket-in-black/201560664-3?$n_240w$&wid=75&fit=constrain",
        "https://images.asos-media.com/products/asos-design-lightweight-bomber-jacket-in-black/201560664-4?$n_240w$&wid=75&fit=constrain"
    ],
    details: {
        product_details: [
            "Bomber jacket by ASOS DESIGN",
            "Low-key layering",
            "Baseball collar",
            "Zip fastening",
            "Side pockets",
            "Fitted cuffs and hem",
            "Regular fit",
        ],
        product_code: "113733931",
        brand: "This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in Plus and Tall. Created by us, styled by you.",
        size_and_fit: ["Model wears: Medium", "Model's height: 188cm/6'2"],
        look_after_me: "Machine wash according to instructions on care label",
        about_me: ["Plain-woven fabric", "Lightweight feel", "Lining: 100% Polyester, Shell: 57% Polyamide, 43% Polyester."],
    }
  
};

let showRating = (rating) => {

    let solidStars = Math.floor(rating);
    let hollowStars = 5 - solidStars;

    let div = document.createElement('div');

    // appending solid stars
    for(let i=1; i<=solidStars; i++){
        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-star"></i>';
        div.append(span);
    }

    // appending hollow stars
    for(let i=1; i<=hollowStars; i++){
        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-regular fa-star"></i>';
        div.append(span);
    }

    // appending the value
    let span = document.createElement('span');
    span.innerText = rating;
    div.append(span);

    return div;
}

let displayProduct = () => {

    // thumbnails section
    let thumbDiv = document.getElementById("thumbDiv");
    thumbDiv.innerHTML = null;

    let ul = document.createElement("ul");
    product.images.forEach((el) => {
        let li = document.createElement("li");
        let thumb = document.createElement("img");
        thumb.src = el;
        thumb.addEventListener('click', ()=>{
            let image = document.getElementById('image');
            image.src = thumb.src;
        })
        li.append(thumb);
        ul.append(li);
    });

    thumbDiv.append(ul);


    // image section
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.innerHTML = null;

    let image = document.createElement('img');
    image.setAttribute('id', 'image');
    image.src = product.images[0];

    imageDiv.append(image);


    // description section
    let descDiv = document.getElementById('descDiv');
    descDiv.innerHTML = null;

    let title = document.createElement('h3');
    title.innerText = product.title;

    let discounted_price = document.createElement('h3');
    discounted_price.innerText = `Now  £ ${product.discounted_price}`;
    discounted_price.style.color = "maroon";

    let price = document.createElement('h4');
    price.innerText = `Was  £ ${product.price}  `;
    price.style.display = "inline";

    let discount = document.createElement("h4");
    discount.innerText = `(${product.discount}%)`;
    discount.style.display = "inline";
    discount.style.color = "red";

    let ratingDiv = document.createElement('div');
    ratingDiv.setAttribute('id', 'ratingDiv');
    ratingDiv.append(showRating(product.rating));

    let couponDiv = document.createElement('div');
    couponDiv.setAttribute('id', 'couponDiv');
    let couponText = document.createElement('p');
    couponText.innerText = "EXTRA 20% OFF EVERYTHING! With code: PLAYER20";
    couponDiv.append(couponText);

    let color = document.createElement('p');
    color.innerText = `Color: ${product.color}`;

    let sizeDiv = document.createElement('div');
    sizeDiv.setAttribute('id', 'sizeDiv');

    let sizeText = document.createElement('p');
    sizeText.innerText = "Size: ";
    let select = document.createElement('select');
    let option1 = document.createElement('option');
    option1.innerText = "XS - Extra Small";
    let option2 = document.createElement('option');
    option2.innerText = "S - Small";
    let option3 = document.createElement('option');
    option3.innerText = "M - Medium";
    let option4 = document.createElement('option');
    option4.innerText = "L - Large";
    let option5 = document.createElement('option');
    option5.innerText = "XL - Xtra Large";

    select.append(option1, option2, option3, option4, option5);
    sizeDiv.append(sizeText, select);

    let addingDiv = document.createElement('div');
    addingDiv.setAttribute('id', 'addingDiv');

    let cartBtn = document.createElement('button');
    cartBtn.innerText = "ADD TO BAG";
    let wishlistBtn = document.createElement('button');
    wishlistBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;

    addingDiv.append(cartBtn, wishlistBtn);

    let deliveryDiv = document.createElement('div');
    deliveryDiv.setAttribute('id', 'deliveryDiv');
    let innerDiv1 = document.createElement('div');
    let innerDiv2 = document.createElement('div');

    innerDiv1.innerHTML = `<i class="fa-solid fa-truck"></i>`;

    let p1 = document.createElement('p');
    p1.innerText = 'Free Delivery.';
    let p2 = document.createElement('p');
    p2.innerText = 'Ts&Cs apply. More delivery info';

    innerDiv2.append(p1, p2);

    deliveryDiv.append(innerDiv1, innerDiv2);

    let helpDiv = document.createElement('div');
    helpDiv.setAttribute('id', 'helpDiv');

    let helpP1 = document.createElement('p');
    helpP1.innerText = 'SIZING HELP';
    let helpP2 = document.createElement('p');
    helpP2.innerText = 'Still unsure what size to get?';
    let helpP3 = document.createElement('p');
    helpP3.innerText = 'Find your recommended size.';
    helpP3.setAttribute('class', 'underlined');

    helpDiv.append(helpP1, helpP2, helpP3);
    


    descDiv.append(title, discounted_price, price, discount, ratingDiv, couponDiv, color, sizeDiv, addingDiv, deliveryDiv, helpDiv);
};


window.onload = displayProduct();