class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val()
        player.getCount();
          
      }
      
      form = new Form()
      form.display();
    }
    player1 = createSprite(50,300);
    player2 = createSprite(210,300);
   
    player31 = createSprite(400,300);
    player31.addImage(player3_img);
    player2.addImage(player2_img);
     player1.addImage(player1_img);
     player1.scale=0.4;
     player2.scale=0.6;
    player31.scale=0.11;
    cars=[player1,player2,player31]
  }
  play ()
  {
   
    form.hide();
   // textSize(32)
    //ext("Game Start",120,100)
    Player.getPlayerInfo();
    
  if(allPlayers !== undefined){
    //var display_Position=130;
    background(rgb(198,135,103));
    image(track, 0,70,700, 380);
    track.x = track.width/2;
    var x=0;
    var y;
    var index=0;
    for(var plr in allPlayers){
     // var x;
      index=index+1;
      x=x+175
      y=displayHeight-allPlayers[plr].distance
     
      cars[index-1].x = x;
      cars[index-1].y=y;
     
      if(index === player.index)
{
  cars[index-1].shapecolor=red;
  camera.position.x=displayWidth/2;
  camera.position.y=cars[index-1].y
}    }
  // display_Position+=20
  // textSize(15)
//text(allPayers [plr].name + ":" + allPlayers[plr].distance, 120, display_position)
  }
  

  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance+=50;
    player.update();
    
  }
  drawSprites();
    
}}