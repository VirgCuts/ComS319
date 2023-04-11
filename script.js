//Code for incrementing and decrementing on button clicks
class product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
}

var clicks = 0;
var totalCost = 0;
var cart = [];

function onClickIncJetski() {
  clicks += 1;
  totalCost += 200;
  document.getElementById("clicks").innerHTML = clicks;
  cart.push(new product("jetski",200));
  console.log(cart);
};
function onClickDecJetski() {
  if(clicks > 0){
    clicks -= 1;
    totalCost-= 200;
    document.getElementById("clicks").innerHTML = clicks;
    for(let i =0; i< cart.length; i++){
      if(cart[i].name == "jetski"){
        if(i + 1 == cart.length){
          cart.pop();
        }else{
          cart.splice(i, i+1);
        }
      }
    }
    console.log(cart);
  }
};
