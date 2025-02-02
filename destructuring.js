//Destructuring is a JavaScript feature that allows extracting values from arrays or objects
//into variables in a concise way. 🚀

//Object Destructuring
const profile = {
    name: "Aparna Singh",
    designation: "SE",
    experties: "MERN Stack",
    yoe: "3+"
}

const { name: name1 } = profile;
//console.log(name);   Error:ReferenceError: Cannot access 'name' before initialization
console.log(name1);

//Array Destructuring
const profileMe = [{
    name: "Aparna Singh",
    designation: "SE",
    experties: "MERN Stack",
    yoe: "3+"
}]

const [{ name }] = profileMe;
console.log(name);