var turn = true;
var count = 0;


// 5d tic tac toe win the game in the square to win the square

function view() {

    var main = document.getElementById("main"); 
    // creates container
    var container = document.createElement("div");
    container.setAttribute("class","container");
    // creates
    var row = document.createElement("div");
    row.setAttribute("class","row");
    var header = document.createElement("div");
    header.setAttribute("class", "col-12 text-center");
    var h1 = document.createElement("H1");
    h1.setAttribute("class", "");
    var h1t = document.createTextNode("Tic Tac Toe");
    h1.appendChild(h1t);
    header.appendChild(h1);
    var h2 = document.createElement("H2");
    h2.setAttribute("class", "");
    var h2t = document.createTextNode("X Goes First");
    h2.appendChild(h2t);
    header.appendChild(h2);
    row.appendChild(header);

    for (var i = 0; i < 9; i++) {
        console.log(i);
        var col = document.createElement("div");
        col.setAttribute("class","col-4 text-center border border-dark");
        col.setAttribute("id",i);
        var p = document.createElement("P");
        p.setAttribute("class", "")
        var t = document.createTextNode(" ");
        p.appendChild(t);
        col.appendChild(p);
        col.addEventListener("click", mark);
        row.appendChild(col);
    }
    container.appendChild(row);
    main.appendChild(container);
}

function mark(e) {
    var target = e.target.id;
    console.log(e.target.id)
    if (turnHandler() == false) {
        document.getElementById(target).childNodes[0].innerHTML = " X ";
        document.getElementById(target).removeEventListener("click", mark);
        count++;
        if (count >= 5){
            winConditions();
        }
    }
    else {
        document.getElementById(target).childNodes[0].innerHTML = " O ";
        document.getElementById(target).removeEventListener("click", mark);
        count++;
        if (count >= 5){
            winConditions();
        }
    }
}

function turnHandler(){
    if (turn == true){
        return turn = false;
    }
    else {
        return turn = true;
    }
}

function winConditions() {
    var col0 = document.getElementById("0").childNodes[0].textContent;
    var col1 = document.getElementById("1").childNodes[0].textContent;
    var col2 = document.getElementById("2").childNodes[0].textContent;
    var col3 = document.getElementById("3").childNodes[0].textContent;
    var col4 = document.getElementById("4").childNodes[0].textContent;
    var col5 = document.getElementById("5").childNodes[0].textContent;
    var col6 = document.getElementById("6").childNodes[0].textContent;
    var col7 = document.getElementById("7").childNodes[0].textContent;
    var col8 = document.getElementById("8").childNodes[0].textContent;

    if (col0 == " X " && col1 == " X " && col2 == " X "){
        alert("X Wins!");
        ifWin();
    }
    if (col3 == " X " && col4 == " X " && col5 == " X "){
        alert("X Wins!");
        ifWin();
    }
    if (col6 == " X " && col7 == " X " && col8 == " X "){
        alert("X Wins!");
        ifWin();
    }
    if (col0 == " X " && col3 == " X " && col6 == " X "){
        alert("X Wins!");
        ifWin();
    }
    if (col1 == " X " && col4 == " X " && col7 == " X "){
        alert("X Wins!");
        ifWin();
    }
    if (col2 == " X " && col5 == " X " && col8 == " X "){
        alert("X Wins!");
        ifWin();
    }
    if (col0 == " X " && col4 == " X " && col8 == " X "){
        alert("X Wins!");
        ifWin();
    }
    if (col6 == " X " && col4 == " X " && col2 == " X "){
        alert("X Wins!");
        ifWin();
    }


    if (col0 == " O " && col1 == " O " && col2 == " O "){
        alert("O Wins!");
        ifWin();
    }
    if (col3 == " O " && col4 == " O " && col5 == " O "){
        alert("O Wins!");
        ifWin();
    }
    if (col6 == " O " && col7 == " O " && col8 == " O "){
        alert("O Wins!");
        ifWin();
    }
    if (col0 == " O " && col3 == " O " && col6 == " O "){
        alert("O Wins!");
        ifWin();
    }
    if (col1 == " O " && col4 == " O " && col7 == " O "){
        alert("O Wins!");
        ifWin();
    }
    if (col2 == " O " && col5 == " O " && col8 == " O "){
        alert("O Wins!");
        ifWin();
    }
    if (col0 == " O " && col4 == " O " && col8 == " O "){
        alert("O Wins!");
        ifWin();
    }
    if (col6 == " O " && col4 == " O " && col2 == " O "){
        alert("O Wins!");
        ifWin();
    }    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function ifWin(){
    document.getElementById("0").removeEventListener("click", mark);
    document.getElementById("1").removeEventListener("click", mark);
    document.getElementById("2").removeEventListener("click", mark);
    document.getElementById("3").removeEventListener("click", mark);
    document.getElementById("4").removeEventListener("click", mark);
    document.getElementById("5").removeEventListener("click", mark);
    document.getElementById("6").removeEventListener("click", mark);
    document.getElementById("7").removeEventListener("click", mark);
    document.getElementById("8").removeEventListener("click", mark);

    const main = document.querySelector("#main");
    removeAllChildNodes(main);

    view();
}

function init(){

    

    view();

};

init();