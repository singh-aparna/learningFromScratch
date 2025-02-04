//Object.keys()
//Returns an array of a given object's property names.

const obj = { name: "Alice", age: 25 };
const keys = Object.keys(obj);
console.log(keys); // Output: ["name", "age"]

//Object.values()
//Returns an array of a given object's property values.

const obj1 = { name: "Alice", age: 25 };
const values = Object.values(obj1);
console.log(values); // Output: ["Alice", 25]

//Object.entries()
//Returns an array of a given object's key-value pairs.

const obj3 = { name: "Alice", age: 25 };
const entries = Object.entries(obj3);
console.log(entries); // Output: [["name", "Alice"], ["age", 25]]

//Object.assign()
//Copies all enumerable own properties from one or more source objects to a target object.

const target = { name: "Alice" };
const source = { age: 25 };
Object.assign(target, source);
console.log(target); // Output: { name: "Alice", age: 25 }

//Object.freeze()
//Freezes an object, making it immutable (cannot add, modify, or delete properties).

const obj4 = { name: "Alice" };
Object.freeze(obj4);
obj.name = "Bob"; // This won't work
console.log(obj.name); // Output: "Alice"

//Object.fromEntries()
//Converts a list of key-value pairs into an object.

const entries1 = [["name", "Alice"], ["age", 25]];
const obj5 = Object.fromEntries(entries1);
console.log(obj5); // Output: { name: "Alice", age: 25 }

//delete
//Deletes a property from an object.

const objj = { name: "Alice", age: 25 };
delete objj.age;
console.log(objj); // Output: { name: "Alice" }

//hasOwnProperty() - return boolean
//Checks if an object has the specified property as its own (not inherited).

const obj6 = { name: "Alice" };
console.log(obj6.hasOwnProperty("name")); // Output: true
console.log(obj6.hasOwnProperty("age"));  // Output: false


//Way to copy object by creating separate memory for both
// const object = {name:"Aparna", age:28};
// const newObject = {};
// Object.assign(newObject, object);
// newObject.name = "Ankkita";
// console.log(object);
// console.log(newObject);




