
function transport(stage){

  overLay("<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage "+stage+"...</span>"
         +"<img src=images/wormhole.gif width=100% />");
  
  setTimeout(seeBehindCanvas, 2000);

  return true;
 }


function gameOver(){
overLay(show_score(points,stage,game_seconds,moves,"<h2>Game Over</h2><a href=# onclick='location.reload();return false;' >Reload</a>"));
 
  // setTimeout(seeBehindCanvas, 2000); 
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

var st1 = (p1stage/p1seconds);
  var st2 = (p2stage/p2seconds);
  
return "<div class=row style='background-image:url(\"images/celebrate.gif\");font-size:1.6em;margin-top:150px;' >"+
    "<div  class='col-sm-2' >"+
"<img src='images/trophy.jpg' width=150px />"+
   "</div>"+
  "<div  class='col-sm-5' >"+
   "<div class='block' >"+
     "<h3 >Machine</h3>"+
    "<span style='display:block;' >Points :"+p1points+"</span>"+
     "<span style='display:block;' >Stage :"+p1stage+"</span>"+
     "<span style='display:block;'  >Time :"+p1seconds+"</span>"+
     "<span  style='display:block;'  >Speed :"+st1.toFixed(4)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p1moves+"</span>"+
  "</div>"+
    "</div>"+

    "<div class='col-sm-5' >"+
  "<div class='block' >"+
     "<h3 >You</h3>"+
     "<span style='display:block;' >Points :"+p2points+"</span>"+
     "<span style='display:block;' >Stage :"+p2stage+"</span>"+
     "<span style='display:block;'  >Time(s) :"+p2seconds+"</span>"+
     "<span  style='display:block;' >Speed(s/t) :"+st2.toFixed(4)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p2moves+"</span>"+
    "</div>"+
   "</div>"+
    
    "</div>"+
    "<h3>"+winner+" WON</h3>";
}


function show_score(p1points,p1stage,p1seconds,p1moves,winner){

 //setTimeout(seeBehindCanvas, 10000);
  var st = (p1stage/p1seconds);
  
return "<div class='row' style='font-size:2em;margin-top:150px;font-color:white;' >"+
    "<div  class='col-sm-6' >"+
    "<img src='images/trophy.jpg' width=100px />"+
    "<h4>"+winner+"</h4>"+
  "</div>"+
    "<div class='col-sm-6' >"+
       "<span style='display:block;' >Points :"+p1points+"</span>"+
     "<span style='display:block;' >Stage :"+p1stage+"</span>"+
     "<span style='display:block;'  >Time(s) :"+p1seconds+"</span>"+
     "<span  style='display:block;'  >Speed(s/t) :"+st.toFixed(4)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p1moves+"</span>"+
    "</div>"+
    "</div>";

}
