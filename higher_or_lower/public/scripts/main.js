const cardOutput = document.getElementById("cardName");
const cardNum = document.getElementById("cardNum");
//card image slots
const cardImg1 = document.getElementById("cardImage1");
const cardImg2 = document.getElementById("cardImage2");
const cardImg3 = document.getElementById("cardImage3");
const cardImg4 = document.getElementById("cardImage4");
const cardImg5 = document.getElementById("cardImage5");
const cardImg6 = document.getElementById("cardImage6");
const cardImg7 = document.getElementById("cardImage7");
const cardImg8 = document.getElementById("cardImage8");
//start, higher, lower buttons.
const startBtn = document.getElementById("start");
const higherBtn = document.getElementById("higher");
const lowerBtn = document.getElementById("lower");
//click event on start, higher and lower buttons.
higherBtn.addEventListener("click", higher);
lowerBtn.addEventListener("click", lower);
startBtn.addEventListener("click", start);

disablePlay();

//number of cards in a full pack, used for calculations.
let number = 52;

//each card has a value within its suit of 1-13 but is also numbered to match the images.
let cards = 
//hearts     
{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,
//spades          
14:1,15:2,16:3,17:4,18:5,19:6,20:7,21:8,22:9,23:10,24:11,25:12,26:13,
//diamonds         
27:1,28:2,29:3,30:4,31:5,32:6,33:7,34:8,35:9,36:10,37:11,38:12,39:13,
//clubs  
40:1,41:2,42:3,43:4,44:5,45:6,46:7,47:8,48:9,49:10,50:11,51:12,52:13};

//placeholder for higher button selected
let higherP;

//placeholder for lower button selected
let lowerP;

//at 8 turns the game is won.
let turnCount = 0;

//at 0 lives the game is lost.
let lives = 1;

//place for curent card to be stored to decide whether next card is higher or lower
let oldCard;
//place for new card to be stored to decide whether next card is higher or lower
let newCard;

//list of cards already drawn.
let drawnCards = [];

//draws a card from a full pack and enters drawn card into a new dictionary to avoid the same card appearing twice.
function card_pick(){

    let card = Math.floor(Math.random() * number) + 1;

    //checks to see if the card has been drawn before, if so it re draws a card.
    if (drawnCards.includes(card)){
        card_pick();
    }
    else{
    newCard = cards[card];

    if(newCard > oldCard){
        if(higherP == false){
            cardOutput.innerText = "you picked lower, new card higher than old card you lose";
            lives = 0;
        }
    }
        else if(newCard < oldCard){
            if(lowerP == false){
                cardOutput.innerText = "you picked higher, new card lower than old card you lose";
                lives = 0;
            }
        }
        else if(newCard == oldCard){
            cardOutput.innerText = "new card is the same value as the old card, you lose";
            lives = 0;
        }

    turnCount ++;
    drawnCards.push(card);

    if (turnCount == 1){
        cardImg1.setAttribute("src", "public/images/" + card + ".jpg");
        }
        else if (turnCount == 2){
            cardImg2.setAttribute("src", "public/images/" + card + ".jpg");
        }
        else if (turnCount == 3){
            cardImg3.setAttribute("src", "public/images/" + card + ".jpg");
        }
        else if (turnCount == 4){
            cardImg4.setAttribute("src", "public/images/" + card + ".jpg");
        }
        else if (turnCount == 5){
            cardImg5.setAttribute("src", "public/images/" + card + ".jpg");
        }
        else if (turnCount == 6){
            cardImg6.setAttribute("src", "public/images/" + card + ".jpg");
        }
        else if (turnCount == 7){
            cardImg7.setAttribute("src", "public/images/" + card + ".jpg");
        }
        else if (turnCount == 8){
            cardImg8.setAttribute("src", "public/images/" + card + ".jpg");
        }

        if (turnCount==8) {
            win();
            disablePlay();
            document.getElementById("start").disabled = false;
        }

        if(lives == 0){
            endGame();
        }

        oldCard = cards[card];


    }
}

function disablePlay(){
    document.getElementById("higher").disabled = true;
    document.getElementById("lower").disabled = true;
    document.getElementById("start").disabled = false;
}

function enablePlay(){
    document.getElementById("higher").disabled = false;
    document.getElementById("lower").disabled = false;
}

function win(){
    cardOutput.innerText = "You Win!";
}

function start(){
    newGame();
    enablePlay();
    card_pick();
    document.getElementById("start").disabled = true;
}

function higher(){
    higherP = true;
    lowerP = false;
    card_pick();
}

function lower(){
    higherP = false;
    lowerP = true;
    card_pick();
}

function newGame(){
    cardImg1.setAttribute("src", "public/images/back.jpg");
    cardImg2.setAttribute("src", "public/images/back.jpg");
    cardImg3.setAttribute("src", "public/images/back.jpg");
    cardImg4.setAttribute("src", "public/images/back.jpg");
    cardImg5.setAttribute("src", "public/images/back.jpg");
    cardImg6.setAttribute("src", "public/images/back.jpg");
    cardImg7.setAttribute("src", "public/images/back.jpg");
    cardImg8.setAttribute("src", "public/images/back.jpg");
    oldCard = undefined;
    newCard = undefined;
    turnCount = 0;
    lives = 1;
    cardOutput.innerText = "";
    drawnCards = [];
}

function endGame(){
    disablePlay();
}