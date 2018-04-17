#!/usr/bin/env node

var person = {
    firstName: "Curly",
    lastName: "Howard",
    fullName: function(){
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};


function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

// ---------------------
// Calculator
// ---------------------
var calculator = {
    operand01: -1,
    operand02: -1,
    add: function(){
		'use strict';
		return 'Add: ' + (this.operand01 + this.operand02);
	},
	subtract: function(){
		'use strict';
		return 'Subtract: ' + (this.operand01 - this.operand02);
	}
}
calculator.multiply = function(){
	return 'Multiply: ' + (this.operand01 * this.operand02);
}

//Add three methods with zero parameters that operate on operand01 and operand02:
//
// add
// subtract
// multiply


divider('Person');
console.log(person.firstName);
console.log(person.lastName);

console.log(person.fullName());

divider('Calculator');
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

console.log('operand1 = ' + calculator.operand01);
console.log('operand2 = ' + calculator.operand02);

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());

