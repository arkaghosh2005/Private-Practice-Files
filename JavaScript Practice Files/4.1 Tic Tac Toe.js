let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true; //player O
let count = 0;


const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];


const resetgame = () => {
    turnX = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    resetbtn.style.display = "inline";
    count = 0;
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        };
        box.disabled = true;
        count++;
        checkwinner();
    })
});


const disableboxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
};
const enableboxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showwinner = (win) => {
    msg.innerText = `Congratulations! Winner is ${win}!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    resetbtn.style.display = "none";
};
const draw = () => {
    if (count == 9){
        msg.innerText = "It's a Draw! No winners this time!";
        msgcontainer.classList.remove("hide");
        resetbtn.style.display = "none";
    }
};
const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos1val !="" && pos1val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                showwinner(pos1val);
            }
        }
    }
    draw();
};