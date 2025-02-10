//Closure-1
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y; // "x" is remembered from outer scope
    };
}
const addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8

//closure-2
function closure() {
    var count = 0;
    return {
        increase: ++count,
        print: console.log(count)
    }
}
let output = closure();
console.log(output);