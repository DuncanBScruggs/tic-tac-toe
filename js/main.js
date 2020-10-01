var turn = true;
var count = 0;


// 5d tic tac toe win the game in the square to win the square

function view() {

    var main = document.getElementById("main"); 
    // creates container
    var container = document.createElement("div");
    container.setAttribute("class","container");
    // creates row
    var row = document.createElement("div");
    row.setAttribute("class","row");
    // creates header
    var header = document.createElement("div");
    header.setAttribute("class", "col-12 text-center");
    // header text
    // h1 and append to header
    var h1 = document.createElement("H1");
    h1.setAttribute("class", "");
    var h1t = document.createTextNode("Tic Tac Toe");
    h1.appendChild(h1t);
    header.appendChild(h1);
    // h2 and append to header
    var h2 = document.createElement("H2");
    h2.setAttribute("class", "");
    var h2t = document.createTextNode("X Goes First");
    h2.appendChild(h2t);
    header.appendChild(h2);
    // append header to row
    row.appendChild(header);

    for (var i = 0; i < 9; i++) {
        console.log(i);
        var col = document.createElement("div");
        col.setAttribute("class","col-4 text-center border border-dark");
        col.setAttribute("id",i);
        var p = document.createElement("P");
        // p.setAttribute("class", "")
        // var t = document.createTextNode("");
        // p.appendChild(t);
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
        document.getElementById(target).childNodes[0].innerHTML = "X";
    }
    else {
        document.getElementById(target).childNodes[0].innerHTML = "O";
    }
    document.getElementById(target).removeEventListener("click", mark);
    count++;
    console.log("count" + count)
    if (count >= 5){
        winConditions();
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

    var winarr = [
        [col0,col1,col2],
        [col3,col4,col5],
        [col6,col7,col8],
        [col0,col3,col6],
        [col1,col4,col7],
        [col2,col5,col8],
        [col0,col4,col8],
        [col2,col4,col6]
    ]

    for(var i = 0; i < winarr.length-1; i++){
        console.log("row "+ i );
        console.log("c0 "+winarr[i][0]);
        console.log("c1 "+winarr[i][1]);
        console.log("c2 "+winarr[i][2]);
        // ONE
        // if(winarr[i][0] == winarr[i][1] && winarr[i][1] == winarr[i][2]){
        //     alert(winarr[i][0] + " Wins!");
        //     return ifWin();
        // }
        // TWO
        if(winarr[i][0] == "X" && winarr[i][1] == "X" && winarr[i][2] == "X"){
            alert(winarr[i][0] + " Wins!");
            return ifWin();
        }
        if(winarr[i][0] == "O" && winarr[i][1] == "O" && winarr[i][2] == "O"){
            alert(winarr[i][0] + " Wins!");
            return ifWin();
        }
        else if(count == 9){
            alert(" NO ONE WINS!");
            return ifWin();
        }
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
    turn = true;
    count = 0;

    view();
}

function init(){

    

    view();

};

init();