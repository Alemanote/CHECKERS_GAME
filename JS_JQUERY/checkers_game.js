
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

    //Chequeando movimientos

    var move = 1;
    var redEat1 = false;
    var redEat2 = false;
    var redEat3 = false;
    var redEat4 = false;

    var greenEat1 = false;
    var greenEat2 = false;
    var greenEat3 = false;
    var greenEat4 = false;



    if (tablero[escogidaxt + escogidayt * 8] == 1) {
        if (tablero[(escogidaxt + 1) + (escogidayt + 1) * 8] == 2 && tablero[(escogidaxt + 2) + (escogidayt + 2) * 8] == 0) {
            move = 2;
            redEat1 = true;
        }
        if (tablero[(escogidaxt + 1) + (escogidayt - 1) * 8] == 2 && tablero[(escogidaxt + 2) + (escogidayt - 2) * 8] == 0) {
            move = 2;
            redEat2 = true;
        }
        if (tablero[(escogidaxt - 1) + (escogidayt + 1) * 8] == 2 && tablero[(escogidaxt - 2) + (escogidayt + 2) * 8] == 0) {
            move = 2;
            redEat3 = true;
        }
        if (tablero[(escogidaxt - 1) + (escogidayt - 1) * 8] == 2 && tablero[(escogidaxt - 2) + (escogidayt - 2) * 8] == 0) {
            move = 2;
            redEat4 = true;
        }
    }

    if (tablero[escogidaxt + escogidayt * 8] == 2) {
        if (tablero[(escogidaxt + 1) + (escogidayt + 1) * 8] == 1 && tablero[(escogidaxt + 2) + (escogidayt + 2) * 8] == 0) {
            move = 2;
            greenEat1 = true;
        }
        if (tablero[(escogidaxt + 1) + (escogidayt - 1) * 8] == 1 && tablero[(escogidaxt + 2) + (escogidayt - 2) * 8] == 0) {
            move = 2;
            greenEat2 = true;
        }
        if (tablero[(escogidaxt - 1) + (escogidayt + 1) * 8] == 1 && tablero[(escogidaxt - 2) + (escogidayt + 2) * 8] == 0) {
            move = 2;
            greenEat3 = true;
        }
        if (tablero[(escogidaxt - 1) + (escogidayt - 1) * 8] == 1 && tablero[(escogidaxt - 2) + (escogidayt - 2) * 8] == 0) {
            move = 2;
            greenEat4 = true;
        }
    }

    //Limitar el movimiento a la variable MOVE

    if (Math.abs(xt - escogidaxt) <= move && Math.abs(yt - escogidayt) <= move) {

        if (escogida && tablero[xt + yt * 8] == 0) {

            if (tablero[escogidaxt + escogidayt * 8] == 1) {
                dibujaCirculo(xt, yt);
                tablero[xt + yt * 8] = 1;
            }

            if (tablero[escogidaxt + escogidayt * 8] == 2) {
                dibujaCirculo2(xt, yt);
                tablero[xt + yt * 8] = 2;
            }


            superficie.beginPath();

            superficie.fillStyle = "#000000";
            superficie.rect(0 + escogidaxt * 40, escogidayt * 40, 40, 40);
            superficie.fill();

            superficie.closePath();

            tablero[escogidaxt + escogidayt * 8] = 0;
            escogida = false;


        //comer ficha

            if (redEat1 == true || greenEat1==true) {
                superficie.beginPath();

                superficie.fillStyle = "#000000";
                superficie.rect(0 + (escogidaxt + 1) * 40, (escogidayt + 1) * 40, 40, 40);
                superficie.fill();

                superficie.closePath();
                
                redEat1 = false;
                greenEat1=false;
                tablero[(escogidaxt+1) + (escogidayt+1) * 8]=0;

            }

            if (redEat2 == true || greenEat2 == true) {
                superficie.beginPath();

                superficie.fillStyle = "#000000";
                superficie.rect(0 + (escogidaxt + 1) * 40, (escogidayt - 1) * 40, 40, 40);
                superficie.fill();

                superficie.closePath();

                redEat2 = false;
                greenEat2=false;
                tablero[(escogidaxt+1) + (escogidayt-1) * 8]=0;

            }

            if (redEat3 == true || greenEat3 == true) {
                superficie.beginPath();

                superficie.fillStyle = "#000000";
                superficie.rect(0 + (escogidaxt - 1) * 40, (escogidayt + 1) * 40, 40, 40);
                superficie.fill();

                superficie.closePath();
                redEat3 = false;
                greenEat3 = false;
                tablero[(escogidaxt-1) + (escogidayt+1) * 8]=0;
                

            }

            if (redEat4 == true || greenEat4 == true) {

                superficie.beginPath();

                superficie.fillStyle = "#000000";
                superficie.rect(0 + (escogidaxt - 1) * 40, (escogidayt - 1) * 40, 40, 40);
                superficie.fill();

                superficie.closePath();

                redEat4 = false;
                greenEat4 = false;
                tablero[(escogidaxt-1) + (escogidayt-1) * 8]=0;

            }

        }
    }



}
