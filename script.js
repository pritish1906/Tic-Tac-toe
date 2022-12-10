console.log("welcome to MyTicTacToe");


// let music = new Audio("music.mp3");
// let ting = new Audio("ting.mp3");
// let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//Function to change turn 
const changeTurn = () => {
    turn === "X" ? turn="0" : turn="X";

}


//function to chech a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach((e)=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&
        (boxtext[e[0]].innerText !=="")){

            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '10px';
            setTimeout(resettingTheGame, 3000);
        }

    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((Element) =>{
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener('click',()=>{
        if((boxtext.innerText === '')&&(!isgameover)){
            boxtext.innerText = turn;
            changeTurn();
            // ting.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })

})


function resettingTheGame(){
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}

reset.addEventListener('click', resettingTheGame);




