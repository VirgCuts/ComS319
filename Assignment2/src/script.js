


class product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
}

var jetclicks = 0; //seperate counter for number of clicks on jetskis
var totalCost = 0; //total cost
var cart = [];    //cart of products

//Increase and decrease for jetski, increasing number, adds to cart, and adds to cost
export function onClickIncJetski() {
  jetclicks += 1;
  totalCost += 200;
  document.getElementById("jetclicks").innerHTML = jetclicks; //make sure to define id as jetclicks
  cart.push(new product("jetski",200));
};

export function onClickDecJetski() {
  if(jetclicks > 0){
    jetclicks -= 1;
    totalCost-= 200;
    document.getElementById("jetclicks").innerHTML = jetclicks;
    for(let i =0; i< cart.length; i++){
      if(cart[i].name == "jetski"){
        if(i + 1 == cart.length){
          cart.pop();
          break;
        }else{
          cart.splice(i, i+1);
          break;
        }
      }
    }
  }
};

var materclicks = 0;
export function onClickIncMater() {
  materclicks += 1;
  totalCost += 15;
  document.getElementById("materclicks").innerHTML = materclicks;
  cart.push(new product("mater",15));
};
export function onClickDecMater() {
  if(materclicks > 0){
    materclicks -= 1;
    totalCost-= 15;
    document.getElementById("materclicks").innerHTML = materclicks;
    for(let i =0; i< cart.length; i++){
      if(cart[i].name == "mater"){
        if(i + 1 == cart.length){
          cart.pop();
          break;
        }else{
          cart.splice(i, i+1);
          break;
        }
      }
    }
  }
};
