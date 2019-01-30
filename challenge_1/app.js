// general function to run when a square is clicked.
var counter = 0;

var squares = document.getElementsByClassName("square")

// SETTING UP OUR OVERALL ONLICK FUNCTION
for(var i = 0; i < squares.length; i++) {
  squares[i].onclick = function(event) { squareClicked()}
}


var squareClicked = function(square) {
  console.log(event.target.className.split(', '))
  var horizontalChecker = event.target.id.slice(0,1)
  var verticalChecker = event.target.id.slice(1)
  if (event.target.innerHTML === "") {
    event.target.innerHTML = xORO();
  }
};

// var classesArray = {
//   event.target.className.split(', ')
// }

//FUNCTION TO CHECK WHETHER IT IS X OR O TURN


var xORO = function() {
  if (counter % 2 === 0) {
    counter++
    return 'X'
  } else {
    counter++
    return 'O'
  }
};


//FUNCTION TO CHECK VERTICAL


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