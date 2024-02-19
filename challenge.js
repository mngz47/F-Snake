
function challenge(){

e('challenge').innerHTML += "<a href=# class=block onclick='purchase(100);return false;' ><img src=trophy.jpg width=100px />5 rounds (R100)</a>"+
  "<a href=# class=block onclick='purchase(300);return false;' ><img src=trophy.jpg width=100px />10 rounds (R300)</a>"+
  "<a href=# class=block onclick='purchase(500);return false;' ><img src=trophy.jpg width=100px />15 rounds (R500)</a>";
  
}

function checkChallenge(){
const urlParams = new URLSearchParams(window.location.search);
const amount = urlParams.get('vv');
const payment = urlParams.get('pp');
if(amount && payment==1){
e(amount).selected = true;
play_p();
}else if(payment==0){
alert('Payment Cancelled');
}
}

var HOME = "https://mngz47.github.io/F-Snake/index3.html";

function purchase(price){
this.price = price;
this.product = "Flower Snake Challenge";
this.return_url = HOME+"?pp=1";
this.cancel_url =  HOME+"?pp=0";
  
  payfast();

  setCookie(cname, cvalue, exdays)
}
