"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// normal function ops
function foo() {
    console.log("Immediately invoke with ES5");
}

// Anonymous Function
//how to write anonymous function.  MNo name
// is self-invoking
(function () {
    console.log("Immediately invoke with ES5");
})();

// both anon and arrow functions allow you to have a func be invoked immediately
// without having to explicitly call it.  we're never going to do anything else with
// this function besides use it right here.  An anonymous, self-invoked
// function is just a wrapper.  A useful example is for constructors or using
// local variables only in some particular scope.
(function () {
    console.log("anon function");
})();

//Arrow Function
// is self-invoking
(function (value) {
    console.log("Immediate invocation ES6", value);
})('foobar');

var logger = function logger(numbers) {
    // iterate over the members of the array with forEach
    numbers.forEach(function (number, i) {
        console.log(number, i);
    });
};

var numbers = ['four', 'five', 'six'];
logger(numbers);

// Same functions, different Syntax
// ---------------------------------
// notice there are no checks for type.  This will concat strings and numbers
function addEs5(operanda, operandb) {
    return operanda + operandb;
}

var addEs6 = function addEs6(operanda, operandb) {
    return operanda + operandb;
};

var addConcise = function addConcise(a, b) {
    return a + b;
};

console.log(addEs5(2, 'foo'));
console.log(addEs6(5, 7));
console.log(addConcise(12, 14));

// FOR OF
(function (numbers) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var number = _step.value;

            console.log(number);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
})(['one', 'two', 'three']);

var loggerForOf = function loggerForOf(numbers) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = numbers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var number = _step2.value;

            console.log(number);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
};

loggerForOf(['four', 'five', 'six']);

// FOR...IN
// this code doesn't print the values, 'alpha', or 'omega'
// it prints the property labels.
console.log('----------------------------------');
var myObject = { first: 'alpha', last: 'omega' };
var loggerForIn = function loggerForIn(myObject) {
    for (var property in myObject) {
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

var Person = function () {
    function Person(first, last) {
        _classCallCheck(this, Person);

        this.first = first;
        this.last = last;
    }

    _createClass(Person, [{
        key: "fullName",
        value: function fullName() {
            return this.first + ' ' + this.last;
        }

        //getLast = () => this.last;
        //transpile code from ES6 TO ES5 with REACT

    }]);

    return Person;
}();

var person = new Person('George', 'Washington');
console.log(person.fullName());