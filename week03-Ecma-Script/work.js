
// immediately invoked function
((value) => {
    console.log("foo", value);
})('bar');

// immediately invoked func w/ foreach
let myArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
((value) => {
    value.forEach((val, i) => {
        console.log(val);
    })
})(myArray);

console.log("-----------------------------------------------");
// anon func using For..0f
myArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
(function (values){
    for (let value of values) {
        console.log(value);
    }
})(myArray);

// object literals and For...in

var address = {
    firstName: "Curly",
    lastName: "Howard",
    address: "123 Purly Gates",
    city: "St. PetersCloud",
    state: "Kingdom Connecticut",
    zip: "77777"
};


const addressFunc = (myObject) => {
    for (let property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(property + ":\t" + myObject[property]);
        }
    }
};

addressFunc(address);

//CLASS
class Calculator{
    constructor(operandA, operandB) {
        this.operandA = operandA;
        this.operandB = operandB;
    }
    add(operandA, operandB){
        return operandA + operandB;
    }
    subtract(operandA, operandB){
        return operandA - operandB;
    }
    multiply(operandA, operandB){
        return operandA * operandB;
    }
    divide(operandA, operandB){
        return operandA / operandB;
    }
}

myCalc = new Calculator();

console.log("--------------------------------------");
console.log(myCalc.add(2,3));
console.log(myCalc.subtract(5,2));
console.log(myCalc.multiply(3,5));
console.log(myCalc.divide(15,3));