//TOPIC 4: Async Await (MOSTT IMPORTANT)
//async keyword in a function: Async function always returns a promise
//await keyword in async function: It pauses the execution of its surrounding async function until the promise is settled
async function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200); //Number 200 represents a successful api call    
        }, 8000);
    });
};

//Await must be used inside of an async function
async function getweatherdata() {
    await api(); //1st
    await api(); //2nd
};



//Example from Callback Hell using Async Await
function getasyawait(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data (Topic 3.2): ", dataid);
            resolve("Success (Topic 3.2)");
        }, 5000);
    });
};

async function getalldata() {
    console.log("Getting data 1");
    await getasyawait(1);
    console.log("Getting data 2");
    await getasyawait(2);
    console.log("Getting data 3");
    await getasyawait(3);
    console.log("Getting data 4");
    await getasyawait(4);
    console.log("Getting data 5");
    await getasyawait(5);
};





//TOPIC 5: IIFE (Immediately Invoked Function Expression)
//Definition: IIFE is a function that is called immediately as soon as it is defined
//In other words, Automatic execution of a function
//Syntax of IIFE 1: (function() {<code>}) ();
//Syntax of IIFE 2: (() => {<code>}) ();
//Syntax of IIFE 3: (async () => {<code>}) ();
(async function() {
    console.log("Getting IIFE data 1");
    await getasyawait(1);
    console.log("Getting IIFE data 2");
    await getasyawait(2);
    console.log("Getting IIFE data 3");
    await getasyawait(3);
}) ();