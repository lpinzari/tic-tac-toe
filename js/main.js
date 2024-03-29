/**
* Copyright (c) 2019
* @author Ludovico Pinzari
* @summary this javascript file contains the main program to start (init) and control the application
*   the gameController object is responsible to handle the interaction between the model.js
*   and view.js files. It also create the events listeners of the application.
*
* OBJECTS            EVENTS              OBJECTS
*-----------------------------------------------------------
* model.js           main.js              view.js
*   - player      menuHandler               - menu
*   - game        gridHandler               - board
*                 modalVictoryHandler       - modalVictory
*                                           - panel
* ----------------------------------------------------------
*/


const gameController = {

  /*
   * FUNCTION ATTACHED TO THE MENU EVENT
   */

  play: function() {

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
    panel.renderCurrentPlayer(namePly1,menu.getSymbolClass(symbolPly1));
    menu.showGrid();

  },

  /*
   * FUNCTIONS ATTACHED TO THE GRID EVENTS
   */

  markCell: function(event) {

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
            let name = game.getPlayerTurn().getName();
            let symbol = game.getPlayerTurn().getSymbol();
            panel.renderCurrentPlayer(name,symbol);
          }

       }

  },

  restartGame: function() {

    location.reload();

  },

  /*
   * FUNCTIONS ATTACHED TO THE MODAL VICTORY EVENTS
   */

  startNewGame: function() {

    modalVictory.hide();
    location.reload();

  },

  exitGame: function() {

    modalVictory.hide();

  },

  /*
   * EVENT LISTENERS
   */

  menuHandler: function() {

    $('#symbol1').on('change', menu.updateSymbols);
    $('#symbol2').on('change', menu.updateSymbols);
    $('#playgame').on('click', this.play);

  },

  gridHandler: function() {

    $('.grid').on('click', this.markCell);
    $('.restart').on('click',this.restartGame);

  },

  modalVictoryHandler: function() {

    $('#ok-Button').on('click',this.startNewGame);
    $('#no-Button').on('click',this.exitGame);

  },

  /*
   * INITIALIZATION
   */

  init: function() {

    this.menuHandler();
    this.gridHandler();
    this.modalVictoryHandler();

  }

};

gameController.init();
