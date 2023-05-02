const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const {uuid}= require('uuidv4');//it is used to generate the globally unique ID can call using the uuid() function
app.listen(port, () => { console.log('Server is running at port 3000') });
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));//used to change the default setting of the request.body
app.use(express.static(path.join(__dirname, 'Public')));
const methodOverride = require('method-override')//it is used to over ride the POST request with the other request like delete or patch
//by using the?method=POST or ?method=DELETE in the URL of thr form
app.use(methodOverride('_method'))
//--------------------------------------------RESTful routes------------------------------------------------------------

const comments = [{
    id: uuid(),
    username: 'ritesh',
    text: 'Nice Products!!!'
}, {
    id: uuid(),
    username: 'Tanya',
    text: 'Bad Products!!!'
}, {
    id: uuid(),
    username: 'Surbhii',
    text: 'WOW Products!!!'
}, {
    id: uuid(),
    username: 'Priyanshi',
    text: 'No Products!!!'
    }];
// ----------------------------------------------DISPLAY Using Get Request--------------------------------------------
app.get('/', (req,res) => {
    // res.send('This is hoome page');
    res.send('<a href="/comments"><button>All Comments</button></a>')  
})
//list all the comments
app.get('/comments', (req,res) => {
    res.render('index',{comments});   
})
//--------------------------------------------Adding new comments-----------------------------------
app.get('/comments/new', (req,res) => {
    res.render('new'); 
})
//handle the comments and adding to comments array
app.post('/comments', (req, res) => {//----------------------------------POST Request
    // console.log(req.body);
    // comments.push(req.body)
    //or 
    const { username, text } = req.body;
    comments.push({ username, text, id:uuid() });
    // res.send('    <a href="/comments"><button>All Comments</button></a>')   
    res.redirect('/comments');// it is used to do somewhere on other page
})
//----------------------------------------------SHOW-------------------------------------------
app.get('/comments/:id', (req, res) => {
    console.log(req.params);
    let id = parseInt(req.params.id);
    console.log(id);
    for (let comment of comments) {
        if (comment.id == id)
        {
            res.render('show',{comment});
            }
    }
    res.send('This is ShowCase Page')
    
})
// --------------------------------------------------- DELETE-------------------------------------
    
app.delete('/comments/delete/:id', (req, res) => {//it is used to delete the perticular request
    const id = req.params.id;
    for (let comment of comments) {
        if (comment.id == id)
        {
            let ind = comments.indexOf(comment);
            comments.splice(ind,1);//deleting the comment
            console.log(comments);
            // res.send('Comment Deleted');
            res.render('index', { comments });
            }
    }
})
app.get('/comments/edit/:id', (req, res) => {
    const comt = comments.find((comment) => {
        if (comment.id == req.params.id) {
            // console.log(comment);
              res.render('edit', {comment}); 

        }
    })
});
//-----------------------------------------------------PATCH Request------------------------------

app.patch('/comments/:id', (req, res) => {//pattch request is used to apply the partial modification
    comments.find((comment) => {
        if (comment.id == req.params.id) {
            comment.text = req.body.text;

        }
        // res.redirect('/comments');
    console.log(comments);

        res.render('index', { comments });

    })
})

 
