var players = ["Listro","Bobby","Matthew"];

var player_speed = [3,6,9]; //the smaller the number greater the speed

async function findFlower(){
   
   if(!((e('food').offsetTop+70)>e('head').offsetTop && (e('food').offsetTop-70)<e('head').offsetTop)){
  if(e('food').offsetTop>e('head').offsetTop){ 
 d = "b";
  }else if(e('food').offsetTop<e('head').offsetTop){
 d = "t";
  }
   }else if(!((e('food').offsetLeft+70)>e('head').offsetLeft && (e('food').offsetLeft-70)<e('head').offsetLeft)){
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
