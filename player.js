var players = ["Listro","Bobby","Matthew"];

var player_speed = [4,8,12]; //the smaller the number greater the speed

var precision = 30;

async function findFlower(){
   
   if(!((e('food').offsetTop+precision)>e('head').offsetTop && (e('food').offsetTop-precision)<e('head').offsetTop)){
  if(e('food').offsetTop>e('head').offsetTop){ 
 d = "b";
  }else if(e('food').offsetTop<e('head').offsetTop){
 d = "t";
  }
   }else if(!((e('food').offsetLeft+precision)>e('head').offsetLeft && (e('food').offsetLeft-precision)<e('head').offsetLeft)){
  if(e('food').offsetLeft>e('head').offsetLeft){
 d = "r";
  }else if(e('food').offsetLeft<e('head').offsetLeft){
 d = "l";
  }
   }
      
}

function iniPlayer(){
setInterval(findFlower,1000*(player_speed[0]));
}
