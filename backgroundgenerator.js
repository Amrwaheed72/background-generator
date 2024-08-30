var _ =require("lodash");
var array = [1,2,3,4,5,6,7,8,9];

console.log('asnwer:',_.without(array,3))
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let body = document.querySelector(".gradient");

function changingColor(){
  body.style.background =
  "linear-gradient(to right ," + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
}
color1.addEventListener("input", changingColor);
color2.addEventListener("input", changingColor);

