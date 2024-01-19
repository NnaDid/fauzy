const basecurr    = document.querySelector(".basecurr");
const targetcurr  = document.querySelector(".targetcurr");

const bc_amount   = document.querySelector(".bc_amount");
const tc_amount   = document.querySelector(".tc_amount");

const convertbtn = document.getElementById("convertbtn");
const result     = document.querySelector(".result");


const currencyRates = {
    '€':{
        '$':1.09,
        '£':0.86,
        '₦':989.35
       },
    '$':{
        '€':0.92,
        '£':0.79,
        '₦':910.75
    },
    '£':{
        '€':1.17,
        '$':1.27,
        '₦':1154.09
    },
    '₦':{
        '€':0.0011,
        '$':0.0011,
        '£':0.00087
    }
}

convertbtn.onclick = function(e){
    e.preventDefault();
   let base   = basecurr.value;
   let target = targetcurr.value;
   console.log( base, target);

   let baseAmount   = bc_amount.value; 
   if( baseAmount > 0 ){
       let convertedAmount = currencyRates[base][target] * baseAmount;
       // display the result of the conversion 
       tc_amount.value = convertedAmount;
   }else{
     alert("Sorry input invalid");
   }

}



const chatimage = document.querySelector(".chatimage");
const chatbox = document.querySelector(".chatbox");
const cancel = document.querySelector(".cancel");

chatimage.onclick = ()=>{
    chatbox.style.display ="block";
    chatbox.style.transition ="all 0.8s";
}

cancel.onclick = ()=>{
    chatbox.style.display ="none";
}
