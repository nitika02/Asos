// header and footer
import {header} from '../components/header.js';
import {footer} from '../components/footer.js';

let headerDiv = document.getElementById('header');
headerDiv.innerHTML = header();

let footerDiv = document.getElementById('footer');
footerDiv.innerHTML = footer();

// <<<<<<< HEAD
var product = JSON.parse(localStorage.getItem("cart"));
// searchbar functionality

// searchbar functionality

let searchProducts = async () => {

    let query = document.getElementById("search").value;

    let response = await fetch(`https://asos-mock-data.onrender.com/women?category=${query}`);
    let data = await response.json();
    console.log(data);
    localStorage.setItem("search_results", JSON.stringify(data));
    localStorage.setItem("search", "true");
    window.location.href = "../womenProduct.html";
}

document.getElementById('lsearchbtn').addEventListener("click", searchProducts);

document.getElementById('search').addEventListener("keypress", (e) => {
    if(e.key == 'Enter'){
        searchProducts();
    }
});

// <<<<<<< HEAD
// let product = [
//     {
//         "title": "Nike classic longline padded jacket with hood in olive grey",
//         "price": 134.95,
//         "discount": -15,
//         "discounted_price": 114.70,
//         "brand": "Nike",
//         "images": ["https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-1-grey?$n_480w$&wid=476&fit=constrain",
//             "https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-2?$n_750w$&wid=750&fit=constrain",
//             "https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-3?$n_750w$&wid=750&fit=constrain",
//             "https://images.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-4?$n_750w$&wid=750&fit=constrain"],
//         "video": "https://video.asos-media.com/products/nike-classic-longline-padded-jacket-with-hood-in-olive-grey/202897100-catwalk-AVS.m3u8",
//         "category": "Jacket",
//         "color": "grey",
//         "rating": 4,
//         "details": {
//             "product_details": ["Coats by Nike", "That new-coat feeling", "Fixed hood", "Nike logo print to chest", "Zip fastening", "Zip side pockets", "Regular fit"],
//             "product_code": 118888991,
//             "brand": "Key players in everything activewear-related, it doesn't get more iconic than Nike. Sporting some of the most wanted trainers in the game, browse Air Max 90s and Air Force 1s, as well as Blazer and Waffle One styles. Get off-duty looks down with tracksuits, T-shirts and accessories in our Nike at ASOS edit, or scroll performance leggings and sports bras from Nike Training and Nike Running for an extra dose of motivation.",
//             "size_and_fit": ["Model wears: UK S/ EU S/ US XS", "Model's height: 175cm/5'9"],
//             "look_after_me": "Wipe clean with a damp cloth or sponge",
//             "about_me": ["Smooth woven fabric", "Uses Nike Therma-FIT technology", "Helps to regulate body temperature and retain heat to keep you warm in cold-weather conditions"],
//             "main": "100% Cotton.",

//         }
//     },

//     {
//         "title": "Pull&Bear Exclusive oversized tailored coat in brown",
//         "price": 59.99,
//         "discount": -15,
//         "discounted_price": 50.99,
//         "brand": "Pull&Bear",
//         "images": ["https://images.asos-media.com/products/pullbear-exclusive-oversized-tailored-coat-in-brown/203881814-1-brown?$n_640w$&wid=513&fit=constrain",
//             "https://images.asos-media.com/products/pullbear-exclusive-oversized-tailored-coat-in-brown/203881814-2?$n_750w$&wid=750&fit=constrain",
//             "https://images.asos-media.com/products/pullbear-exclusive-oversized-tailored-coat-in-brown/203881814-3?$n_640w$&wid=513&fit=constrain",
//             "https://images.asos-media.com/products/pullbear-exclusive-oversized-tailored-coat-in-brown/203881814-4?$n_640w$&wid=513&fit=constrain"],
//         "video": "https://video.asos-media.com/products/pullbear-exclusive-oversized-tailored-coat-in-brown/203881814-catwalk-AVS.m3u8",
//         "category": "Jacket",
//         "color": "brown",
//         "rating": 3,
//         "details": {
//             "product_details": ["Coats & Jackets by Pull&Bear", "Exclusive to ASOS", "Peak lapels", "Button placket", "Side pockets", "Oversized fit"],
//             "product_code": 123274975,
//             "brand": "When it comes to your casual rotation, no one does it better than Pull&Bear. Inspired by the laid-back vibe of Palm Springs, California, the brand references grunge influences, cool, sporty elements and street style across a collection of jeans, jackets, tops and trousers. And the good news is they’re all available in our Pull&Bear at ASOS edit, as well as shoes, bags and swimwear. What more could you want?",
//             "size_and_fit": ["Model wears: UK S/ EU S/ US XS", "Model's height: 170cm/5'7"],
//             "look_after_me": "Machine wash according to instructions on care label",
//             "about_me": ["Soft woven fabric"],
//             "main": "93% Polyester, 7% Viscose",
//         }
//     }
// ]
var product = JSON.parse(localStorage.getItem("cart"));
// =======

