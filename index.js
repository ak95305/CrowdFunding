//Elments Selection
let bookmarkBtn = document.querySelector("#bookmarkbtn");
let bookmarkBtnText = document.querySelector("#bookmarkbtn p");
let bookmarkLogoCircle = document.querySelector("#bookmarkbtn svg circle");
let bookmarkLogoPath = document.querySelector("#bookmarkbtn svg path");
let optionBox = document.querySelectorAll(".menu-intro");
let expandOption = document.querySelectorAll(".pledge-continue");
let crossBtn = document.querySelector(".fa-times");
let blackScreen = document.querySelector("#black-screen");
let backBtn = document.querySelector("#back-btn");
let rewardBtn = document.querySelectorAll(".reward-btn");
let fundingMenu = document.querySelector("#funding-menu");
let blackBigScreen = document.querySelector("#black-big-screen");
let thankBox = document.querySelector("#thankyou-box");
let continueButton = document.querySelectorAll(".pledge-continue button");
let gotItButton = document.querySelector("#thankyou-box button");

//Event Handlers
bookmarkBtn.addEventListener("click", bookmarkFunction);
crossBtn.addEventListener("click", crossFunction);
backBtn.addEventListener("click", menuFunction);
gotItButton.addEventListener("click", gotItFunction);


//Function
status = "OFF"
function bookmarkFunction(){
    if(status === "OFF"){
    bookmarkBtnText.style.color = "hsl(176, 72%, 28%)";
    bookmarkLogoCircle.setAttribute("fill", "hsl(176, 72%, 28%)"); 
    bookmarkLogoPath.setAttribute("fill", "#fff");  
    status = "ON"; 
    } else{
        bookmarkBtnText.style.color = "hsl(0, 0%, 48%)";
    bookmarkLogoCircle.setAttribute("fill", "#2F2F2F"); 
    bookmarkLogoPath.setAttribute("fill", "#B1B1B1");  
    status = "OFF";
    }
}
for (let i = 0; i < optionBox.length; i++) {
    optionBox[i].addEventListener("click", expandFunction);   
    function expandFunction(){
        for (let j = 0; j < optionBox.length; j++) {
            if(i !== j){
                expandOption[j].style.display = "none";
            } 
            if(i==j){
                expandOption[i].style.display = "flex";
            }   
        }
    }
}

for (let i = 0; i < rewardBtn.length; i++) {
    rewardBtn[i].addEventListener("click", menuFunction);
}

for (let i = 0; i < continueButton.length; i++) {
    continueButton[i].addEventListener("click", continueFunction);
}

function menuFunction() {
    fundingMenu.style.display = "grid";
    fundingMenu.style.zIndex = "999";
    blackBigScreen.style.display = "inline";
    blackBigScreen.style.zIndex = "888";
    blackBigScreen.style.backgroundColor = "#000";
    blackBigScreen.style.height = "100vw";
}

function crossFunction(){
    fundingMenu.style.display = "none";
    blackBigScreen.style.display = "none";
}

function continueFunction(){
    blackBigScreen.style.display = "inline";
    blackBigScreen.style.zIndex = "888";
    blackBigScreen.style.backgroundColor = "#000";
    blackBigScreen.style.height = "100vw";
    thankBox.style.display = "grid";
    fundingMenu.style.display = "none";
    thankBox.style.zIndex = "999";
}

function gotItFunction(){
    blackBigScreen.style.display = "none";
    thankBox.style.display = "none";
}