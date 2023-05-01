const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("Thi is home page");
})
app.get('/dogs/:name/:co', (req, res) => {//Path parameters :name 
    console.log(req.params);// return object with all path parameters
    res.send(`We are finding for ${req.params.name} dog of ${req.params.co}`);// return the value of name key in Path parameters
})

app.get('/cats', (req, res) => {//Query parameters
    console.log(req.query)// It will return the object which contains all the query
    res.send(`we are searching for ${req.query.n} and ${req.query.p}`);// it display the current query made
})
app.listen(port, () => {
    console.log("Server is running at port 3000")
})

