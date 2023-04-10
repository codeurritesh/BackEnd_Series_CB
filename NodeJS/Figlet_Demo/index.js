// const figlet = require('figlet');
// figlet('CODING BLOCKS!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

//========================================== Using figlet with colors =========================================
const figlet = require('figlet');
const colors = require('colors');
figlet('CODING BLOCKS!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);//it print colored text
});

/*
output:(it is colored text)
   ____ ___  ____ ___ _   _  ____   ____  _     ___   ____ _  ______  _ 
  / ___/ _ \|  _ \_ _| \ | |/ ___| | __ )| |   / _ \ / ___| |/ / ___|| |
 | |  | | | | | | | ||  \| | |  _  |  _ \| |  | | | | |   | ' /\___ \| |
 | |__| |_| | |_| | || |\  | |_| | | |_) | |__| |_| | |___| . \ ___) |_|
  \____\___/|____/___|_| \_|\____| |____/|_____\___/ \____|_|\_\____/(_)
  */

/*
output: 
   ____ ___  ____ ___ _   _  ____   ____  _     ___   ____ _  ______  _ 
  / ___/ _ \|  _ \_ _| \ | |/ ___| | __ )| |   / _ \ / ___| |/ / ___|| |
 | |  | | | | | | | ||  \| | |  _  |  _ \| |  | | | | |   | ' /\___ \| |
 | |__| |_| | |_| | || |\  | |_| | | |_) | |__| |_| | |___| . \ ___) |_|
  \____\___/|____/___|_| \_|\____| |____/|_____\___/ \____|_|\_\____/(_)
  */