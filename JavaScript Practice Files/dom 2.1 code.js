//To get the attribute value
let para1 = document.querySelector("p");
console.log(para1.getAttribute("class"));

//To get the attribute value and overwrites the value
//For this overwriting issue, classList is used (DOM 2.2 Practice.js)
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
//Opt 2: <node>.prepend(<item>) --- Adds at the start of node (inside)
//Opt 3: <node>.before(<item>) --- Adds before the node (outside)
//Opt 4: <node>.after(<item>) --- Adds after the node (outside)
//opt 5: <node>.appendChild(<item>) --- Same as Append but used in lists
let addbtn = document.getElementById("box2");
addbtn.append(newbtn);

//Adding an element based on the upper 2 steps
let newhead = document.createElement("h1");
newhead.innerHTML="<i>Hi I am new to JavaScript</i>";
document.querySelector("body").prepend(newhead);


//Removal or Deletion of Elements
let rmp = document.querySelector("p");
rmp.remove()