// header and footer
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';

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
    window.location.href = "../womenProduct.html";
}

document.getElementById('lsearchbtn').addEventListener("click", searchProducts);

document.getElementById('search').addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        searchProducts();
    }
});


var product = JSON.parse(localStorage.getItem("cart"));
// =======

// var product = JSON.parse(localStorage.getItem("cart")) || [];

var total = 0;

var items = document.getElementById("items");
product.map((el, i) => {
    var div = document.createElement("div");
    div.setAttribute('class', 'products');
    var img = document.createElement("img");
    img.src = el.images[0];
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

    p.innerText = '£ ' + el.discounted_price;
    // total = total + product[i].price
    p.setAttribute('id', 'price');
    p1.innerText = el.title;
    span1.innerText = el.color;
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
    total = total + el.discounted_price * quantity;
    document.getElementById("total").innerText = '£ ' + total.toFixed(2);
    document.getElementById("subtotal").innerText = '£ ' + total.toFixed(2);
    var wishIcon = document.createElement('span');
    wishIcon.style.marginRight = "10px";
    wishIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
    var saveText = document.createElement('span');
    saveText.innerText = 'Save for later';
    saveText.addEventListener('click', () => {
        addToWishlist(el, i);
    });
    button.append(wishIcon, saveText);
    var cross = document.createElement('span');
    cross.setAttribute('id', 'cross');
    cross.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cross.addEventListener("click", () => {
        removeFromCart(i);
    });

    smalldiv.append(span1, select, select1);
    textDiv.append(p, p1, smalldiv, button, cross);
    div.append(img, textDiv);
    items.append(div);
    console.log(total)
    select1.addEventListener('change', () => {
        gettotalvalue(i);
    });
});

document.getElementById("checkoutBtn").addEventListener('click', gotopayment);
function gotopayment() {
    window.location.href = "./payment.html";
}
var wish = JSON.parse(localStorage.getItem("wishlist")) || []
function addToWishlist(el, i) {
    wish.push(el);
    product.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(product));
    localStorage.setItem("wishlist", JSON.stringify(wish))
    window.location.reload();
}

function removeFromCart(i) {
    product.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(product));
    window.location.reload();
}

function gettotalvalue(i) {

    var valuee = document.getElementById('select1').value;
    var productt = product[i].discounted_price;
    var newtotal = total;
    newtotal = newtotal + productt * valuee;
    console.log(newtotal);
    document.getElementById("total").innerText = newtotal.toFixed(2);
    document.getElementById("subtotal").innerText = newtotal.toFixed(2);
    localStorage.setItem('total', newtotal);
    console.log(newtotal);
}
localStorage.setItem('total', total);