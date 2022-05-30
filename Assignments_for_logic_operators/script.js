"use strict";

console.log( NaN || 2 || undefined ); // 2

console.log( NaN && 2 && undefined ); // NaN

console.log( 1 && 2 && 3 ); // 3
 
console.log( !1 && 2 || !3 ); // false
 
console.log( 25 || null && !3 ); //25

console.log( NaN || null || !3 || undefined || 5); //5
 
console.log( NaN || null && !3 && undefined || 5); //5
 
console.log( 5 === 5 && 3 > 1 || 5); //true

//output is Done! because fries and nuggets are enough
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

//output is Done! becuase nugget2 are enough
let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;
 
if (hamburger2 || cola2 || fries2 === 3 || nuggets2) {
   console.log('Done!');
}

//no output
let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;
 
if (hamburger3 && cola3 || fries3 === 3 && nuggets3) {
   console.log('Done!');
}