var product = JSON.parse(localStorage.getItem("cart")) || [];
// >>>>>>> 03a48ce1c965fe8f385624dbf7ec46ffa03bc9f1

// >>>>>>> e9d071a1e3864927cc0048728b60e5fc411f5c49
var total = 0;

var items = document.getElementById("items");
for (let i = 0; i < product.length; i++) {
    var div = document.createElement("div");
    div.setAttribute('class', 'products');
    var img = document.createElement("img");
    img.src = product[i].images[0];
    var textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'textDiv');
    var p = document.createElement("p");
    var p1 = document.createElement("p");
    var smalldiv = document.createElement("div");
    var span1 = document.createElement("span");
    var select = document.createElement('select');
    //  var option = document.createElement("option");
    var select1 = document.createElement("select");
    select1.setAttribute('id', 'select1');
    var button = document.createElement("button");

    p.innerText = '£ ' + product[i].price;
    total = total + product[i].price
    p.setAttribute('id', 'price');
    p1.innerText = product[i].title;
    span1.innerText = product[i].color;
    var option = document.createElement("option");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    var option4 = document.createElement("option");
    var option5 = document.createElement("option");
    var option6 = document.createElement("option");
    var option7 = document.createElement("option");

    var ooption = document.createElement("option");
    var ooption1 = document.createElement("option");
    var ooption2 = document.createElement("option");
    var ooption3 = document.createElement("option");
    var ooption4 = document.createElement("option");
    var ooption5 = document.createElement("option");
    var ooption6 = document.createElement("option");
    var ooption7 = document.createElement("option");
    ooption.setAttribute('value', 1);
    ooption1.setAttribute('value', 2)
    ooption2.setAttribute('value', 3)
    ooption3.setAttribute('value', 4)
    ooption4.setAttribute('value', 5)
    ooption5.setAttribute('value', 6)
    ooption6.setAttribute('value', 7)
    ooption7.setAttribute('value', 8)

    var optionText = document.createTextNode("UK 4");
    var optionText1 = document.createTextNode("UK 5");
    var optionText2 = document.createTextNode("UK 6");
    var optionText3 = document.createTextNode("UK 7");
    var optionText4 = document.createTextNode("UK 8");
    var optionText5 = document.createTextNode("UK 9");
    var optionText6 = document.createTextNode("UK 10");
    var optionText7 = document.createTextNode("UK 11");

    var ooptionText = document.createTextNode("Qty 1");
    var ooptionText1 = document.createTextNode("Qty 2");
    var ooptionText2 = document.createTextNode("Qty 3");
    var ooptionText3 = document.createTextNode("Qty 4");
    var ooptionText4 = document.createTextNode("Qty 5");
    var ooptionText5 = document.createTextNode("Qty 6");
    var ooptionText6 = document.createTextNode("Qty 7");
    var ooptionText7 = document.createTextNode("Qty 8");

    option.appendChild(optionText);
    option1.appendChild(optionText1);
    option2.appendChild(optionText2);
    option3.appendChild(optionText3);
    option4.appendChild(optionText4);
    option5.appendChild(optionText5);
    option6.appendChild(optionText6);
    option7.appendChild(optionText7);

    ooption.appendChild(ooptionText);
    ooption1.appendChild(ooptionText1);
    ooption2.appendChild(ooptionText2);
    ooption3.appendChild(ooptionText3);
    ooption4.appendChild(ooptionText4);
    ooption5.appendChild(ooptionText5);
    ooption6.appendChild(ooptionText6);
    ooption7.appendChild(ooptionText7);


    select.append(option, option1, option2, option3, option4, option5, option6, option7);
    select1.append(ooption, ooption1, ooption2, ooption3, ooption4, ooption5, ooption6, ooption7);
    var quantity = select1.value;
    total = total + product[i].price * quantity;
    document.getElementById("total").innerText = '£ ' + total;
    document.getElementById("subtotal").innerText = '£ ' + total;
    var wishIcon = document.createElement('span');
    wishIcon.style.marginRight = "10px";
    wishIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
    var saveText = document.createElement('span');
    saveText.innerText = 'Save for later';
    button.append(wishIcon, saveText);
    var cross = document.createElement('span');
    cross.setAttribute('id', 'cross');
    cross.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    // button.addEventListener('click', removeItem);
    //  span2.innerText = product[i].color;
    smalldiv.append(span1, select, select1);
    textDiv.append(cross, p, p1, smalldiv, button);
    div.append(img, textDiv);
    items.append(div);

    select1.addEventListener('change', () => {
        gettotalvalue(i);
    });
}
// document.getElementById("subtotal").innerText = total;
// console.log(total);
// function removeItem(a){
//   items.removeChild(a);
// }
document.getElementById("checkoutBtn").addEventListener('click', gotopayment);
function gotopayment() {
    window.location.href = "../payment.html";
}


function gettotalvalue(i) {

    var valuee = document.getElementById('select1').value;
    var productt = product[i].price;
    var newtotal = 0;
    total = total + productt * valuee;
    console.log(newtotal);
    document.getElementById("total").innerText = total;
    document.getElementById("subtotal").innerText = total;
    console.log(newtotal);
}
//    change