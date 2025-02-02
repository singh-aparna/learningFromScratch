//Destructuring is a JavaScript feature that allows extracting values from arrays or objects
//into variables in a concise way. 🚀

//1//Object Destructuring
const profile = {
    name: "Aparna Singh",
    designation: "SE",
    experties: "MERN Stack",
    yoe: "3+"
}

const { name: name1 } = profile;
//console.log(name);   Error:ReferenceError: Cannot access 'name' before initialization
console.log(name1);

//2//Array Destructuring
const profileMe = [{
    name: "Aparna Singh",
    designation: "SE",
    experties: "MERN Stack",
    yoe: "3+"
}]

const [{ name }] = profileMe;
console.log(name);

//3//💡 Question: How do you extract values from an array using destructuring?
const colors = ["red", "blue", "green"];
const [first, second, third] = colors;
console.log(first, second, third); // Output: red blue green

//4//💡 Question: How can you ignore elements while destructuring an array?
const numbers = [1, 2, 3, 4];
const [firstt, , thirdd] = numbers;
console.log(firstt, thirdd); // Output: 1 3

//5//💡 Question: How can you provide a default value while destructuring an object?
const person = { namee: "Alice" };
const { namee, age = 30 } = person;
console.log(namee, age); // Output: Alice 30


//6//💡 Question: How can you rename variables while destructuring?
const user = { fullName: "Emma", country: "USA" };
const { fullName: name2, country: locationName } = user;
//Avoid using location as a variable name in the browser environment
//since it's a reserved global property (window.location).
console.log(name2, locationName); // Output: Emma USA

//7//💡 Question: How do you extract values from a nested object?
const student = { nameee: "John", details: { agee: 20, grade: "A" } };
const { nameee, details: { agee, grade } } = student;
console.log(nameee, agee, grade); // Output: John 20 A

//8//💡 Question: How can you swap two variables using destructuring?
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // Output: 10 5

