/*
1. For loop: 
     a) for -- of loop
     b) for -- in loop
     c) normal for -loop
2. while loop
3. do - while loop
*/


// print number from 1 to 10
for(let x = 0; x<=10; x++){ 
     //   break;
    // if( x == 5) break;
    if( x == 5) {
        continue;
    }
    console.log( x );
}

const nums = [4560,55890,34000,411200];

for(let i = 0; i < nums.length; i++){
    console.log(i, nums[i]);
}


for(let num of nums){
    let bonus   = num * 0.35;
    let newSala = num + bonus;
    console.log(
        num, 
        bonus, 
        newSala.toLocaleString('en')
        );
}


let myObj = {
      worth:100,
      school:"NGN",
      currency:"NGN",
      books:["Things fall apart","There was a country","Joys of Motherhood"],
}

const values = Object.values( myObj );
const keys   = Object.keys( myObj ); 
const entries = Object.entries( myObj );
console.log( values );
console.log( keys );
console.log( entries );


// Fo-in
for( let obj in myObj){
    console.log( obj,  myObj[obj]);
}

console.log( entries );



//  while loop
let index  = 0;
while(index < nums.length){
    console.log( nums[index] );
    index++;
}

const copyArr = nums.slice();
console.log( copyArr ); 

let counter = copyArr.length;
while( counter >=0 ){
    console.log( copyArr[counter] );
    copyArr.splice( counter, 1 );
    counter--;
}

// do{
    
// }while()


