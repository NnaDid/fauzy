let ar1 = [76,87];
let ar2 = [76,87];
 
let x = 10;
let y = "10";

console.log( x == y)
console.log( ar1.toString() == ar2.toString() )
console.log( ar1.join(" ").toString(), ar2.join("").toString() )
console.log( typeof ar1, typeof ar2)


let second_item = ar2[1];
ar2[1] = 3409;
ar2[10] = 23;

console.log( ar2 )
// Javascript Object Data Structure 


// map, forEach and filter method of the array
let salary = [24, 50, 75, 12, 44];
salary.forEach( function(item, i){
     let newSalary = item + item/2; // add bonus to sallary
    console.log(`At position ${i}: New Salary: ${newSalary}`)
} );


// using the map method val = val + val/2
const newSal  = salary.map( ( val ) => val+=val/2  );
const newSal2 = salary.map( ( val ) => { return val+=val/2 } );

console.log(newSal)
console.log(newSal2)


// using the array filter method

let salary25Less = salary.filter( (val)=> val<=25 ); // get all vales that <=25
console.log(salary25Less);

//using the forEach to return new set of salaries array
const newSetSala = [];
salary.forEach( function(item, i){
    let newSalary = item + item/2; // add bonus to salary
    newSetSala.push(newSalary);
} );
console.log( newSetSala );

let myObj = { 
             title:"Dr.",
             firstName:"Adedu", 
             surName:"Sluemain", 
             test:function(){ 
                return this.title
            } 
        };

// reading values from an object
console.log( myObj.title)     // using the dot notation
console.log( myObj['title'])  // using the [] notation


//add more ppoperties
myObj.netWoth = 98000;
myObj.getBio = function(){
    return this.surName +" "+ this.firstName
};
myObj['country'] = "Nigeria";


console.log(myObj)
console.log(myObj.test())
console.log(myObj.getBio())



let school = [
    {"name":"Daniel DAnito","age":15, "class":"PR3", "subjects":['ENG',"MATH","CIVIC"]},
    {"name":"Gabriel Chukwudi","age":13, "class":"PR2", "subjects":['ENG',"MATH","AGR"]}, 
    {"name":"Amina Machine","age":15, "class":"PR4", "subjects":['ENG',"MATH","AGR"]}, 
    {"name":"Kabir Sunday","age":15, "class":"PR3", "subjects":['ENG',"MATH","AGR"]}, 
    {"name":"China Lawal","age":13, "class":"PR3", "subjects":['ENG',"MATH","AGR"]}, 
    {"name":"Mathhew Fam","age":14, "class":"PR2", "subjects":['ENG',"MATH","AGR"]}, 
    {"name":"Kege Chege","age":13, "class":"PR4", "subjects":['ENG',"MATH","AGR"]}, 
    {"name":"Kolin Kotlin","age":14, "class":"PR4", "subjects":['ENG',"MATH","AGR"]}, 
];


// get student whose age is 13
let age13Student = school.filter( (student) => student.age === 13 );
console.log( age13Student )

let pri2Student = school.filter( (student) => student.class === "PR2" );
console.log( pri2Student )


let evenAgeStudent = school.filter( (student) => student.age%2 == 0 );
console.log( evenAgeStudent )


// Object and array destructuring
const { title, country} = myObj;
console.log(`${title} is from ${country}`);

// detructuring array
let options = [24, 50, 75, 12, 44];
const [,sal1, ,sal2] = options;
console.log( sal1, sal2 );


// REST and SPREAD operators
let obCopy = { ...myObj, height:120, color:'blaky'};
console.log( obCopy );

// spread opereator with an array
let arCopy = [ ...options];

console.log(options.splice(0))

