let btns = document.querySelectorAll(".btn"); //Consider all buttons
let resetbtn = document.querySelector(".reset_btn"); //Consider reset buttons
let newbtn = document.querySelector(".new_btn"); //Consider  newgame buttons
let msg = document.querySelector("#msg"); //winning msg
let msgcontn = document.querySelector(".msg_container"); //winning msg container
let turnx = true; //Player'o' Player'x'
resetbtn.disabled = false;

const winptns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]; //Winning Patterns

//On Clicking a Btn......
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnx) {
      btn.innerText = "X";
      turnx = false;
    } else {
      btn.innerText = "O";
      turnx = true;
    }
    btn.disabled = true;
    checkwinner();
  });
});

//disable the btn .....
const disablebtn = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

//enable the btn ....
const enablebtn = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

//On winning the Game.....
const showwinner = (winner) => {
  msg.innerText = `CONGO!! WINNER IS ${winner}`;
  msgcontn.classList.remove("hide");
  resetbtn.disabled = true;
  disablebtn();
};

//Work of Reset Btn .....
const reset_btn = () => {
  msgcontn.classList.add("hide");
  enablebtn();
};

//Check the winner .....
const checkwinner = () => {
  for (let pattern of winptns) {
    let pos1val = btns[pattern[0]].innerText;
    let pos2val = btns[pattern[1]].innerText;
    let pos3val = btns[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
    }
  }
};

resetbtn.addEventListener("click", reset_btn); //Clicking on reset btn ...
newbtn.addEventListener("click", reset_btn); //Clicking on New Btn ....
