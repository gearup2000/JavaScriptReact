"use strict";

a = 15;
console.log(a);

let number = 5;
const leftBorderWidth = 1;


number = 10;
console.log(number);

const obj = {
    a: 50
};
console.log(obj);

{
    let result = 50;
    const result2 = 5;
    var result3 = 6;
}

console.log(result3);

const objNew = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(objNew.name)
console.log(objNew["name"]);

const arr2 = [1, 2, 3, 'a', 'b', 'c'];
console.log(arr2[1]);
console.log(arr2[5]);

const arrObj = {
    0:1,
    1:2,
    2:3,
    a:'a letter',
    b:'b letter',
    6:'c letter',
    abc: {
        df: [{}]
        def: {

        };
    }
};
arrObj.d = '1234';
const z = 'z';
arrObj[z] = 'zzz';

console.log(arrObj.z); // working output zzz
console.log(arrObj['d']); // working output 1234
console.log(arrObj.d); // working output 1234
console.log(arrObj[6]); //working output c letter
console.log(arrObj.a);  //working output a letter
console.log(arrObj[0]);  //working output 1
console.log(arrObj.b);  //working output b letter

const obj2 = {
    'Anna':500,
    'Alice':800};

console.log(obj2.Anna );
console.log(obj2['Alice']);
