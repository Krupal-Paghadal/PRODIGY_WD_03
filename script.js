let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let t = 'X'
let gameover1 = false

const changeTurn = () => {
    return t === 'X' ? '0' : 'X'
}

// function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== ''))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameover1 = true;
            // gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100px"
        }
    })
}

// Game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = t;
            t = changeTurn();
            turn.play();
            checkWin();
            if (!gameover1) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + t;
            }
        }
    })
})

//reset
let reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    clear()
})

let clear = () => {
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        boxtext.innerText = '';
    });
    t = 'X';
    gameover1 = false;
    document.querySelector('.info').innerText = "Turn for " + t;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
}

