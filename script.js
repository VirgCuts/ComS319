const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
let count = 0;

incrementButton.addEventListener("click", function() {
  count++;
  countElement.innerText = count;
});

decrementButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    countElement.innerText = count;
  }
});
