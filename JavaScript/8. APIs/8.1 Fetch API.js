//API: Application Programming Interface
//Free APIs Link: free-apis.github.io/#/browse
//AJAX: Asynchronous JS & XML
//AJAJ: Asynchronous JS & JavaScript
//JSON: JavaScript Object Notation
//json() method: Returns a second promise that resolves with the result of parsing the response body text as JSON

//TOPIC 1: Fetch API
//Definition: It provides an interface for fetching (sending / recieving) resources
//It uses Request and Response objects
///The fetch() method is used to fetch a resource (data)
//Syntax: fetch(url, [options])
const urldog = "https://dogapi.dog/api/v2/facts";
const urlcat = 'https://meowfacts.herokuapp.com/';
const factparadog = document.querySelector("#fact1");
const fbtndog = document.querySelector("#factbtn1");
const factparacat = document.querySelector("#fact2");
const fbtncat = document.querySelector("#factbtn2");

//API Call using Async Await
const getfacts = async () => {
    let response = await fetch(urldog);
    console.log(response); //JSON Format
    let data = await response.json();
    factparadog.innerText = data.data[0].attributes.body;
};

function getpromfacts () {
    fetch(urlcat).then((response) => {
        return response.json();
    }).then((data) => {
        factparacat.innerText = data.data[0];
    });
};

fbtndog.addEventListener("click", getfacts);
fbtncat.addEventListener("click", getpromfacts);