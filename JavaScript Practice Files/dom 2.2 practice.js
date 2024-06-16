//Question 1
let newbtn = document.createElement("button");
newbtn.innerText="Click Me!!!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
document.querySelector("body").prepend(newbtn);



//Question 2 based on classList
//<node>.classList.add("<class name>") --- Adds a new class to the existing class
//<node>.classList.remove("<class name>") --- Removes the class from the existing class
//<node>.classList.toggle("<class name>") --- If present then removes it, otherwise adds it (in existing class)
document.querySelector("p").classList.add("newcls")