const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp').then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(err);
})
const movieScheme = new mongoose.Schema({//Creating Scheme for the incomming data from the mongoDB formats
    name: {
        type: String,
        Unique:[true,"NOUNIQU VALUESSSS!!!!!!!!!!!"],//used for no value for dulpicate name
        required: true, //It meanse thet this field is required
        minLength:5 // minimum length of the letter should be 5
    },
    year: {
        type: Number,
        min: 2010, // minimum should be
        max: 2023, // maximum length
    },
    rating: Number,
    iswatch: {
        type: Boolean,
        default:false //if value is not set then it will automatically set to default
    }
})
const Movies = mongoose.model('Movie', movieScheme);
Movies.create({ name:"ritesh", year: 2020, rating: 8.2 }).then(() => {
        console.log('Movie Added');
    })
//It is used to add one document in the Database.
// Movies.create({ name: "Ready", year: 2013, rating: 8.2, inwatch: true }).then(() => {
//     console.log('Movie Added');
// })

//It is used to insert many entries once.
// Movies.insertMany([{ name: "Money heist", year: 2016, rating: 9.2, inwatch: false }, { name: "Boss", year: 2011, rating: 7.2, inwatch: true }])

//It is used to fnd movie by filter
// Movies.find({ name: "OMG" }).then((mov) => {
//     console.log(mov);
// })

// It is only used to find one document from the database
// Movies.findOne({year:{$gt:2013} }).then((mov) => {
//     console.log(mov);
// })

//It is used to find document by one ID
// Movies.findById({_id:"643c2eed507c81a9b06fc622"}).then((mov) => {
//     console.log(mov);
// })

//Value is Updated by nae only used for one document
// Movies.updateOne({name:"OMG" },{year:2022}).then((mov) => {
//     console.log(mov);
// })

//Update all movie by query
// Movies.updateMany({year:{$gt:2013} },{iswatch:true}).then((mov) => {
//     console.log(mov);
// })

//It is used to find one document and then update thet document
// Movies.findOneAndUpdate({name:"OMG"},{year:2023}).then((mov) => {
//     console.log(mov);// it return the document before updation
// })

//It is used to delete one document form the database
// Movies.deleteOne({name:"OMG"}).then((mov) => {
//     console.log(mov);
// })

//It is used to delete many entries
// Movies.deleteMany({year:{$gt:2013} }).then((mov) => {
//     console.log(mov);
// })

