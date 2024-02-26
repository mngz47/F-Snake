
var canvas = "";

function transport(stage){

  overLay("<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage "+stage+"...</span>"
         +"<img src=images/wormhole.gif width=100% />");
  
  setTimeout(seeBehindCanvas, 2000);

  return true;
 }


function gameOver(){
overLay(show_score(points,stage,game_seconds,moves,"<h2>Game Over</h2><a href=# onclick='location.reload();return false;' >Reload</a>"));
  setTimeout(seeBehindCanvas, 2000);
   
  //location.reload();
}


function overLay(content){

   document.body.innerHTML += "<div id=overlay style='position: absolute;background-color:rgba(0,0,0,0.7);left:0px;top:0px;width:100%;height:100%;' >"+content+"</div>";
}

function seeBehindCanvas(){

    e('canvas').style.opacity = "0.4";
  e('overlay').style.opacity = "0.4";
setTimeout(hideBehindCanvas, 2000);
 
}

function hideBehindCanvas(){

 
e('canvas').style.opacity = "1";
  //  e('overlay').style.opacity = "1";
  e('overlay').style.display = "none";

   prepareNextStage();
  
}


function show_challenge_winner(p1points,p1stage,p1seconds,p1moves,p2points,p2stage,p2seconds,p2moves,winner){

 e('canvas').background = "images/celebrate.gif";
  e("canvas").innerHTML =
    "<div class=row style='text-align:center;font-size:2em;display:block;margin-top:150px;' >"+
   
    "<div  class='col-sm-6 block' >"+
    
    "<img src='images/trophy.jpg' width=100% />"+
    
    "<span style='display:block;' >Points :"+p1points+"</span>"+
     "<span style='display:block;' >Stage :"+p1stage+"</span>"+
     "<span style='display:block;'  >Time :"+p1seconds+"</span>"+
     "<span  style='display:block;'  >Speed :"+Math.round(p1stage/p1seconds)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p1moves+"</span>"+
    "</div>"+
    
    "<div class='col-sm-6 block' >"+
 
    "<img src='images/trophy.jpg' width=100% />"+
    
     "<span style='display:block;' >Points :"+p2points+"</span>"+
     "<span style='display:block;' >Stage :"+p2stage+"</span>"+
     "<span style='display:block;'  >Time :"+p2seconds+"</span>"+
     "<span  style='display:block;' >Speed :"+Math.round(p2stage/p2seconds)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p2moves+"</span>"+
    "</div>"+
    
    "</div>"+
    "<h3>"+winner+" WON</h3>";

  setTimeout(seeBehindCanvas, 10000);

  return true;
}


function show_score(p1points,p1stage,p1seconds,p1moves,winner){

 e('canvas').background = "images/celebrate.gif";
  e("canvas").innerHTML =
    "<div class='row block' style='font-size:2em;margin-top:150px;' >"+
    "<div  class='col-sm-6' >"+
    "<img src='images/trophy.jpg' width=100% />"+
    "<h4>"+winner+"</h4>"+
  "</div>"+
    "<div class='col-sm-6' >"+
       "<span style='display:block;' >Points :"+p1points+"</span>"+
     "<span style='display:block;' >Stage :"+p1stage+"</span>"+
     "<span style='display:block;'  >Time :"+p1seconds+"</span>"+
     "<span  style='display:block;'  >Speed :"+Math.round(p1stage/p1seconds)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p1moves+"</span>"+
    "</div>"+
    "</div>";

  setTimeout(seeBehindCanvas, 10000);

  return true;
}
