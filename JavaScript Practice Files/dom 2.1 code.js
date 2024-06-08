let div1 = document.querySelector("div");
console.log(div1);

//To get the attribute value
let para1 = document.querySelector("p");
console.log(para1.getAttribute("class"));

//To get the attribute value
let para2 = document.querySelector("p");
console.log(para2.setAttribute("class","newclass"));

//Access styling of CSS in JavaScript
let div2 = document.querySelector("div");
div2.style.backgroundColor = "green";
div2.style.fontSize = "17px";
div2.innerText = "Hello!"