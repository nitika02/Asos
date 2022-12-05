var product = JSON.parse(localStorage.getItem("cart"));
var items = document.getElementById("item");
// console.log(product);
var total = localStorage.getItem('total');
product.map( (el, i) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.images[0];
    var textDiv = document.createElement('div');
    textDiv.setAttribute('id', 'textDiv');
    var p = document.createElement("p");
    var p1 = document.createElement("p");
    var smalldiv = document.createElement("div");
    var span1 = document.createElement("span");
    var deleteBut = document.createElement("div");
    deleteBut.innerText = "Delete Button"
    deleteBut.addEventListener('click', () => {
        deleteElement(i);
    });
    p.innerText = el.price;
    // total = total + product[i].price
    p.style.fontWeight = "bold";
    p1.innerText = el.title;
    span1.innerText = el.color;
    smalldiv.append(span1);
    textDiv.append(p, p1, smalldiv, deleteBut);
    div.append(img, textDiv);
    items.append(div);
    

})
document.getElementById('placeOrder').addEventListener('click', goToHome);
// var confirmFun = confirm;
function goToHome(){
    alert("Your order has Been placed");
   
        window.location.href = "./index.html";
   
}
var promo = document.getElementById("inputCode");
var promoval = promo.value

function deleteElement(i){

    product.splice(i, 1);
    console.log(i);
    console.log(product);
    localStorage.setItem('cart', JSON.stringify(product));
    window.location.reload();
}
document.getElementById("totaltopay").innerText = total;

document.getElementById("applyCode").addEventListener("click", applyPromo);
function applyPromo(){
    if(promo.value == "masai20"){
        alert("Promo Code applied")
        var promoTotal =  total;
        promoTotal = promoTotal*20/100;
        total = promoTotal;
         document.getElementById("totaltopay").innerText = promoTotal;
         console.log(promoTotal)
        //  document.getElementById("subtotal").innerText = promoTotal;
        //  window.location.reload();
     }
     else{
        alert("Promo Code Invalid")
     }
    //  console.log(promo.value)
}