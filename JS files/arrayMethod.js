// push()
// Adds new elements to the end of an array.

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

// pop()
// Removes the last element from an array and returns it.

const arr1 = [1, 2, 3];
arr1.pop();
console.log(arr1); // Output: [1, 2]

// shift()
// Removes the first element of an array and returns it.

const arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // Output: [2, 3]

// unshift()
// Adds new elements to the beginning of an array.

const arr4 = [1, 2, 3];
arr4.unshift(0);
console.log(arr4); // Output: [0, 1, 2, 3]

// map()
// Creates a new array with the results of calling a provided function on every element in the array.

const arr5 = [1, 2, 3];
const result = arr5.map(num => num * 2);
console.log(result); // Output: [2, 4, 6]

// filter()
// Creates a new array with all elements that pass the test implemented by the provided function.

const arr6 = [1, 2, 3, 4, 5];
const filtered = arr6.filter(num => num > 2);
console.log(filtered); // Output: [3, 4, 5]

// forEach()
// Executes a provided function once for each array element.
//The.forEach() method does not return a new array; it simply executes a function on each element of the array.
//Since you are not storing the modified values, arr8 will be undefined.
const arr7 = [1, 2, 3];
const arr8 = arr7.forEach(num => num * 2); // Output: 1 2 3
console.log(arr8);
console.log(arr7);

//reduce()
//Applies a function against an accumulator and each element in the array to reduce it to a single value.

const arr9 = [1, 2, 3];
const sum = arr9.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 6

