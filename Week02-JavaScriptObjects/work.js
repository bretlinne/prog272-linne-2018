var person = {
    firstName: "Curly",
    lastName: "Howard",
    fullName: function(){
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.firstName);
console.log(person.lastName);

// console.log(person.fullName());



// ---------------------
// Calculator
// ---------------------
var calculator = {
    operand01: -1,
    operand01: -1
};

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

console.log(calculator.operand01);
console.log(calculator.operand02);

//Add three methods with zero parameters that operate on operand01 and operand02:
//
// add
// subtract
// multiply
calculator