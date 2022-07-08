// function startGame() {
//   console.log('start game')
//   gameloop.start();
// }

// startGame() {
//   this.togglescreen('start-screen', false);
//   this.togglecreen('canvas', true);
// }

// toglgeScreen(is, toggle) {
//   let element = document.getElementById(id);
//   let display = ( toggle ) ? 'block' : 'none';
//   element.style.display = display;
// }

// function startgame() {
//   document.querySelector('.grid-item')(.style.color) = Yellow
// }

//this is to create a start button, when clicked it will generate random cards
var usedNums = new Array(76)

function newCard() {
  //Starting loop through each square card
  for (var i = 0; i < 24; i++) {
    //<--always this code for loops. change in red
    setSquare(i)
  }
}

function setSquare(thisSquare) {
  var currSquare = 'square' + thisSquare
  var newNum
  var colPlace = new Array(
    0,
    1,
    2,
    3,
    4,
    0,
    1,
    2,
    3,
    4,
    0,
    1,
    3,
    4,
    0,
    1,
    2,
    3,
    4,
    0,
    1,
    2,
    3,
    4
  )
  do {
    newNum = colPlace[thisSquare] * 15 + getNewNum() + 1
  } while (usedNums[newNum])
  usedNums[newNum] = true
  document.getElementById(currSquare).innerHTML = newNum
}

function getNewNum() {
  return Math.floor(Math.random() * 75)
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false
  }
  newCard()
}
