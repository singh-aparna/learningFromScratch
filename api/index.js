const express = require('express');
//CommonJS (require/module.exports) is used in Node.js for synchronous module loading
const app = express();
app.get('/', (req, res) => {
    //res.send("It's working!");
    res.json({ message: "It's working!" })
})
//res.json() automatically sets the Content-Type to application/json and converts the response to JSON,
//while res.send() can send any type of response (string, object, buffer, etc.).
app.listen(4000, () => {
    console.log("Server is listenning on PORT 4000!");
})

//API (Application Programming Interface) is a set of rules that allows different software
//applications to communicate with each other.

