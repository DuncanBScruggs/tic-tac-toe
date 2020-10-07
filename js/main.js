var turn = true;
var count = 0;
var xWin = 0;
var oWin = 0;
var goFirst = "X goes first";


// 5d tic tac toe win the game in the square to win the square

function view() {

    var main = document.getElementById("main");
    // creates container
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    // creates row
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    // creates header
    var header = document.createElement("div");
    header.setAttribute("class", "col-12 text-center mb-5");
    // header text
    // h1 and append to header
    var h1 = document.createElement("H1");
    h1.setAttribute("class", "");
    var h1t = document.createTextNode("Tic Tac Toe");
    h1.appendChild(h1t);
    header.appendChild(h1);
    // h2 and append to header
    var h5 = document.createElement("H5");
    h5.setAttribute("class", "");
    var h5t = document.createTextNode(goFirst);
    h5.appendChild(h5t);
    header.appendChild(h5);
    // X Wins
    var h4 = document.createElement("H4");
    h4.setAttribute("class", "");
    var h4t = document.createTextNode("X Wins: " + xWin);
    h4.appendChild(h4t);
    header.appendChild(h4);
    // O Wins
    var h42 = document.createElement("H4");
    h42.setAttribute("class", "");
    var h42t = document.createTextNode("O Wins: " + oWin);
    h42.appendChild(h42t);
    header.appendChild(h42);
    // append header to row
    row.appendChild(header);

    for (var i = 0; i < 9; i++) {
        console.log(i);
        var col = document.createElement("div");
        col.setAttribute("class", "col-4 text-center border border-dark");
        col.setAttribute("id", i);
        var p = document.createElement("P");
        col.appendChild(p);
        col.addEventListener("click", mark);
        row.appendChild(col);
    }
    container.appendChild(row);
    main.appendChild(container);
}


// mark puts either X or O depending on the turn into the targeted col
function mark(e) {
    var target = e.target.id;
    console.log(e.target.id)
    if (turnHandler() == false) {
        document.getElementById(target).childNodes[0].innerHTML = "X";
    } else {
        document.getElementById(target).childNodes[0].innerHTML = "O";
    }
    document.getElementById(target).removeEventListener("click", mark);
    count++;
    console.log("count" + count)
    if (count >= 5) {
        winConditions();
    }
}


// handles the turn can refactor into mark
function turnHandler() {
    if (turn == true) {
        return turn = false;
    } else {
        return turn = true;
    }
}


// checks if either player has met a win condition and if not calls a draw
function winConditions() {

    // loop to build an array from marks on board
    var col = [];
    for (var i = 0; i < 9; i++) {
        col[i] = document.getElementById(i).childNodes[0].textContent;
    }
    //console.log(col);

    // array of winning conditions
    var winarr = [
        [col[0], col[1], col[2]],
        [col[3], col[4], col[5]],
        [col[6], col[7], col[8]],
        [col[0], col[3], col[6]],
        [col[1], col[4], col[7]],
        [col[2], col[5], col[8]],
        [col[0], col[4], col[8]],
        [col[2], col[4], col[6]]
    ]

    for (var i = 0; i < winarr.length; i++) {
        console.log("row " + i);
        console.log("c0 " + winarr[i][0]);
        console.log("c1 " + winarr[i][1]);
        console.log("c2 " + winarr[i][2]);

        // ONE
        // if(winarr[i][0] == winarr[i][1] && winarr[i][1] == winarr[i][2]){
        //     alert(winarr[i][0] + " Wins!");
        //     return ifWin();
        // }

        // logic for checking for win conditions
        if (winarr[i][0] == "X" && winarr[i][1] == "X" && winarr[i][2] == "X") {
            xWin++;
            alert(winarr[i][0] + " Wins!");
            turn = true;
            goFirst = "X goes first";
            return ifWin();
        }
        if (winarr[i][0] == "O" && winarr[i][1] == "O" && winarr[i][2] == "O") {
            oWin++;
            alert(winarr[i][0] + " Wins!");
            turn = false;
            goFirst = "O goes first";
            return ifWin();
        } else if (count == 9) {
            alert(" NO ONE WINS!");
            if (turn) {
                turn = false;
            } else {
                turn = true;
            }
            return ifWin();
        }
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function flier(){
    document.getElementById("fly").setAttribute("src","img/JamesWillems.png")
}

function ifWin() {

    for (var i = 0; i < 9; i++) {
        document.getElementById(i).removeEventListener("click", mark);
    }

    const main = document.querySelector("#main");
    removeAllChildNodes(main);

    count = 0;

    view();
}

function init() {



    view();

};

init();