var product = JSON.parse(localStorage.getItem("cart"));
var items = document.getElementById("item");
// console.log(product);
var total = localStorage.getItem('total');
for(var i = 0; i<product.length; i++){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = product[i].images[0];
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
    p.innerText = product[i].price;
    // total = total + product[i].price
    p.style.fontWeight = "bold";
    p1.innerText = product[i].title;
    span1.innerText = product[i].color;
    smalldiv.append(span1);
    textDiv.append(p, p1, smalldiv, deleteBut);
    div.append(img, textDiv);
    items.append(div);
    

}
document.getElementById('placeOrder').addEventListener('click', goToHome);
// var confirmFun = confirm;
function goToHome(){
    alert("Your order has Been placed");
   
        window.location.href = "index.html";
   
}

function deleteElement(i){

    product.splice(i-1, 1);
    console.log(i);
    console.log(product);
    localStorage.setItem('cart', JSON.stringify(product));
    window.location.reload();
}
document.getElementById("totaltopay").innerText = total;