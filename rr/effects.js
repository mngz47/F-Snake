//stimulation and game confirmation

function playTheme(){
  
var audio = new Audio('sounds/snake_music.mp3');
  document.body.appendChild(audio);
audio.play();
  
}

function food_effect(){

}

function obstacle_effect(){

}

function results_effect(){

}


//respond to user effects

function shake_effect(){

}

function vanish_effect(){

}

function fall_effect(after_task){
this.className+=' fall';
  setTimeout(after_task, 3000);
}

function breath_effect(){


}

function pulse_effect(){

}
