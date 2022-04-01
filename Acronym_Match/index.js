const containerBody = document.getElementById("container-body");
const header = document.getElementById("header");
//containerBody.style.backgroundColor = "lightgreen";
const container = document.getElementById("container");

let acronyms = {
  DNS: "DOMAIN NAME SYSTEM",
  IP: "INTERNET PROTOCOL",
  DHCP: "DYNAMIC HOST CONFIGURATION PROTOCOL",
  POP: "POST OFFICE PROTOCOL",
  IMAP: "INTERNET MESSAGE ACCESS PROTOCOL",
  SMTP: "SIMPLE MAIL TRANSFER PROTOCOL",
};

let noOfItems = Object.keys(acronyms).length;
let acronym = document.createElement("acronym");
header.appendChild(acronym);
let acronymKey = "";
let acronymValue = "";
let usedNumber = [];

playGame();
createBoard();

function playGame() {
  acronym.textContent = randomAcronym();
}

function createBoard() {
  for (let i = 0; i < noOfItems; i++) {
    let item = document.createElement("item");
    containerBody.appendChild(item);
    item.textContent = Object.values(acronyms)[i];
  }
}

function newNumber() {
  let newNum = false;
  let number = randomValue();

  while (newNum === false && usedNumber.length < noOfItems) {
    console.log(number);
    if (usedNumber.includes(number)) {
      number = randomValue();
    } else {
      usedNumber.push(number);
      newNum = true;
    }
  }
  return number;
}

function randomValue() {
  const value = Math.floor(Math.random() * noOfItems);
  return value;
}

function randomAcronym() {
  let number = newNumber();
  acronymKey = Object.keys(acronyms)[number];
  console.log(Object.values(acronyms)[number]);
  acronymValue = Object.values(acronyms)[number];

  return acronymKey;
}

const buttons = document.querySelectorAll("item");
for (const button of buttons) {
  button.addEventListener("click", function () {
    if (button.textContent === acronymValue) {
      button.textContent = "WELL DONE";
      this.classList.add("correct");
      this.style.color = "purple";
      playGame();
    } else {
      button.textContent = "FAIL";
    }
  });
}
// const buttons = document.querySelectorAll("item");
// for (const button of buttons) {
//   button.addEventListener("click", colorize);
// }
