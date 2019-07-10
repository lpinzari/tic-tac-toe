//============== MODEL ====================//

/* function: player
 *
 * Description.
 *  player is a factory function to produce an object that models a player
 *
 * object instances Properties.
 *  name {string} The player's name
 *  moves {array} An array of characters repesenting the cell's id of the move
 *  symbol {string} A string representing the symbol's class for the CSS (fonteAwsome)
 *
 * object instances Methods.
 *  General
 *   matchMoves(moves):
 *   - moves: An array of characters representing a set of cell's id
 *   return: A boolean value indicating if this object has executed the input moves
*/


// const player = function (name, symbol) {
//
//   return {
//
//     name: name,
//     moves: [],
//     symbol: symbol,
//
//     getName: function() {
//       return this.name;
//     },
//
//     getMoves: function() {
//       return this.moves;
//     },
//
//     getSymbol: function() {
//       return this.symbol;
//     },
//
//     addMove: function(cellId) {
//       this.moves.push(cellId);
//     },
//
//     matchMoves: function(moves) {
//       let matchedMoves = 0;
//       for(let i = 0; i < moves.length; i++) {
//         if (this.moves.includes(moves[i])) {
//           matchedMoves += 1;
//         }
//       }
//       if (matchedMoves === moves.length) {
//         return true;
//       } else {
//         return false;
//       }
//     },
//
//     resetMoves: function() {
//       for(let i = 0; i < moves.lenght; i++) {
//         moves.pop();
//       }
//     }
//
//   };//end return
// };//end Factory function

/* object: game
 *
 * Description.
 *  game is a singleton object representing an entity to model a Tic Tac Toe game.
 *  The game is played on a grid that's 3 squares by 3 squares.
 *
 * object Properties.
 *  game.players {array} An array of players objects (see player factory function). (length is 2)
 *  game.turn {integer} An index (0 or 1) to access the current player in the players array.
 *  game.dimension {integer} A number indicating the number of cells in the grid
 *  game.winningMoves {array of array} The elements in the array represent the winning combinations
 *  game.winner {array} An array containing the winner of the game.
 *
 * object Methods.
 *  Accessor
 *  - getPlayerTurn(): returns the current player (object) in the game
 *  - getTurn(): returns an index to access the current player (object)
 *  - getTotalMoves(): returns the total number of moves made by the players in the game.
 *  Mutator
 *  - switchTurn(): Change the turn index value to the current player object.
 *  General
 *  - isOver(): returns a boolean value to indicate the end of the game.
*/

// const game = {
//
//   players: [],
//   turn: 0,
//   dimension: 9,
//   winningMoves: [["1","2","3"],
//                  ["4","5","6"],
//                  ["7","8","9"],
//                  ["1","5","9"],
//                  ["3","5","7"],
//                  ["1","4","7"],
//                  ["2","5","8"],
//                  ["3","6","9"]],
//   winner: [],
//
//   addPlayer: function (player) {
//     this.players.push(player);
//   },
//
//   setTurn: function (playerId) {
//     this.turn = playerId;
//   },
//
//   getPlayerTurn: function () {
//     return this.players[this.turn];
//   },
//
//   getTurn: function () {
//     return this.turn;
//   },
//
//   getTotalMoves: function () {
//     let totMovesPlayer1 = this.players[0].getMoves().length;
//     let totMovesPlayer2 = this.players[1].getMoves().length;
//     return totMovesPlayer1 + totMovesPlayer2;
//   },
//
//   switchTurn: function () {
//     if (this.turn === 0) {
//       this.turn = 1;
//     } else {
//       this.turn = 0;
//     }
//   },
//
//   isOver: function () {
//     if(this.getTotalMoves() <= this.dimension) {
//         let moves = this.players[this.turn];
//         for(let i = 0; i < this.winningMoves.length; i++) {
//           if (moves.matchMoves(this.winningMoves[i])) {
//             this.winner.push(this.players[this.turn]);
//             return true;
//           }
//         }
//         if (this.getTotalMoves() === this.dimension) {
//           return true;
//         }
//     }
//     return false;
//   }
//
// };

$('#symbol1').on('change', updateSymbols);
$('#symbol2').on('change', updateSymbols);
$('#playgame').on('click', play);


function updateSymbols() {

  let symbol1 = $('#symbol1').val();
  let icon1 = $('.icon')[0];

  if (symbol1 === "cross") {
    icon1.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
  } else if(symbol1 === "circle") {
    icon1.innerHTML = '<i class="fas fa-circle" aria-hidden="true"></i>';
  } else if(symbol1 === "star") {
    icon1.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
  }

  let symbol2 = $('#symbol2').val();
  let icon2 = $('.icon')[1];

  if (symbol2 === "cross") {
    icon2.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
  } else if(symbol2 === "circle") {
    icon2.innerHTML = '<i class="fas fa-circle" aria-hidden="true"></i>';
  } else if(symbol2 === "star") {
    icon2.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
  }

}

function getSymbolClass(symbol) {

  if (symbol === "cross") {
    return "fas fa-times";
  } else if (symbol === "circle") {
    return "fas fa-circle";
  } else if (symbol === "star") {
    return "fas fa-star";
  }
}


function play() {

  let symbol1 = $('#symbol1').val();
  let symbol2 = $('#symbol2').val();
  let namePly1 = $('#player1').val();
  let namePly2 = $('#player2').val();

  if (namePly1 === "") {
    namePly1 = "Player1";
  }

  if (namePly2 === "") {
    namePly2 = "Player2";
  }

  const player1 = player(namePly1,getSymbolClass(symbol1));
  const player2 = player(namePly2,getSymbolClass(symbol2));

  game.addPlayer(player1);
  game.addPlayer(player2);
  game.setTurn(0);

  $('.menu').hide();

  $('.panel').css('visibility','visible');
  $('.grid').css('visibility','visible');

}


//=========== VIEW ======================//

function displayResult() {

    modal.style.display = 'block';
    result.style.display = 'block';

    finalText = 'Do you want to start a New Game? ';
    if (game.winner.length ===1) {
      h1Res.innerHTML = 'Congratulations!';
      let name = game.getPlayerTurn().getName();
      pRes.innerHTML = `${name} won the game <br> ${finalText}`;
    } else {
      h1Res.innerHTML = 'Challenging!';
      pRes.innerHTML = `There is no winner <br> ${finalText}`;
    }
}


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

function markCell(event){

    // See if the element clicked is an empty cell
    if (isEmptyCell(event)){

        var cell = event.target;
        let value = cell.innerText;

        game.getPlayerTurn().addMove(value);
        renderCell(cell);
        if (game.isOver()) {

          displayResult();
        } else {
          game.switchTurn();
        }

     }

}

/**
* @desc close the pop up screen and reload the page
*/
function startNewGame () {

    modal.style.display = 'none';
    result.style.display = 'none';
    location.reload();

}

/**
* @desc close the pop up screen
*/
function exitGame (){

    modal.style.display = 'none';
    result.style.display = 'none';
}

// reload the page
function restartGame(){

    location.reload();
}
