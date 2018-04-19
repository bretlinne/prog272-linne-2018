
// normal function ops
function foo(){
    console.log("Immediately invoke with ES5");
}

// Anonymous Function
//how to write anonymous function.  MNo name
// is self-invoking
(function() {
    console.log("Immediately invoke with ES5");
})();


// both anon and arrow functions allow you to have a func be invoked immediately
// without having to explicitly call it.  we're never going to do anything else with
// this function besides use it right here.  An anonymous, self-invoked
// function is just a wrapper.  A useful example is for constructors or using
// local variables only in some particular scope.
(function (){
    console.log("anon function");
}
)();

//Arrow Function
// is self-invoking
((value) => {
    console.log("Immediate invocation ES6", value);
})('foobar');

const logger = (numbers) => {
    // iterate over the members of the array with forEach
    numbers.forEach((number, i) => {
        console.log(number, i);
    })
};

var numbers=['four', 'five', 'six'];
logger(numbers);

// Same functions, different Syntax
// ---------------------------------
// notice there are no checks for type.  This will concat strings and numbers
function addEs5(operanda, operandb) {
    return operanda + operandb;
}

const addEs6 = (operanda, operandb) => {
    return operanda + operandb;
};

const addConcise = (a, b) => a + b;

console.log(addEs5(2,'foo'));
console.log(addEs6(5, 7));
console.log(addConcise(12, 14));

// FOR OF
((numbers) => {
    for (let number of numbers) {
        console.log(number);
    }
})(['one', 'two', 'three']);

const loggerForOf = (numbers) => {
    for (let number of numbers) {
        console.log(number);
    }
};

loggerForOf(['four', 'five', 'six']);

// FOR...IN
// this code doesn't print the values, 'alpha', or 'omega'
// it prints the property labels.
console.log('----------------------------------');
const myObject = { first: 'alpha', last: 'omega' };
const loggerForIn = (myObject) => {
    for (let property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(property);
            // by using the square brackets, we can call the value to be displayed
            // OF the property in question.
            console.log(myObject[property]);
        }
    }
};

loggerForIn(myObject);

// CLASSES
// --------------------------------
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullName() {
        return this.first + ' ' + this.last;
    }

    //getLast = () => this.last;
    //transpile code from ES6 TO ES5 with REACT
}

var person = new Person('George', 'Washington');
console.log(person.fullName());
