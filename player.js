var players = ["Listro","Bobby","Matthew"];

function findFlower(){

  e('food')

  if((e('food').offsetTop+20)>e('head').offsetTop){ 
 d = "t";
  }else if((e('food').offsetTop-20)<e('head').offsetTop){
 d = "b";
  }else if((e('food').offsetLeft+20)>e('head').offsetLeft){
 d = "r";
  }else if((e('food').offsetLeft-20)<e('head').offsetLeft){
 d = "l";
  }

}
