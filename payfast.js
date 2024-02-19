/*
<form action=https://www.payfast.co.za/eng/process method=post id=payment_ff class=invisible onsubmit=appendHome(); >
<input type=text name=merchant_id value=12647788 />
<input type=text name=merchant_key value=nliu1lbt07r75 />
<input type=text id=return_url name=return_url value=https://mngz47.github.io/pamel_slots/index.html?pp=1 />
<input type=text name=cancel_url value=https://mngz47.github.io/pamel_slots/index.html?pp=0 />
<input type=text id=amount name=amount value=40 />
<input type=text name=item_name value="Pamel Slots" />
<input type=text name=email_confirmation value="1" />
</form>

const urlParams = new URLSearchParams(window.location.search);
const amount = urlParams.get('vv');
const payment = urlParams.get('pp');
if(amount && payment==1){
e(amount).selected = true;
play_p();
}else if(payment==0){
alert('Payment Cancelled');
}
*/

var price = 100;
var return_url = location.hostname;
var cancel_url = location.hostname;
var product = "Flower Snake Challenge";

function payfast(){

const obj = { 
            merchant_id: "12647788" ,
             merchant_key: "nliu1lbt07r75" ,
               return_url: return_url ,
               "cancel_url": cancel_url ,
                amount: price ,
               item_name: product ,
               email_confirmation: "1" 
            };

const request = new Request("https://www.payfast.co.za/eng/process", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // do something with the data sent in the request
});
}
