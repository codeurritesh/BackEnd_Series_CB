const fs = require('fs');
const path = require('path');
const file1 = path.join(__dirname, 'Files','input1.txt');
const file2 = path.join(__dirname, 'Files','input2.txt');
const out = path.join(__dirname, 'Files', 'output.txt');
fs.readFile(file1, { encoding: 'utf-8', flag: 'r' }, (err, data1) => {
    if (err) {
        console.log("Error Occur");
        throw err;
    }
    else {
        const arr1 = data1.split('\n');
        fs.readFile(file2, { encoding: 'utf-8', flag: 'r' }, (err, data2) => {
            if (err) {
                console.log("Error Occur");
                throw err;
            }
            else {
                // console.log(data);
                const arr2 = data2.split('\n');
                let arr = arr1.concat(arr2)
                arr.sort((a, b) => a - b);
                // console.log(arr);
                arr = arr.join('\n');
                // console.log(arr);
                fs.writeFile(out, arr, (err) => {
                    if (err) throw err;
                    console.log("File Written Sucessfully");
                })
            }
        })
        
    }
});
// this will run first because it will take time
console.log("After the file system.");
console.log("After the file system.");
console.log("After the file system.");
console.log("After the file system.");
console.log("After the file system.");



