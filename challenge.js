
function showChallenge(){

e('challenge').innerHTML = 
  "<a href=# class=block onclick='setCookie("payment", 1, 30);startChallenge();return false;' ><img src=trophy.jpg width=100px />1 round (FREE)</a>"+
  "<a href=# class=block onclick='purchase(100);return false;' ><img src=trophy.jpg width=100px />5 rounds (R100)</a>"+
  "<a href=# class=block onclick='purchase(300);return false;' ><img src=trophy.jpg width=100px />10 rounds (R300)</a>"+
  "<a href=# class=block onclick='purchase(500);return false;' ><img src=trophy.jpg width=100px />15 rounds (R500)</a>";
  
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

var activeChallenge = false;
         
function confirmChallenge(){
  activeChallenge = getCookie("payment")==1;

  if(activeChallenge){
if(getCookie("game_index")){
 game_index = getCookie("game_index");
}else{
  setCookie("game_index", 0, 30);
  game_index = 0;
}

    startChallenge();
  }

return activeChallenge;
}

/*

if(activeChallenge){
gameEnd();
}

*/

var game_index = 0;
var game_seconds = 0;

var timerId;

function startChallenge(){

var rounds = getRounds(getCookie("price"));
  
 if(game_index<(rounds*2)){

  if(game_index%2==0){
    e('start').style.display='none';
    alert("Your turn to play")
    start();
  }else{
    e('start').style.display='none';
    iniPlayer(0);
  }
   
timerId = setInterval(gameTimer,1000);
}else{
//rounds

   var p1seconds = 0;
   var p1points = 0;

   var p2seconds = 0;
   var p2points = 0;
   
   for(var b=0;b<(game_index+1);b++){

 if(b%2==0){
   p2seconds += (int)getCookie("game_seconds_"+b);
   p2points += (int)getCookie("game_points_"+b);
 }else{
  p1seconds += (int)getCookie("game_seconds_"+b);
  p1points += (int)getCookie("game_points_"+b);
  }
     
  }  

var score = "(Your Score: "+p2points+" ;  Time(s) : "+p2seconds+")"+
  "(Machine Score: "+p1points+" ;  Time(s) : "+p1seconds+")";
   
 if(p2seconds<p1seconds && p2points>p1points){
alert("Success: "+score)
 }
alert("Failure: "+score);   
 }
}
  
function getRounds(price){

  return (price==null?1:(price==100?5:(price=300?10:15)));
  
}

function gameTimer(){
game_seconds+=1;
}

function gameEnd(){

  clearInterval(timerId);
  var gni = (game_index+1);
  setCookie("game_index", gni , 30);
   setCookie("game_seconds_"+gni, game_seconds, 30);
  setCookie("game_points_"+gni, e('points').innerHTM, 30);
  
}
