//Defining the pieces: regular pieces and kings
var Piece = function () {
    this.player;
    this.king = false;
    // this.red = true;
    // this.green = true;

    var redPieces = [
        {id: "red1", 
        coord:[0,0]},
        {id: "red2", 
        coord:[0,2]},
        {id: "red3", 
        coord:[0,4]},
        {id: "red4", 
        coord:[0,6]},
        {id: "red5", 
        coord:[1,1]},
        {id: "red6", 
        coord:[1,3]},
        {id: "red7", 
        coord:[1,5]},
        {id: "red8", 
        coord:[1,7]},
        {id: "red9", 
        coord:[2,0]},
        {id: "red10", 
        coord:[2,2]},
        {id: "red11", 
        coord:[2,4]},
        {id: "red12", 
        coord:[2,6]},
    ];
    var greenPieces = [
        {id: "green1", 
        coord:[7,1]},
        {id: "green2", 
        coord:[7,3]},
        {id: "green3", 
        coord:[7,5]},
        {id: "green4", 
        coord:[7,7]},
        {id: "green5", 
        coord:[6,0]},
        {id: "green6", 
        coord:[6,2]},
        {id: "green7", 
        coord:[6,4]},
        {id: "green8", 
        coord:[6,6]},
        {id: "green9", 
        coord:[5,1]},
        {id: "green10", 
        coord:[5,3]},
        {id: "green11", 
        coord:[5,5]},
        {id: "gree12", 
        coord:[5,7]},
    ]

};

