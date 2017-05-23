//Defining the pieces: regular pieces and kings
var Piece = function () {};


var commonPieces = function () {
    this.move = false;
    this.selected = false;
}
var kingPieces = function () {
    this.status =  false;
    this.superMove = false;
    this.selected = false;
}