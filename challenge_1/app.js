// Counter to keep track of total turns.
var counter = 0;

// Create a Board to Help us check for Conflicts.
var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

var resetBoard = function () {
  var filledSquare = document.getElementsByClassName("0");
  for( var i = 0; i < filledSquare.length; i++) {
    filledSquare[i].innerHTML = '';
  }
  var filledSquare = document.getElementsByClassName("1");
  for( var i = 0; i < filledSquare.length; i++) {
    filledSquare[i].innerHTML = '';
  }
  var filledSquare = document.getElementsByClassName("2");
  for( var i = 0; i < filledSquare.length; i++) {
    filledSquare[i].innerHTML = '';
  }
  counter = 0;
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

}

//If our board is full, game is a draw
var countCheck = function() {
  if (counter === 9) {
    alert('Tie Game!')
    resetBoard()
  }
};

//SETTING OUR ONCLICK FOR EACH SQUARE
var squares = document.getElementsByClassName("board")

for (var i = 0; i < squares.length; i++) {

  squares[i].onclick = function(event) {
    squareClicked();
    countCheck();
  }
};


//THE FUNCTION THAT IS ACTUALLY EXECUTED UPON A CLICK.

var squareClicked = function(square) {

  if (event.target.innerHTML === "") {
    event.target.innerHTML = xORO();
    updateBoard()
    findAWinner()

  }
};





var xORO = function() {
  if (counter % 2 === 0) {
    counter++
    return 'X'
  } else {
    counter++
    return 'O'
  }
};

//UPDATE OUR BOARD TO REFLECT BOARD ON HTML PAGE

var updateBoard = function() {
  var row = event.target.className;
  var column = event.target.id;
  board[row][column] = event.target.innerHTML;
}


//FUNCTION THAT CONTAINS OUR VERTICAL / HORIZONTAL / AND DIAG WINNING COMBOS

var findAWinner = function() {
  var row = event.target.className;
  var column = event.target.id;
  var horizontalCounter = '';
  var verticalCounter = '';
  var diagonalCounter = '';

// INNER FUNCTION THAT CHECKS FOR A VERTICAL WIN

  var verticalWinCheck = function() {

    for (var i = 0; i <board.length; i++) {
      verticalCounter += board[i][column];

      if(verticalCounter === 'XXX'|| verticalCounter === 'OOO') {
        alert("We Have A Winner!")
       }
    }

  }

  //INNER FUNCTION THAT CHECKS FOR A HORIZONTAL WIN

  var horizontalWinCheck = function() {
    for (var i = 0; i < board[row].length; i++) {
      horizontalCounter += board[row][i];

       if(horizontalCounter === 'XXX'|| horizontalCounter === 'OOO') {
        alert("We Have A Winner!")
       }

    }
  }

  // DIAGONAL CHECKER - ONLY NEEDED TO RUN IF CORNERS ARE BEING USED UP

  var diagonalCheck = function() {
    if( board[0][0] + board[1][1] + board[2][2] === 'XXX' || board[0][0] + board[1][1] + board[2][2] === 'OOO') {
      alert("We Have A Winner")
    }
    if( board[0][2] + board[1][1] + board[2][0] === 'XXX' || board[0][2] + board[1][1] + board[2][0] === 'OOO') {
      alert("We Have A Winner")

    }
  }
  horizontalWinCheck()
  verticalWinCheck()
  diagonalCheck()

}
//write our function that responds to a click
// will need to check whose turn it is and respond with either an X or a O in the desired square
// Will then need to run out below functions to see if there is a win, tie, or draw
// Will need to handle the case that you click on an already Occupied space.

// Will need write a few functions
// check for winner. similar to our confilct code from nqueens, we can chec kt osee if we have 3 in a row.
// this check must run vertically, horizontally, and diagonally
//if win - alert and restart

//check if we have a draw
// what constitutes a draw. check spaces left?
// if draw - alert and restart


// include a button on our page that allows us to refresh the table at any point in time.