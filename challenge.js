
function showChallenge(){

e('challenge').innerHTML = 
  "<a href=# class=block onclick='setCookie("payment", 1, 30);startChallenge();return false;' ><img src=trophy.jpg width=100px />1 round (FREE)</a>"+
  "<a href=# class=block onclick='purchase(100);return false;' ><img src=trophy.jpg width=100px />5 rounds (R100)</a>"+
  "<a href=# class=block onclick='purchase(300);return false;' ><img src=trophy.jpg width=100px />10 rounds (R300)</a>"+
  "<a href=# class=block onclick='purchase(500);return false;' ><img src=trophy.jpg width=100px />15 rounds (R500)</a>";
  
}

function checkChallenge(){
const urlParams = new URLSearchParams(window.location.search);
const payment = urlParams.get('pp');

    if(getCookie("price")!=null){
  if(payment!=null){
if(payment==1){
  setCookie("payment", 1, 30);
  startChallenge();
}else if(payment==0){
  setCookie("payment", 0, 30);
alert('Payment Cancelled');
}
}
  }
}

function confirmChallenge(){
return getCookie("payment")==1;
}


var HOME = "https://mngz47.github.io/F-Snake/index3.html";

function purchase(price){
this.price = price;
this.product = "Flower Snake Challenge";
this.return_url = HOME+"?pp=1";
this.cancel_url =  HOME+"?pp=0";

setCookie("price", price, 30);
  
payfast2();

}

var game_index = 0;
var game_seconds = 0;

var timerId;

function startChallenge(){

var rounds = getRounds(getCookie("price"));
  
 if(game_index<(rounds*2)){
  
if(getCookie("game_index")){
 game_index = getCookie("game_index");
}else{
setCookie("game_index", 0, 30);
}

timerId = setInterval(gameTimer,1000);
}else{
//rounds

      
   
 }
}
  


function getRounds(price){

  return (price==null?1:(price==100?5:(price=300?10:15)));
  
}

function gameTimer(){
game_seconds+=1;
}

function gameEnd(){

  var gni = (game_index+1);
  setCookie("game_index", gni , 30);
   setCookie("game_seconds_"+gni, game_seconds, 30);
  setCookie("game_points_"+gni, e('points').innerHTM, 30);
  
clearInterval(timerId);
}
