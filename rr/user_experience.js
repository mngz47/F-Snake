
function transport(stage){

  e('canvas').background = "images/wormhole.gif";
  e("canvas").innerHTML = "<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage 2"+stage+"...</span>";
  
 }

function winner(){

 e('canvas').background = "images/celebrate.gif";
  e("canvas").innerHTML =
    "<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage 2"+stage+"...</span>"+
    "<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage 2"+stage+"...</span>"+
   "<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage 2"+stage+"...</span>"+
   "<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage 2"+stage+"...</span>";
  
}
