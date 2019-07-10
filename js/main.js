

$('#symbol1').on('change', updateSymbols);
$('#symbol2').on('change', updateSymbols);
$('#playgame').on('click', play);


// function updateSymbols() {
//
//   let symbol1 = $('#symbol1').val();
//   let icon1 = $('.icon')[0];
//
//   if (symbol1 === "cross") {
//     icon1.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
//   } else if(symbol1 === "circle") {
//     icon1.innerHTML = '<i class="fas fa-circle" aria-hidden="true"></i>';
//   } else if(symbol1 === "star") {
//     icon1.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
//   }
//
//   let symbol2 = $('#symbol2').val();
//   let icon2 = $('.icon')[1];
//
//   if (symbol2 === "cross") {
//     icon2.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
//   } else if(symbol2 === "circle") {
//     icon2.innerHTML = '<i class="fas fa-circle" aria-hidden="true"></i>';
//   } else if(symbol2 === "star") {
//     icon2.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
//   }
//
// }
//
// function getSymbolClass(symbol) {
//
//   if (symbol === "cross") {
//     return "fas fa-times";
//   } else if (symbol === "circle") {
//     return "fas fa-circle";
//   } else if (symbol === "star") {
//     return "fas fa-star";
//   }
// }


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
