"use strict";

if (4 == 9) {console.log('Ok!');}
else {console.log('Error!');}

const num = 50;

    if(num < 49) {console.log('Error');}
     else if (num > 100) {console.log('Too much');}
      else {console.log('Ok!');}

      const num2 = 50;
        (num2 == 50) ? console.log('Ok!') : console.log('Error!');


    const num3 = 51;
    switch (num2) {
        case 49:
            console.log('Not correct!');
            break;
        case 100:    
            console.log('Not correct!');
            break;
        case 50:
            console.log('Correct!');
            break;
        default:
            console.log('Not this time!');
            break;
    } 

    const num4 = '50';
    switch (num3) {
        case '49':
            console.log('Not correct!');
            break;
        case '100':    
            console.log('Not correct!');
            break;
        case '50':
            console.log('Correct!');
            break;
        default:
            console.log('Not this time!');
            break;
    } 