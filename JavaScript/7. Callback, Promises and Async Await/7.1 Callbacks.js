//TOPIC 1: Asynchronous Programming
//Definition: Parallel Execution of multiple blocks of code
console.log("One");
console.log("Two");
//In setTimeout, the code inside the function block is executed after a certain amount of time
//Syntax: setTimeout(<function code block or variable>, <time in ms>);
//Runs parallally with the execution of the next code
let hello = () => console.log("Five");
setTimeout(hello,2000); //1 sec = 1000 mili sec
//The next codes also execute simultaneously
console.log("Three");
console.log("Four");





//TOPIC 2.1: Callbacks
//Definition: A function passed as an argument inside another function
function state (a, b) {
    console.log(a + b);
};

function country (a, b, newstate) {
    newstate(a, b);
};

country(2, 3, state);





//TOPIC 2.2: Callback Hell
//Definition: Nested callbacks stacked below one another forming pyramid structure
function getdata(dataid, getnextdata) {
    setTimeout(() => {
        console.log("Data (Topic: 2.2): ", dataid);
        if(getnextdata)
            getnextdata();
    }, 5000); //Will return data after 5 sec
};
//The Nested Callback Syntax: <function name>(<data1>, () => { <function name>(<data2>, <...>) });
//This is Nested Callback Hell
getdata(1, () => getdata(2, () => getdata(3)));