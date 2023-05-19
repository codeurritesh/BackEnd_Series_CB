const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', express.static(path.join(__dirname, 'Public')));// AT /Cat it automatically render to the index.html file present inside the public folder.
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("CSR-SSR");
})
const todos = ["Go to gym", "Buy Products", "Watch Movie", "Coding", "Go to shopping"];

app.get('/todos', (req, res) => { // sending response from the url to the client
    res.render('todo', { todos });//for SSR
    // res.json(todos);//sending response as data of todo list USED FOR CSR
});

app.post('/todos', (req, res) => {//handling Post request comming from the client 
    // console.log('Index page');
    // const data = req.body.data;//collecting data comming from the client side in req.body
    // console.log(data);
    todos.push(req.body.item);//adding data to the Array.
    res.render('todo',{todos});
    // res.json(todos);//Sending new new Array used for CSR
});

app.listen(port, () => {
    console.log('Server is running at port 3000')
});