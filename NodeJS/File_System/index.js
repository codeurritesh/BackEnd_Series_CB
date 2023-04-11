const fs = require('fs');// we are Accessing the Default modules File System
// const data = 'Hello from the file system';
// how to write this data in the file?
//-----------------------------fs.writeFIle(name,data,option,callback)--------------
//encoding:'utf-8' sjows the type of data
// flag:'w' used to write in the file
//flag:'r' used to read from the file
// fs.writeFile('new.txt', data, {
//     encoding: 'utf8',
//     flag:'w'
// }, (err) => {
//     if (err)
//        throw err
//     console.log('file written sucessfully')
// }
// )
//if file is not there then it will automatically create new file

//-----------------------------fs.readFile(name,data,option,callback)----------------
//give option is the optional
//but is we do not give encoding to utf-8 then we need to convert the data tostring();
// fs.readFile('new.txt', (err,data) => {
//     if (err) {
//         throw err;
//     }
//     else console.log(data.toString());
// })
//------------------------------Appending using readFile()-----------------------

// fs.readFile('new.txt', { encoding: 'utf-8', flag: 'r' }, (err,data) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log(data);
//         data += 'NEW APPENDED DATA'
//         fs.writeFile('new.txt',data , { encoding: 'utf-8', flag: 'w' }, (err) => {//appending new data in the file
//             if (err) {
//                 throw err;
               
//             }
//             console.log("data Appended");
//         })
//     }
// })
//--------------------------------__dirname vs process.cwd()---------------------------------------
// console.log(__dirname);// it is used to get the path of directory where current file exist.
// console.log(process.cwd());//it is used to get the path of the current working directory from where we are running file.

//-------------------------------Access file from other locations-----------------------------.
//using path module we can access the file from any location
const path = require('path');
const filepath = path.join(__dirname, 'Files', 'File1.txt');//it is used to join the paths 
const file2path = path.join(__dirname, 'Files', 'File2.txt');
fs.writeFile(filepath, "THIS IS NEW DATA", { encoding: 'utf-8', flag: 'w' }, (err) => {
    if (err) throw err;
    console.log("Fle written sucessfully.")
})
// if the file was not present then new file created with the given data
fs.writeFile(file2path, "THIS IS NEW DATA", { encoding: 'utf-8', flag: 'w' }, (err) => {
    if (err) throw err;
    console.log("Fle written sucessfully.")
})







