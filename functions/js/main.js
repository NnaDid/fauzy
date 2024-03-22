// THe math Object
const val = 55.77
 
console.log('Floor:', Math.floor(val) );
console.log('Ceil:',  Math.ceil(val) );
console.log('Round:', Math.round(val) );

// finding the max and min of a set of numbers
const nums = [ 234, 876, 4519, 1211, 101,3210];
console.log('Maximum:', Math.max(...nums) );
console.log('Minimum:', Math.min(...nums) );


// Trigonometry 
const degree = 30;
// NB:  2PI = 360 degrees
//      PI = 180 degrees
//      PI/2 = 90 degrees
// => PI/180 = 1 degree

console.log("Sin30:", Math.sin(degree * Math.PI / 180))
console.log("Cos30:", Math.cos(degree * Math.PI / 180))
console.log("Tan30:", Math.tan(degree * Math.PI / 180))



// Generate Random Numbers
let randomNum = Math.random();
console.log('Random Number between 0 - 1 : ', Math.floor( randomNum * 100 + 1));

function shuffleString(str) {
    // Convert string to array
    let arr = str.split('');
    // Shuffle the array
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    // Convert array back to string
    return arr.join('');
  }

// Application of the MAth.random();
let mcStr = "ABCDEFabcdef" + Math.floor( Math.random()*1000 + 1 );
    mcStr = shuffleString(mcStr);
let body = document.body; 
body.style.backgroundColor = '#'+mcStr.substring(0,6) ;
console.log(mcStr.substring(0,6))





//  DATE OBJECT
const dt = new Date();
console.log( dt );
console.log( dt.toISOString() );
console.log( dt.toLocaleDateString() );
console.log( dt.getFullYear() );
console.log( 'Day',dt.getDay() );
console.log( 'Hours',dt.getHours() );
console.log( 'Minutes',dt.getMinutes() );
console.log( 'Seconds',dt.getSeconds() );



// use case of the Date Object 
// digital clock
const clock = document.querySelector(".clock");
const stop = document.querySelector(".stop");

let timer = setInterval(()=>{
                let date    = new Date();
                let hours   = date.getHours() > 12 ?   '0' + (date.getHours() - 12)  : date.getHours();
                let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

                clock.innerHTML = hours + ':' + minutes + ':' + seconds

            },1000);

//  stop the timer wherver the stiop button is clicked 
    stop.addEventListener('click',function(){
       clearInterval(timer);
    });




    //  Functions
    function  greetings() {
         alert("Helolo oooooo Goood afternoon");
    }

    const myfunc = function(){
           let username = prompt("What is your name ","");
               username = username?.trim(); 
           if (username == null || username == "") {
              alert("Please enter your username");
           }else{
              document.querySelector(".username").innerHTML = `Welcome ${username}`;
           }
          
      }

    
      // Arrow function

  const mySecondFUnc = ()=>{
    console.log("I am here");
  }


  // functions with argument
  const multiply = function(a,b){
      return a * b;
  }

  let prod = multiply(5,25);
  console.log(prod);

  const multiply2 = (a,b) => a*b ; 

  let prod2 = multiply2(40,2);
  console.log( prod2);


  // callback function 
  
const showMe = (x)=>{
       document.querySelector(".result").innerHTML = x;
}

const calcMean = (func)=>{
   let myProduct = multiply2(33,10);
   func(myProduct);
}


calcMean(showMe);


  
  


