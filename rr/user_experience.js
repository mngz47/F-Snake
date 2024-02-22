
function transport(stage){

  e('canvas').background = "images/wormhole.gif";
  e("canvas").innerHTML = "<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage 2"+stage+"...</span>";

setTimeout(seeBehindCanvas, 2000);

  return true;
 }

function seeBehindCanvas(){

e('canvas').style.opacity = "0.4";
  
}

function show_challenge_winner(p1points,p1stage,p1speed,p1moves,p2points,p2stage,p2speed,p2moves,winner){

 e('canvas').background = "images/celebrate.gif";
  e("canvas").innerHTML =
    "<div class=row style='text-align:center;font-size:2em;display:block;margin-top:150px;' >"+
   
    "<div  class="col-sm-6 block" >"+
    
    "<img src='images/trophy.jpg' width=100% />"+
    
    "<span>Points "+p1points+"</span>"+
     "<span>Stage "+p1stage+"</span>"+
     "<span>Speed "+p1speed+"</span>"+
     "<span>Moves "+p1moves+"</span>"+
    "</div>"+
    
    "<div class="col-sm-6 block" >"+
 
    "<img src='images/trophy.jpg' width=100% />"+
    
    "<span>Points "+p1points+"</span>"+
     "<span>Stage "+p1stage+"</span>"+
     "<span>Speed "+p1speed+"</span>"+
     "<span>Moves "+p1moves+"</span>"+
    "</div>"+
    
    "</div>"+
    "<h3>"+winner+" WON</h3>";

  setTimeout(seeBehindCanvas, 10000);

  return true;
}


function show_score(p1points,p1stage,p1speed,p1moves,winner){

 e('canvas').background = "images/celebrate.gif";
  e("canvas").innerHTML =
    "<div class=row style='text-align:center;font-size:2em;display:block;margin-top:150px;' >"+
    "<div  class="col-sm-6 block" >"+
    "<img src='images/trophy.jpg' width=100% />"+
    "<span>Points "+p1points+"</span>"+
     "<span>Stage "+p1stage+"</span>"+
     "<span>Speed "+p1speed+"</span>"+
     "<span>Moves "+p1moves+"</span>"+
    "</div>"+
    "<div class="col-sm-6 block" >"+
    "</div>"+
    
    "</div>"+
    "<h3>"+winner+" WON</h3>";

  setTimeout(seeBehindCanvas, 10000);

  return true;
}
