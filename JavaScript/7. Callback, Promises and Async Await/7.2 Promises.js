//TOPIC 3.1: Promises, A Solution to Callback Hell
//Definition: Used for Eventual completion of task
//It has 3 States: Pending, Fulfilled (Resolved) or Rejected
//If no handler, then pending state
//If resolve(<msg>) handler is used, then fulfilled state
//If reject(<msg>) handler is used, then rejected state
let promise = new Promise((resolve, reject) => {
    console.log("I am a Basic Promise!");
});

//When Promises are made by others, there are two possibilities
//If promise is fulfilled, then promise.then((res) => (<code>));
//If promise is rejected, then promise.catch((err) => (<code>));
const getpromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am Promise (Topic: 3.1)");
        resolve("Success (Topic: 3.1)"); //This message will get passed inside 'res' variable
    });
};

let prom = getpromise();
prom.then((res) => {
    console.log("Promise fulfilled ", res);
});





//TOPIC 3.2: Promise Chain for Async Data
//Promises are fetched in a sequential order
function asyncfun1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data 1");
            resolve("Success 1");
        }, 4000);
    });
};

function asyncfun2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data 2");
            resolve("Success 2");
        }, 4000);
    });
};

console.log("Fetching data 1...");
asyncfun1().then((res) => {
    console.log(res);
    console.log("Fetching data 2...");
    asyncfun2().then((res) => {
        console.log(res);
    });
});





//Example from Callback Hell using Promise Chain
function getpromchain(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data (Topic 3.2): ", dataid);
            resolve("Success (Topic 3.2)");
        }, 5000);
    });
};

//Actual Promise Chain Syntax: <function name>(<data1>).then((<parameter>) => { return <function name>(<data1>); }).then((<parameter>) => { return <function name>(<data2>); }).then((<parameter>) => { ... });
getpromchain(1).then(() => {
    return getpromchain(2);
}).then(() => {
    return getpromchain(3);
}).then((res) => {
    console.log("Completed Promise Chain:", res);
});