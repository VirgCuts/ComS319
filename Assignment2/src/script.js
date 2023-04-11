//Code for incrementing and decrementing on button clicks
var clicks = 0;
var totalCost = 0;

function onClickIncJetski() {
  clicks += 1;
  totalCost += 200;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("totalCost").innerHTML = totalCost;
};
function onClickDecJetski() {
  if(clicks > 0){
    clicks -= 1;
    totalCost-= 200;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("totalCost").innerHTML = totalCost;
  }
};
