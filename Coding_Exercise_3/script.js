
//nested cycle
// for (let i = 0; i< 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


//************* tree nested cycle

// *
// **
// ***
// ****
// *****

// let result = '';
// const len = 7;

// for (let i = 1; i < len; i++) {
    
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

//cycle with label 'first' and continue

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


//cycle with label 'first' and break

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// First Task
function firstTask() {
    for ( let i = 5; i <= 10; i++) {
         console.log(i);
     }
     
 }
 
 // Second Task
 function secondTask() {
        for ( let k = 20; k >= 10; k--) {
            if (k === 13) break;
         console.log(k);
     }
     
     
 }
 
 // Third
 function thirdTask() {
 for ( let m = 2; m <=10; m++) {
     if (m % 2 === 0) {
         console.log(m);
     }
   }
 }


 //for cycle
//  for (let n = 2; n <= 16; n++) {
//     if (n % 2 === 0) {
//         continue;
//     } else {
//         console.log(n);
//     }
// }

let n = 2;

while (n <= 16) {
    if (n % 2 === 0) { 
        n++;
       continue;
    } else {
       console.log(n);
       }
       n++;
}

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}