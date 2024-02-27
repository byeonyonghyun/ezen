const buttons = document.querySelectorAll("button");
const result = ["가위", "바위", "보"];
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".user-choice");
const winner = document.querySelector(".result");


const game = (user, computer) => {
  if (user === computer) {
    let messege = "무승부"
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        messege = "사"
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        break;
    }
  }
}

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
})