alert("Message shown after loading of Webpage")

//Selection with id
let button = document.getElementById("myid"); //h1
console.dir(button);

//Selection with class
let headings = document.getElementsByClassName("heading-cls");
console.dir(headings);
console.log(headings);

//Selection with tag
let paras = document.getElementsByTagName("p");
console.log(paras);



//Selection with Query Selector
//Use this as it can be used for upper 3 selections
//This will return only first element found
//For p, nothing needs to be used
//For class, use dot in ftont
//For id, use hash in front
let element = document.querySelector("p");
console.dir(element);

//This will return all elements found
let elements = document.querySelectorAll("p");
console.dir(elements);



let dir = document.querySelector("div");
console.dir(dir);

//<tag>.innerText returns Textual Content
//<tag>.innerHTML returns both HTML and Textual Content
//Both can be changed temporarily in the format:
//<tag>.<required function> = " <change to be written> "
//<tag>.textContent shows Textual Content even for hidden elements