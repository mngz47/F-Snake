var players = ["Listro","Bobby","Matthew"];

var player_speed = [2,8,12]; //the smaller the number greater the speed

var precision = 30; //detection precision - axis size

async function findFlower(){
   
   if(((e('food').offsetTop+precision)>e('head').offsetTop && (e('food').offsetTop-precision)<e('head').offsetTop)){ //detect y axis of food
  if(e('food').offsetLeft>e('head').offsetLeft){
 d = "r";
  }else if(e('food').offsetLeft<e('head').offsetLeft){
 d = "l";
  }  
   }else if(((e('food').offsetLeft+precision)>e('head').offsetLeft && (e('food').offsetLeft-precision)<e('head').offsetLeft)){ //detect x axis of food
  if(e('food').offsetTop>e('head').offsetTop){ 
 d = "b";
  }else if(e('food').offsetTop<e('head').offsetTop){
 d = "t";
  }
   }
      
}

function iniPlayer(){
setInterval(findFlower,500*(player_speed[0]));
}
