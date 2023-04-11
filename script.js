//Code for incrementing and decrementing on button clicks
var clicks = 0;

function onClickInc() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};
function onClickDec() {
  if(clicks > 0){
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  }
};
