let inputs = document.querySelectorAll("input");

let itemList = document.querySelector(".itemList");
let liEl = document.createElement("li");
let input = document.createElement("input");
let label = document.createElement("label");
let labelText = document.createTextNode(" 이벤트 위임 학습");

let inputEls = [...document.querySelectorAll("input")];
// console.log("inputels", inputEls);

let nav = document.querySelector(".nav");
console.log(nav);
// let inputEl = document.querySelectorAll("input");
input.setAttribute("type", "checkbox");
input.setAttribute("id", "item3");
label.setAttribute("for", "item3");
label.appendChild(labelText);
liEl.appendChild(input);
liEl.appendChild(label);
// itemList.appendChild(liEl);
// console.log("inputels", document.querySelectorAll("input"));
// inputs.forEach(function (input) {
//   input.addEventListener("click", (e) => {
//   });
// });

// itemList.addEventListener("click", (e) => {
//   console.log("e.target:", e.target, "e.currentTarget:", e.currentTarget, "input:", input);
// });

window.addEventListener("scroll", _.throttle(log, 300));
// console.log(window.scrollY);
// if (window.scrollY >= 100) {
//     nav.classList.add("blue");
// } else {
//     nav.classList.remove("blue");
// }

function log() {
    console.log(window.scrollY);
}
