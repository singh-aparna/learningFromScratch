const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("It's working!");
})
app.listen(4000, () => {
    console.log("Server is listenning on PORT 4000!");
})