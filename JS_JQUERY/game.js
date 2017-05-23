//Defining board, scores, win or lose

function checkers_game () {
this.board = [
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
];

this.win = false;
this.lose = false;
this.score= 0;

};

checkers_game.prototype.getAvailablePositions = function() {};

// checkers_game.prototype._gameFinished = function(){
//   if (this.won === true || this.lost === true){
//     return true;
//   }
//   else {
//     return false;
//   };

// }

// Game2048.prototype._updateScore = function(value) {
// //   this.score +=;
//   }