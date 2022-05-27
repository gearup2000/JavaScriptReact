"use scrict";
// operators

console.log('arr' + " - object"); // arr - object
console.log(4 + " - object"); // 4 - object
console.log(4 + +" - object"); // Nan
console.log(4 + "5"); // 45
console.log(4 + +"5"); // 9


//increment and decriment prefix method
let incr = 10, 
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

//increment and decriment postfix method

++incr;
--decr;

console.log(incr);
console.log(decr);

//increment and decriment prefi and postfix methods
let incr2 = 5,
    decr2 = 5;

    // output will be 5 in both cases, because it 
//show incr2 and decr2 values before the incementing and decreminting
console.log(incr2++); 
console.log(decr2++); 

let incr3 = 5,
    decr3 = 5;
// output will be 6 and  4, because it 
 //show incr2 and decr2 values after the incementing decreminting
console.log(++incr3);
console.log(--decr3);

console.log(5%2); // output 1

// = means equal, for example number = 1, the variable number will be equal 1
// == comparing, e.g console.log(2*4 == 8); the output will be TRUE, since 2*4=8 and 8=8
// console.log(2*4 == '8'); also true
// strict comparing
// console.log(2*4 === '8'); false, because 2*4=8 and the output is number, while '8' is a string

// && and operator (both cases must be true)
// || or operator (one of the cases must be true)

const isChecked = true,
      isClose = true,
      isOpen = false,
      isMarked = false;

console.log(isChecked && isClose); // output is true

console.log(isChecked || isOpen); // output is true, since isCheked is true.

console.log(isMarked || !isOpen); 
// output is true,since isOpen was false,but ! symbol changed is oppositely to the true.


