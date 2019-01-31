// ********* GENERAL SETUP AND STRUCTURE FOR OUR PAGE & HOW IT WILL LOOK /RUN *************

// Counter to keep track of total turns.
var counter = 0;

// Create a Board to Help us check for Conflicts.
var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// Function to tell whether it is X or O turn
var xORO = function() {
  if (counter % 2 === 0) {
    counter++
    return 'X'
  } else {
    counter++
    return 'O'
  }
};

// In case of a Tie or Win, this function will run to reset our board.
var resetBoard = function() {
  var filledSquare = document.getElementsByClassName("0");
  for (var i = 0; i < filledSquare.length; i++) {
    filledSquare[i].innerHTML = '';
  }
  var filledSquare = document.getElementsByClassName("1");
  for (var i = 0; i < filledSquare.length; i++) {
    filledSquare[i].innerHTML = '';
  }
  var filledSquare = document.getElementsByClassName("2");
  for (var i = 0; i < filledSquare.length; i++) {
    filledSquare[i].innerHTML = '';
  }
  counter = 0;
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

}


//********* WHAT IS ACTUALLY HAPPENING WHEN A SQUARE  IS CLICKED **********************

//Here we are setting an specific function to run upon click of each of our squares
var squares = document.getElementsByClassName("board")

for (var i = 0; i < squares.length; i++) {

  squares[i].onclick = function(event) {
    squareClicked();
  }
};



// This is the actual function that will be running upon click
var squareClicked = function(square) {

  if (event.target.innerHTML === "") {
    event.target.innerHTML = xORO();

    updateBoard()

    findAWinner()

  }
};



//UPDATE OUR BOARD TO REFLECT BOARD ON HTML PAGE

var updateBoard = function() {
  var row = event.target.className;
  var column = event.target.id;
  board[row][column] = event.target.innerHTML;
}


// ************* OUR FUNCTIONS THAT CHECK FOR A WINNER - TO BE INCLUDED IN OUR CLICKS  ***********

var findAWinner = function() {
  var row = event.target.className;
  var column = event.target.id;
  var horizontalCounter = '';
  var verticalCounter = '';
  var diagonalCounter = '';

  // INNER FUNCTION THAT CHECKS FOR A VERTICAL WIN

  var verticalWinCheck = function() {

    for (var i = 0; i < board.length; i++) {
      verticalCounter += board[i][column];

      if (verticalCounter === 'XXX' || verticalCounter === 'OOO') {

        setTimeout(function() {
          alert("We Have A Winner!");
        }, 250)

        setTimeout(function() {
          resetBoard();
        }, 500)

      }
    }

  }

  //INNER FUNCTION THAT CHECKS FOR A HORIZONTAL WIN

  var horizontalWinCheck = function() {
    for (var i = 0; i < board[row].length; i++) {
      horizontalCounter += board[row][i];

      if (horizontalCounter === 'XXX' || horizontalCounter === 'OOO') {
        setTimeout(function() {
          alert("We Have A Winner!");
        }, 250)
        setTimeout(function() {
          resetBoard();
        }, 500)
      }

    }
  }

  // DIAGONAL CHECKER - ONLY NEEDED TO RUN IF CORNERS ARE BEING USED UP

  var diagonalCheck = function() {
    if (board[0][0] + board[1][1] + board[2][2] === 'XXX' || board[0][0] + board[1][1] + board[2][2] === 'OOO') {
      setTimeout(function() {
        alert("We Have A Winner!");
      }, 250)
      setTimeout(function() {
        resetBoard();
      }, 500)
    }
    if (board[0][2] + board[1][1] + board[2][0] === 'XXX' || board[0][2] + board[1][1] + board[2][0] === 'OOO') {
      setTimeout(function() {
        alert("We Have A Winner!");
      }, 250)
      setTimeout(function() {
        resetBoard();
      }, 500)

    } else if (counter === 9) {
      setTimeout(function() {
        alert('We Have A Tie');
      }, 250)
      setTimeout(function() {
        resetBoard();
      }, 251)
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