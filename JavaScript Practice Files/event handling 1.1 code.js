//Go to mdn web docs for All types of Event Handeling



//Event Handling inside the JavaScript file (JS Handeling)
//If both Inline Handle and Js Handle are done for single node, Then JS Handle will be prioritized
//JS Handle event can occur only once for one node, it will overwritten and last handler will execute if done more than once

//Option 1: Event Handeling
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Button 1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

//Option 2: Event Object (Special type of Event Handeling)
let btn_1 = document.querySelector("#btn1");
btn_1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type)
    console.log(evt.clientX,evt.clientY);
    console.log("Button 1 was clicked");
}