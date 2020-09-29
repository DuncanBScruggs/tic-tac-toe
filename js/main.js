let board;

const squares = Array.from(document.querySelectorAll("#board div"));

function init(){

    board = [
        "","","",
        "","","",
        "","",""
    ];
    render();
};

init();

function render() {
    board.forEach(function(mark, index){
    console.log(mark, index);

    squares[index].textContent = mark;
    });
};