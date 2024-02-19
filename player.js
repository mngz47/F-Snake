var players = ["Listro","Bobby","Matthew"];

var player_speed = [3,6,9]; //the smaller the number greater the speed

async function findFlower(){

d = null;
   
  if((e('food').offsetTop+20)>e('head').offsetTop){ 
 d = "t";
  }else if((e('food').offsetTop-20)<e('head').offsetTop){
 d = "b";
  }
   if(!d){
  if((e('food').offsetLeft+20)>e('head').offsetLeft){
 d = "r";
  }else if((e('food').offsetLeft-20)<e('head').offsetLeft){
 d = "l";
  }
   }
}

function iniPlayer(){
setInterval(findFlower,1000*(player_speed[0]));
}
