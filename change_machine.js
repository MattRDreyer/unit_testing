function change_machine(amount) {
// var amount = 78;

let twenties = parseInt(amount/20);
let afterTwenty = amount%20;
let tens = parseInt(afterTwenty/10);
let afterTen = parseInt(amount%10);
let fives = parseInt(afterTen/5);
let afterFive = parseInt(amount%5);
let ones = parseInt(afterFive/1);
let afterOne = parseInt(amount%1);

return [twenties + ", " + tens + ", " + fives + ", " + ones];
}

module.exports = change_machine;
// (console.log([twenties + ", " + tens + ", " + fives + ", " + ones]))
