const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');
//CommonJS (require/module.exports) is used in Node.js for synchronous module loading
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
//This middleware parses incoming URL - encoded form data(e.g.,
//from an HTML form with application/x-www-form-urlencoded content type) and makes it available in req.body.
// When to use false vs. true?
// Use false (default) if you expect simple key-value pairs in forms.
// Use true if you need to handle complex/nested data (e.g., objects, arrays).

app.use(cors(
    {
    origin:"http://localhost:3000"
}));

//custom middleware
app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n${Date.now()}: ${req.method}: ${req.path}`, (err, data) => {
        next();
    })
})

app.get('/', (req, res) => {
    //res.send("It's working!");
    res.json({ message: "index.js is working!" })
})

app.get('/recipies', (req, res)=>{
    res.send(res);
})

app.get('/ip', (req,res)=>{
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(clientIP);
    return res.send(`Request from ${clientIP}`);
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
app.post('/api/users', (req, res) => {
    const body = req.body;
    //console.log('Body', body);
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {//fs module will make sure new users are saved to a file
        //save the updated users' list to a JSON file.
        //If you only push the new user into the users array, the change will exist only while the server is running.
        //If the server restarts, all new users will be lost because users is just a temporary in-memory array.
        //Files store data as text, not as JavaScript objects.
        if (err) console.log(err);
        else console.log("Data saved!");
        return res.send({ status: "Success", id: users.length });
    });
})




app.patch('/api/users/:id', (req, res) => {
    return res.json({ status: "Pending" });
})

app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    fs.readFile('./MOCK_DATA.json', users, (err) => {
        if (err) console.log(err);
    })
    const user = users.filter(user => user.id === id);
    console.log(user);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success" });
    })
})

app.listen(4000, () => {
    console.log("Server is listenning on PORT 4000!");
})


