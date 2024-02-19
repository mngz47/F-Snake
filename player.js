var player = 0;

var players = ["Listro","Bobby","Matthew"];

var player_speed = [2,8,12]; //the smaller the number greater the speed

var precision = [20,30,40]; //detection precision - axis size

function showPlayers(target){
for(var a=0;a<precision.length;a++){
   target.innerHTML += "<a href=# class=block onclick='iniPlayer("+a+");return false;' >"+players[a]+" ("+player_speed[a]+","+precision[a]+")</a>";
}
}

async function findFlower(){
   
   if(((e('food').offsetTop+precision[player])>e('head').offsetTop && (e('food').offsetTop-precision[player])<e('head').offsetTop)){ //detect y axis of food
  if(e('food').offsetLeft>e('head').offsetLeft){
 d = "r";
  }else if(e('food').offsetLeft<e('head').offsetLeft){
 d = "l";
  }  
   }else if(((e('food').offsetLeft+precision[player])>e('head').offsetLeft && (e('food').offsetLeft-precision[player])<e('head').offsetLeft)){ //detect x axis of food
  if(e('food').offsetTop>e('head').offsetTop){ 
 d = "b";
  }else if(e('food').offsetTop<e('head').offsetTop){
 d = "t";
  }
   }
      
}

function iniPlayer(player){
   this.player = player;
setInterval(findFlower,500*(player_speed[player]));
}
