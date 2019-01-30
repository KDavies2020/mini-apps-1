var test = function() {
  document.getElementsByClassName('square').onclick = function(event) {
  console.log(event);
  }
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

