let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



//General Random Computer Choice Generation Function
const gencompchoice = () => {
    //Array for all the possible choices
    const opt = ["rock","paper","scissors"];
    //Math.floor() takes the integer value before the actual number provided
    //Math.random() Value ranges from 0 to 1
    //num should be always +1 than the required range
    num = 3;
    const randidx = Math.floor( Math.random() * num );
    //Returning statement to return the choice of computer
    return opt[randidx];
};



const drawgame = () => {
    msg.innerText = "Game was Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! As your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose. As ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    //Fetches Computer Choice
    const compchoice = gencompchoice();

    if(userchoice == compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice == "rock"){
            //If comp = paper, then user lose comp win
            //If comp = scissors, then user win comp lose
            userwin = (compchoice == "paper" ? false : true );
        }
        else if(userchoice == "paper"){
            //If comp = scissors, then user lose comp win
            //If comp = rock, then user win comp lose
            userwin = (compchoice == "scissors" ? false : true );
        }
        else{
            //If comp = rock, then user lose comp win
            //If comp = paper, then user win comp lose
            userwin = (compchoice == "rock" ? false : true );
        }
        showwinner(userwin,userchoice,compchoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});