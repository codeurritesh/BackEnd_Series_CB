const express = require('express');
const app = express();
// console.log(app);// it will return the huge object comming from the express server in the JS object.
// app.get('/', (req, res) => {
//     // res.send('Hello World!')
//   })
// app.use(    )
// app.use((req, res) => {// it will run every time when any request made from the server
//     // console.log(req);//It will return the object on which request name
//     // console.log(req.url);// only the text of requets will print
//     // console.log(typeof(req.url));
//     // res.send(`Hello this is ${req.url.substring(1)} Page`);//as per the request comming from the server it will print the data on to it.
//     res.send('<h1>this is using res.send with h1 tag</h1>');// we can also send the html tags inside the res.send( and send to the webpage).


// })

//----------------------------------------------------------Routing--------------------------------------
// by using the app.get() request we can send response at the prticular path.
//EXample: ->
app.get('/cat', (req, res) => {
    res.send('<h1>I am Cat </h1>');
})
app.get('/dog', (req, res) => {
    res.send('<h1>I am DOG</h1>');
})
app.get('/', (req, res) => {
    res.send('<h1>Home Cloud</h1>');
})
app.get('*', (req, res) => {// it is used for all other requests made.
    res.send('<h1>You are requesting the wrong URL.</h1>');
})
app.get('/user', (req, res) => {// it is used for all other requests made.
    res.send('<h1>this is server</h1>');
})
app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
 