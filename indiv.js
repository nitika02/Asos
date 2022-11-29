let product = {
    title: "Nike classic longline padded jacket with hood in olive grey",
    price: 134.95,
    discount: -15,
    discounted_price: 114.70,
    brand: "Nike",
    images: ["https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-1-grey?$n_480w$&wid=476&fit=constrain",
        "https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-2?$n_750w$&wid=750&fit=constrain",
        "https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-3?$n_750w$&wid=750&fit=constrain",
        "https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-4?$n_750w$&wid=750&fit=constrain"],
    video: "https://video.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-catwalk-AVS.m3u8",
    category: "Jacket",
    color: "grey",
    rating: 4,
    details: {
        product_details: ["Coats by Nike", "That new-coat feeling", "Fixed hood", "Nike logo print to chest", "Zip fastening", "Zip side pockets", "Regular fit"],
        product_code: 118888991,
        brand: "Key players in everything activewear-related, it doesn't get more iconic than Nike. Sporting some of the most wanted trainers in the game, browse Air Max 90s and Air Force 1s, as well as Blazer and Waffle One styles. Get off-duty looks down with tracksuits, T-shirts and accessories in our Nike at ASOS edit, or scroll performance leggings and sports bras from Nike Training and Nike Running for an extra dose of motivation.",
        size_and_fit: ["Model wears: UK S/ EU S/ US XS", "Model's height: 175cm/5'9"],
        look_after_me: "Wipe clean with a damp cloth or sponge",
        about_me: ["Smooth woven fabric", "Uses Nike Therma-FIT technology", "Helps to regulate body temperature and retain heat to keep you warm in cold-weather conditions", "main: 100% Cotton."],
    }
};

let addToCart = () => {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

let addToWishlist = () => {

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

let showRating = (rating) => {

    let solidStars = Math.floor(rating);
    let hollowStars = 5 - solidStars;

    let div = document.createElement('div');

    // appending solid stars
    for (let i = 1; i <= solidStars; i++) {
        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-star"></i>';
        div.append(span);
    }

    // appending hollow stars
    for (let i = 1; i <= hollowStars; i++) {
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

    // path text
    let pathDiv = document.getElementById('path');

    let path = document.createElement('p');
    path.innerText = `Home > Men > ${product.title}`;
    path.style.fontSize = "small";
    pathDiv.appendChild(path);

    // thumbnails section
    let thumbDiv = document.getElementById("thumbDiv");
    thumbDiv.innerHTML = null;

    let ul = document.createElement("ul");
    product.images.forEach((el) => {
        let li = document.createElement("li");
        let thumb = document.createElement("img");
        thumb.src = el;
        thumb.addEventListener('click', () => {
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
    discounted_price.style.color = "#d01345";
    discounted_price.style.font = "18px";

    let price = document.createElement('h4');
    price.innerText = `Was  £ ${product.price}  `;
    price.style.display = "inline";

    let discount = document.createElement("h4");
    discount.innerText = `(${product.discount}%)`;
    discount.style.display = "inline";
    discount.style.color = "#d01345";
    discount.style.font = "14px";

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
    option1.innerText = "Please Select";
    let option2 = document.createElement('option');
    option2.innerText = "XS - Extra Small";
    let option3 = document.createElement('option');
    option3.innerText = "S - Small";
    let option4 = document.createElement('option');
    option4.innerText = "M - Medium";
    let option5 = document.createElement('option');
    option5.innerText = "L - Large";
    let option6 = document.createElement('option');
    option6.innerText = "XL - Xtra Large";

    select.append(option1, option2, option3, option4, option5, option6);
    sizeDiv.append(sizeText, select);

    let addingDiv = document.createElement('div');
    addingDiv.setAttribute('id', 'addingDiv');

    let cartBtn = document.createElement('button');
    cartBtn.innerText = "ADD TO BAG";
    cartBtn.addEventListener('click', addToCart);


    let wishlistBtn = document.createElement('button');
    wishlistBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    wishlistBtn.addEventListener('click', addToWishlist);

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

let displayDetails = () => {

    // bottom section 

    // first div
    let div1 = document.querySelector("#bottom-section > div:first-child");

    let div1_head = document.createElement('h4');
    div1_head.innerText = "PRODUCT DETAILS";
    div1_head.setAttribute('class', 'bottom-section-headings');

    let detailPoints = product.details.product_details;
    let desc = document.createElement('p');
    desc.innerText = detailPoints[0];

    let ul = document.createElement('ul');

    for (let i = 1; i < detailPoints.length; i++) {
        let li = document.createElement('li');
        li.innerText = detailPoints[i];
        ul.appendChild(li);
    }

    div1.append(div1_head, desc, ul);


    // second div
    let div2 = document.querySelector("#bottom-section > div:nth-child(2)");

    let div2_head1 = document.createElement('h4');
    div2_head1.innerText = "PRODUCT CODE";
    div2_head1.setAttribute('class', 'bottom-section-headings');

    let product_code = document.createElement('p');
    product_code.innerText = product.details.product_code;

    let div2_head2 = document.createElement('h4');
    div2_head2.innerText = "BRAND";
    div2_head2.setAttribute('class', 'bottom-section-headings');

    let brand = document.createElement('p');
    brand.innerText = product.details.brand;

    div2.append(div2_head1, product_code, div2_head2, brand);

    // third div
    let div3 = document.querySelector("#bottom-section > div:last-child");

    let div3_head1 = document.createElement('h4');
    div3_head1.innerText = "SIZE & FIT";
    div3_head1.setAttribute('class', 'bottom-section-headings');

    div3.append(div3_head1);

    let sizeFit = product.details.size_and_fit;

    sizeFit.forEach(el => {
        let p = document.createElement('p');
        p.innerText = el;
        div3.append(p);
    });

    let div3_head2 = document.createElement("h4");
    div3_head2.innerText = "LOOK AFTER ME";
    div3_head2.setAttribute('class', 'bottom-section-headings');

    let p = document.createElement('p');
    p.innerText = product.details.look_after_me;

    div3.append(div3_head2, p);

    let div3_head3 = document.createElement("h4");
    div3_head3.innerText = "ABOUT ME";
    div3_head3.setAttribute('class', 'bottom-section-headings');

    div3.append(div3_head3);

    let aboutMe = product.details.about_me;

    aboutMe.forEach(el => {
        let p = document.createElement('p');
        p.innerText = el;
        div3.append(p);

    });

}


window.onload = displayProduct();
window.onload = displayDetails();