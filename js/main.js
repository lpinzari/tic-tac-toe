

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



/********************************************
 *         Click Event Listener              *
 *********************************************/

$('.grid').on('click', markCell);
$('.restart').on('click',restartGame);
$('#ok-Button').on('click',startNewGame);
$('#no-Button').on('click',exitGame);



function markCell(event) {

    // See if the element clicked is an empty cell
    if (board.isEmptyCell(event)){

        var cell = event.target;
        let value = cell.innerText;

        game.getPlayerTurn().addMove(value);

        let symbol = game.getPlayerTurn().getSymbol();
        board.renderCell(cell, symbol);

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
