let div1 = document.querySelector("div");
console.log(div1);



//To get the attribute value
let para1 = document.querySelector("p");
console.log(para1.getAttribute("class"));

//To get the attribute value and change the value
let para2 = document.querySelector("p");
console.log(para2.setAttribute("class","newclass"));

//Access styling of CSS in JavaScript (Overriding)
let div2 = document.getElementById("box1");
div2.style.backgroundColor = "green";
div2.style.fontSize = "17px";
div2.innerText = "Hello!";



//Insertion of Elements
//Step 1: Creation of Elements
let newbtn = document.createElement("button");
newbtn.innerText="Click Me";
console.log(newbtn);

//Step 2: Addition in the Webpage
//Opt 1: <node>.append(<item>) --- Adds at the end of node (inside)
//Opt 1: <node>.prepend(<item>) --- Adds at the start of node (inside)
//Opt 1: <node>.before(<item>) --- Adds before the node (outside)
//Opt 1: <node>.after(<item>) --- Adds after the node (outside)
let addbtn = document.getElementById("box2");
addbtn.append(newbtn);