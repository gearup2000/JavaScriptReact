"use strict";


//AND operator
//true case

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('I am happy!');
    }


console.log((hamburger && fries));

// false case

const hamburgerWithBeef = 5;
const friesPotato = 0;

if (hamburgerWithBeef && friesPotato) {
    console.log('I am happy!');
    }
    
// 0, null, NaN, empty string, and undefined are always false


// 3 friends would like to eat 3 vegan hamburgers and 1 pizza

const hamburgerVegan = 2;
const pizza = 1;

if ( hamburgerVegan === 3 && pizza) {
    console.log('We are good!');
} else {
    console.log('We are leaving!');
}

// 3 friends would like to eat 3 big hamburgers, big pizza and cola
const hamburgerBig = 3;
const pizzaBig = 1;
const cola = 1;

// the last true result is 1 because of cola
console.log(hamburgerBig === 3 && cola && pizzaBig); 


if ( hamburgerBig === 3 && pizzaBig && cola) {
    console.log('We are good!');//the output is we are good because all are true
} else {
    console.log('We are leaving!');
}

//the returns will be the last result after comparing
            //stop
console.log(1 && 0); // true and false, the last result false and the output is 0

                 //stop
console.log(1 && 5); // true and true, the last result true and the output is 5

            //stop
console.log(null && 5); // false and true, the last result false ane the output is null

            //stop  
console.log(0 && 'some string'); // true and false, the last result false ane the output is 0



//OR operator
// 3 friends would like to eat 3 big hamburgers, big pizza and cola
const hamburgerOR = 3;
const pizzaOR = 0;
const colaOR = 0;

if ( hamburgerOR || pizzaOR || colaOR) {
    console.log('We are good!');//the output is we are good because we got at least something
} else {
    console.log('We are leaving!');
}

//example of OR operator
let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

// combination of 'AND' and 'OR'

const TV = 3;
const PC = 3;
const PS5 = 0;
const Phone = 2;
        
if ( TV === 3 && PS5 === 2 || PC === 3 && Phone === 1) {
    console.log('We are just fine!');
} else {
    console.log('We are really sad!');
}
               //1   //2    //1   //5   //3   //4    //3         //orders
console.log(TV === 3 && PS5 === 2 || PC === 3 && Phone); //output will be 2 (PS5)


console.log(TV === 3 && (PS5 === 2 || PC === 3) && Phone); //output will be 2

// '!' operator
console.log(!0); // output will be true, because 0 gives false and '!' changes it opposite