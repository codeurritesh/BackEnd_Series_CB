// var giveMeAJoke = require('give-me-a-joke');

// // To get a random dad joke
// giveMeAJoke.getRandomDadJoke (function(joke) {
//  console.log(joke);
// });

// // To get a random Chuck Norris joke
// giveMeAJoke.getRandomCNJoke (function(joke) {
//   console.log(joke);
// });

// // To get a customized joke
// var fn = "Jackie";
// var ln = "Chan";
// giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
//      console.log(joke);
// });

// // To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
// var category = "blonde";
// giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
//      // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
//      console.log(joke);
// });

// ===============================================COLOR NPM======================================
var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass