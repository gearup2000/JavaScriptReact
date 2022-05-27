"use scrict";

//alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Are yiu older than 18?", "18");
// console.log(typeof(answer)); // respons always a string

// const answer = +prompt("Are yiu older than 18?", "18");
// console.log(typeof(answer)); // respons will be a number because of + sign before of promt

const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your family name?', '');
answers[2] = prompt('How old you are?', '');

// document.write(answers);
console.log(typeof(answers));