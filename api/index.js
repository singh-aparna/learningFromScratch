const express = require('express');
const users = require('./MOCK_DATA.json');
//CommonJS (require/module.exports) is used in Node.js for synchronous module loading
const app = express();
app.get('/', (req, res) => {
    //res.send("It's working!");
    res.json({ message: "index.js is working!" })
})
//res.json() automatically sets the Content-Type to application/json and converts the response to JSON,
//while res.send() can send any type of response (string, object, buffer, etc.).

//Route
//users json data - mockarro.com
app.get('/api/users', (req, res) => {//(/api/users) means - will throw json data - hybrid server which support both browser & mobile apps
    return res.json(users);
})

app.get('/users', (req, res) => {  //(/users) means render html document - hybrid server - good practice
    const html = `<ul>${users.map(user => `<li>${user.first_name}</li>`).join('')}</ul>`;
    return res.send(html);
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
})

// PUT: Full update — Replace the entire resource.
// PATCH: Partial update — Modify only specified fields.






app.listen(4000, () => {
    console.log("Server is listenning on PORT 4000!");
})


