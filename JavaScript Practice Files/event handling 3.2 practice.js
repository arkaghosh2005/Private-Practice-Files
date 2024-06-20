//Button to toggle between light and dark mode
let modebtn = document.querySelector("#Toggler");
let body = document.querySelector("body")
let current = "light";
modebtn.addEventListener("click", () => {
    if(current === "light")
    {
        current = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
       current = "light";
       body.classList.add("light");
       body.classList.remove("dark");

    }
    console.log(current);
})