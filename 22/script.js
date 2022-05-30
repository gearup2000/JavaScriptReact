"use strict";

let num = 50;


// while cycle
while (num <= 55) {
    console.log('while cycle outpus', num);
    num++;
}

//do cycle
let num2 = 50;
do {
    console.log('do cycle output', num2);
    num2++;
}

while (num2 < 55);

//for cycle
for (let i = 1; i < 8; i++) {
    console.log(i);
}

//for cycle working with num3 variable
let num3 = 50;
for (let i = 1; i < 8; i++) {
    console.log(num3);
    num3++;
}

//for cycle with break

for (let j = 1; j < 10; j++) {
    if(j === 6) {
        break;
    }

    console.log(j);
}


//for cycle with continue
for (let l = 1; l < 10; l++) {
    if(l === 6) {
        continue;
    }

    console.log(l);
}