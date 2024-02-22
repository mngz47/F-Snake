
var canvas = "";

function transport(stage){

  e('canvas').style.backgroundImage = "images/wormhole.gif";
 canvas = e("canvas").innerHTML;
  e("canvas").innerHTML = "<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage "+stage+"...</span>";

setTimeout(seeBehindCanvas, 2000);

  return true;
 }

function seeBehindCanvas(){

e('canvas').style.opacity = "0.4";
setTimeout(hideBehindCanvas, 2000);
 
}

function hideBehindCanvas(){

 
e('canvas').style.opacity = "1";
 e("canvas").innerHTML = canvas;
  e('canvas').style.background = "white";
  
   prepareNextStage();
  
}

function prepareNextStage(){
stage+=1; 
points=0; //Resets points to prepare for new stage

e('stacle').style.color = (stage==2?'red':(stage==3?'yellow':(stage==4?'green':(stage==5?'orange':(stage==6?'blue':'purple'))))); //Changes color of obsatcle for new stage
setInterval(placeStacle,1000*(8-stage));//Changes speed of obstacle for new stage
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
    "</div>"+
    
    "</div>"+
    "<h3>"+winner+"</h3>";

  setTimeout(seeBehindCanvas, 10000);

  return true;
}
