const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static(path.join(__dirname,"Public")));//it is used to give path to the static file like css and js files
app.set('view engine', 'ejs');//App.set is just use to set the properties
app.set('views', path.join(__dirname, 'views'));// with this we give the path to the render to open the file from any path.
// view engine is just used for templating  which is set to ejs.
app.get('/', (req, res) => {
    res.send("Hello this is home page");
});
app.get('/home', (req, res) => {//it is used to open the ejs file at the path ejsfile
    res.render('home');// It is used to render or open a ejs file.
    //render will defult take the path of process.cwd+views due to this we can not run the file from outside the folder
    // to resolve this issue we set the views path to __dirname+views
})
app.get('/random', (req, res) => {
    res.render('randon');
})
app.get('/about', (req, res) => {
    res.send("About");
})
const todos = ["Watch movie", "LeetCode", "HomeWork", "Web DEV"];
app.get('/todos', (req, res) => {
    res.render('todo', { todos });
})

app.listen(port, () => { console.log('Server is running at port 3000') });

