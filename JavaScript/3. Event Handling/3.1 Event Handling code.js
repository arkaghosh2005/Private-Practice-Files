//Go to mdn web docs for All types of Event Handeling



//Event Handling inside the JavaScript file (JS Handeling)
//If both Inline Handle and JS Handle are done for single node, Then JS Handle will be prioritized
//JS Handle event can occur only once for one event, it will overwritten and last handler will execute if done more than once

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
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY);
    console.log("Button 1 was clicked");
}



//Event Listener is a dedicated handler for events only
//Multiple Handling of a single event is possible

//Item 1: <event>.addEventListener(<event>,<callback>) --- Adds an Event Handeler
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    console.log("Button 2 was clicked - Handler 1");
})
btn2.addEventListener("click",(evt)=>{
    console.log("Button 2 was clicked - Handler 2");
    console.log(evt);
    console.log(evt.type);
})
const handler3 = (e) => {
    console.log("Button 2 was clicked - Handler 3");
    console.log(e.type);
}
btn2.addEventListener("click",handler3);

//Item 2: <event>.removeEventListener(<event>,<callback>) --- Removes an existing Event Handeler
//The callback reference should be same for removal
btn2.removeEventListener("click",handler3);