

$('#symbol1').on('change', menu.updateSymbols);
$('#symbol2').on('change', menu.updateSymbols);
$('#playgame').on('click', play);


function play() {

  let symbolPly1 = menu.getSymbolPly1();
  let symbolPly2 = menu.getSymbolPly2();
  let namePly1 = menu.getNamePly1();
  let namePly2 = menu.getNamePly2();

  if (namePly1 === "") {
    namePly1 = "Player1";
  }

  if (namePly2 === "") {
    namePly2 = "Player2";
  }

  const player1 = player(namePly1,menu.getSymbolClass(symbolPly1));
  const player2 = player(namePly2,menu.getSymbolClass(symbolPly2));

  game.addPlayer(player1);
  game.addPlayer(player2);
  game.setTurn(0);

  menu.hide();
  menu.showPanel();
  menu.showGrid();

}


//=========== VIEW ======================//

// function displayResult() {
//
//     modal.style.display = 'block';
//     result.style.display = 'block';
//
//     finalText = 'Do you want to start a New Game? ';
//     if (game.hasWinner()) {
//       h1Res.innerHTML = 'Congratulations!';
//       let name = game.getPlayerTurn().getName();
//       pRes.innerHTML = `${name} won the game <br> ${finalText}`;
//     } else {
//       h1Res.innerHTML = 'Challenging!';
//       pRes.innerHTML = `There is no winner <br> ${finalText}`;
//     }
// }


/********************************************
 *         Click Event Listener              *
 *********************************************/

$('.grid').on('click', markCell);
$('.restart').on('click',restartGame);
$('#ok-Button').on('click',startNewGame);
$('#no-Button').on('click',exitGame);


function isEmptyCell(event){

    let element = event.target;
    let classes = element.classList;

     if (classes.contains('cell') && classes.length == 1)
        return true;

    return false;
}

function renderCell(cell) {


    cell.classList.add('show', 'marked');
    if ( game.getTurn() === 0 ) {
      cell.classList.add('color1');
    } else {
      cell.classList.add('color2');
    }

    let symbol = game.getPlayerTurn().getSymbol();
    cell.innerHTML=`<i class="${symbol}"></i>`;


}

function markCell(event) {

    // See if the element clicked is an empty cell
    if (isEmptyCell(event)){

        var cell = event.target;
        let value = cell.innerText;

        game.getPlayerTurn().addMove(value);
        renderCell(cell);
        if (game.isOver()) {

          modalVictory.displayResult(game.hasWinner());
        } else {
          game.switchTurn();
        }

     }

}

/**
* @desc close the pop up screen and reload the page
*/
function startNewGame () {

    modalVictory.hide();
    location.reload();

}

/**
* @desc close the pop up screen
*/
function exitGame () {

    modalVictory.hide();
}

// reload the page
function restartGame() {

    location.reload();

}
