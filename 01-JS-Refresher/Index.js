// js can be excuted in different environment 
// i ) in the browser
// ii) on any computer > js code can excute outside of the browser
// iii) you can build mobile app using js 




// 2) adding js code to a website 
// i) between script tag
// ii) via import script 





// 3) react project use a build process


// 4) i) imoport and export 
// ii ) default export
// iii )  import * as util from './util.js





// 5) Revisiting Variable & Values 

// there are different type of value

// i ) string  > text value 


// const str = "helloo world "
// console.log(str)


// ii) Number > Positive or Negative 
// with decimal is Float 
// or without decimal point > Integer 



// const age = 54;
// console.log(age)




// iii ) Boolean > True And False > means a simple yes or no type 
// typically used in condition 

// const age = 32;

// if(age > 35) {
//     console.log("the person to olld ")
// }
// else {
//     console.log("Smart Person")
// }


// Null and Undefined 

//  there is no Value 






// Variable store value : variable is simply data container where u store value . 


// why variable > readable and Reusable .



// Revisiting Operator > 

// const a = 56;
// const b = 32;

// const c = a + b ;
// console.log(c)

// and so on ...


// 7) 
// Revisiting Operator 
// function keyword 
// function name 
// parameter 
// callng or invoke a functioon 
// return type 
// default value in parameter


// 8)  Arrow function 

// const CreateArrowFunction = () => {
//     console.log("first")
// }
// CreateArrowFunction()





// 11 ) Object > can be used to group multiple key value pairs 
// > key will be upto u 

// const obj = {
//     name : "Hamid Meer",
//     age : 23,
// }

// console.log(obj.age)


// 12) Array > that can create a list of values 
// array method > push ,indexOf , map > map can convert array to object 



// 13 _) array destructuring > where we extrsct the element of the array and object 


// 14 )  Spread Operator > The three dots will be pull out all the eleemnt of the Array 


// const obj = {
//     name : "Hamid",
//     age : 23,
//     address : "Darsamand"
// }

// const obj2= {
//     ...obj,
//     Educartion : "BSSE 6th SEMISTER"
// }

// console.log(obj2) // all the key value pair pull but in the object here 




// Control Structure or Condition 


// Dom Manipulation > Select element in the dom mabnually in this code to then read and chnage them 



// Function as a value 


// regular function 

// function handleTimeOut () {
//     console.log("TimeOut1")
// }

// const handleFunction2 = () => {
//     console.log("TimeOut2")
// }

// setTimeout(handleTimeOut,2000)
// setTimeout(handleFunction2,3000)

// setTimeout(() => {
//  console.log("More time out ")
// },4000)




// Define  a function > inside a funtion 

// function init () {
//     function greet() {
//         console.log("Hey")
//     }
//     greet() // we can excute greet inside in init 
// }
// init() 


// but we can't excute greet outside of init 



// refrence and Primitve  

// primitive > we can't edit them 

// refrence > we can edit them

// adress of data in memory 


