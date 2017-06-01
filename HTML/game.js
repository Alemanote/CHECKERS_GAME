// //Defining board, scores, win or lose

// function CheckersGame () {
// this.board = [
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
// ];
// this.win = false;
// this.lose = false;
// this.score= 0;

// };

// checkers_game.prototype.checkMovements =  function (x, y) {
//     this.position = document.getElementsbyId("x,y");


// };



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

// CREANDO EL TABLERO

// //1ª Fila

// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(40+i*80,0,40,40);
// superficie.fill();

// superficie.closePath();

// }

// //2ª Fila
// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(0+i*80,40,40,40);
// superficie.fill();

// superficie.closePath();

// }


// //3ª Fila
// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(40+i*80,80,40,40);
// superficie.fill();

// superficie.closePath();

// }

// //4ª Fila
// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(0+i*80,120,40,40);
// superficie.fill();

// superficie.closePath();

// }

// //Hacer una funcion,

// //5ª Fila
// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(40+i*80,160,40,40);
// superficie.fill();

// superficie.closePath();

// }

// //6ª Fila
// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(0+i*80,200,40,40);
// superficie.fill();

// superficie.closePath();

// }


// //7ª Fila
// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(40+i*80,240,40,40);
// superficie.fill();

// superficie.closePath();

// }

// //8ª Fila
// for (i=0; i<4; i++) {

// var canvas = document.getElementById("myCanvas");
// var superficie = canvas.getContext("2d");
// superficie.beginPath();

// superficie.rect(0+i*80,280,40,40);
// superficie.fill();

// superficie.closePath();

// }



//////////////////////

var canvas = document.getElementById("myCanvas");
var superficie = canvas.getContext("2d");

function tablero(superficie) {
    superficie.beginPath();
    for (var i = 0; i < 4; i++) {
        superficie.rect(0 + i * 80, 0, 40, 40);
    }

    for (var i = 0; i < 4; i++) {
        superficie.rect(40 + i * 80, 40, 40, 40);
    }

    for (var i = 0; i < 4; i++) {
        superficie.rect(0 + i * 80, 80, 40, 40);
    }

    for (var i = 0; i < 4; i++) {
        superficie.rect(40 + i * 80, 120, 40, 40);
    }

    for (var i = 0; i < 4; i++) {
        superficie.rect(0 + i * 80, 160, 40, 40);
    }

    for (var i = 0; i < 4; i++) {
        superficie.rect(40 + i * 80, 200, 40, 40);
    }

    for (var i = 0; i < 4; i++) {
        superficie.rect(0 + i * 80, 240, 40, 40);
    }

    for (var i = 0; i < 4; i++) {
        superficie.rect(40 + i * 80, 280, 40, 40);
    }
    superficie.fill();
    superficie.closePath();
}


tablero(superficie);

function dibujaCirculo(celdax, celday) { //fichas en granate
    superficie.beginPath();
    superficie.strokeStyle = "brown";
    superficie.lineWidth = 18;
    superficie.arc(20 + 40 * celdax, 20 + 40 * celday, 8, 0, 2 * Math.PI);
    superficie.stroke();
    superficie.closePath();
}

function dibujaCirculo2(celdax, celday) { //fichas verdes
    superficie.beginPath();
    superficie.strokeStyle = "green";
    superficie.lineWidth = 18;
    superficie.arc(20 + 40 * celdax, 20 + 40 * celday, 8, 0, 2 * Math.PI);
    superficie.stroke();
    superficie.closePath();
}





for (var i = 0; i < 8; i += 2) {
    dibujaCirculo(i, 0); //fila 1
}
for (var i = 0; i < 8; i += 2) {
    dibujaCirculo(i + 1, 1); //fila 2
}
for (var i = 0; i < 8; i += 2) {
    dibujaCirculo(i, 2); //fila 4
}

for (var i = 0; i < 8; i += 2) {
    dibujaCirculo2(i + 1, 5); //fila 6
}


for (var i = 0; i < 8; i += 2) {
    dibujaCirculo2(i, 6); //fila 7
}

for (var i = 0; i < 8; i += 2) {
    dibujaCirculo2(i + 1, 7); //fila 8
}
///


///



tablero = [1, -100, 1, -100, 1, -100, 1, -100,

    -100, 1, -100, 1, -100, 1, -100, 1,

    1, -100, 1, -100, 1, -100, 1, -100,

    -100, 0, -100, 0, -100, 0, -100, 0,

    0, -100, 0, -100, 0, -100, 0, -100,

    -100, 2, -100, 2, -100, 2, -100, 2,

    2, -100, 2, -100, 2, -100, 2, -100,

    -100, 2, -100, 2, -100, 2, -100, 2,
]



canvas.addEventListener("mousedown", posicion); //si mousedown ejecutame la posicion
var escogida = false;
escogidaxt = -100;
escogidayt = -100;

function posicion(event) {
    var x = event.x; //recogemos la coordenada x
    var y = event.y; //recogemos la coordenada y
    x -= canvas.offsetLeft; //ajustamos la poscion del margen izquierdo
    y -= canvas.offsetTop; //ajustamos el posicion del margen de arriba

    var xt = Math.floor(x / 40); //transformamos x, cada celda mide 40!!
    var yt = Math.floor(y / 40); //transformamos y, cada celda mide 40!!



    if (!escogida && tablero[xt + yt * 8] == 1) {
        escogida = true;
        superficie.beginPath();
        superficie.fillStyle = "lightblue";
        superficie.rect(0 + xt * 40, yt * 40, 40, 40);
        superficie.fill();

        superficie.closePath();
        escogidaxt = xt;
        escogidayt = yt;
        dibujaCirculo(xt, yt);

    }

    if (!escogida && tablero[xt + yt * 8] == 2) {
        escogida = true;

        superficie.beginPath();

        superficie.fillStyle = "lightblue";
        superficie.rect(0 + xt * 40, yt * 40, 40, 40);
        superficie.fill();

        superficie.closePath();
        escogidaxt = xt;
        escogidayt = yt;
        dibujaCirculo2(xt, yt);

    }

    if (Math.abs(xt - escogidaxt) < 2 && Math.abs(yt - escogidayt) < 2) {
        
        if (escogida && tablero[xt + yt * 8] == 0) {

            if (tablero[escogidaxt + escogidayt * 8] == 1) {
                dibujaCirculo(xt, yt);
                tablero[xt + yt * 8] = 1;
            }

            if (tablero[escogidaxt + escogidayt * 8] == 2) {
                dibujaCirculo2(xt, yt);
                tablero[xt + yt * 8] = 2;
            };


            superficie.beginPath();

            superficie.fillStyle = "#000000";
            superficie.rect(0 + escogidaxt * 40, escogidayt * 40, 40, 40);
            superficie.fill();

            superficie.closePath();
            tablero[escogidaxt + escogidayt * 8] = 0;

            escogida = false;
        }





    }




}