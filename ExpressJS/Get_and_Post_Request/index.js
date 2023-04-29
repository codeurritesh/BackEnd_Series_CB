const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => { console.log('Server is running at port 3000') });
app.use(express.urlencoded({ extended: true }));//used to change the default setting of the request.body
// undefined to data but it is used for url data
//app.use(express:json) it is used to provide json data in the request.body
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    // res.send('Get Post Request')
    res.render('home')
})
app.get('/Submitted', (req, res) => {//int get requeust there is data in url.
     res.send('Get Request')

    console.log(req.query);
    //{ UserName: 'ritesh', age: '22' } will print which is in the url
    // res.send(req.query)
})
app.post('/Submitted', (req, res) => {//int post request there is no data present inside url it is abstracted.
    res.send('Post Request')
    // console.log(req.body);//by efaut it will return the undefined value
console.log(req.body);//after using Middleware "app.use(express.urlencoded({ extended: true }));" data comming from form will store into the request.body
   // res.send(req.query)
})