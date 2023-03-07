// const x = new Promise(function (resolve, reject) { //resolve and  reject is itself a function which is
//     // written inside the then and catch function
//     setTimeout(() => { // after the completion of whole timmer then and catch is called
//         let randomnum = Math.random();
//         console.log(randomnum);
//         if (randomnum < 0.5) {
//             console.log("Promise resolved")
//             resolve();
//         }
//         else {
//             console.log("Primise Rejected")
//             reject();
//         }
//     }, 3000);
// });
// x.then(() => {// resolved function is call using then() function
//     console.log("Resolve FUnction call by using then() function");
// }).catch(() => {//reject function is called using catch() function
//     console.log("Reject function is call using catch() function")
// })

//*********************************************File download using Promises *****************************
function download(url) {
    return new Promise((resolve, reject) => {
        if (!url.startsWith("https://"))
            throw new Error("Invalid URL");//throw Error to the catch block
        console.log("Downloading Start..");
        setTimeout(() => {
            const path = url.split('/').pop();
            resolve(path);//this path as agrument is pass to then() function
        }, 2000);
    })
}
function compress(path) {
    return new Promise((resolve,reject) => {
        let cpath = path.split('.')[0] + '.zip';
        if (!cpath.endsWith(".zip")) {
            throw new Error("Invalid Compression");
        }
        console.log(`File  ${path} compressing...`);
        setTimeout(() => {
            resolve(cpath);
        }, 5000);
    })
   
}
function upload(cpath) {
    return new Promise((resolve, reject) => {
        let upload_path = cpath.split(".")[0]+".jpg";
        console.log(`Uploading ${upload_path}`);
        setTimeout(() => {
            resolve(upload_path);
        },5000)
    })
}
download("https://Facebook/profile.jpg").then((path) => {
    console.log(`file downloaded from ${path}`);//file downloaded here
    compress(path).then((cpath) => {// compressio function call
        console.log(`${cpath} Compress Successfully`);// file compress successfull
        upload(path).then((upload_path) => {//uploaded funtion call
            console.log(`${upload_path} Uploaded Successfully..`)
        }).catch(() => {
            console.log("Something went wrong");
        })
    }).catch((comError) => {
        console, log("something went wrong!");
        console.log(comError);
    })
}).catch((inv) => {
    console.log("Something Went Wrong");
    console.log(inv);//through error on console
    console.log(inv.message);// print the error mess only

})