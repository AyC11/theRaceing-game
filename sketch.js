var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var players;
var form, player, game;

var cars,player1, player2, player31;

var track, player1_img, player2_img, player3_img;

function preload(){
  track = loadImage("images/road.jpg");
  player1_img = loadImage("images/runner.png");
  player2_img = loadImage("images/runner3.png");
  player3_img = loadImage("images/runner12.png");
  //ground = loadImage("images/road.png");
}

function setup(){
  canvas = createCanvas(700,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
     }
 
}