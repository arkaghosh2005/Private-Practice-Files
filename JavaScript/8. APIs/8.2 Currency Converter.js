//Refer to the new api from fawazahmed0
const exchange_url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

const dropdownsel = document.querySelectorAll(".dropdown select");
const exchangebtn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const exchangebox = document.querySelector(".msg1");
const datebox = document.querySelector(".msg2");

for(let select of dropdownsel) {
    for(code in countryList) {
        let newopt = document.createElement("option");
        newopt.innerText = code;
        newopt.value = code;
        if(select.name == 'from' && code == 'USD') {
            newopt.selected = 'selected';
        } else if(select.name == 'to' && code == 'INR') {
            newopt.selected = 'selected';
        }
        select.append(newopt);
    };
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
};

const updateFlag = (element) => {
    currencycode = element.value;
    let countrycode = countryList[currencycode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    element.parentElement.querySelector("img").src = newsrc;
};

exchangebtn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amntval = amount.value;
    if(amntval == "" || amntval <=0) {
        alert("Enter a Valid Amount!");
    };

    const req_url = `${exchange_url}/${fromcurr.value.toLowerCase()}.json`;
    let response = await fetch(req_url);
    let data = await response.json();
    let allexchangevalues = data[fromcurr.value.toLowerCase()];
    let rate = allexchangevalues[tocurr.value.toLowerCase()];
    let date = data.date;
    let exchangeval = amntval * rate;
    datebox.innerText = `Exchange Rates as of ${date}`
    exchangebox.innerText = `${amntval} ${fromcurr.value} = ${exchangeval} ${tocurr.value}`
});