function download(url,downloaded) {
    console.log(`Downloading file from ${ url } ...\n`);
    setTimeout(() => {
        imagename = url.split('/').pop();
        
        downloaded(imagename);
    }, 3000);
}
function compressfile(pth,compressed)
{
    let cpath = pth.split('.')[0] + '.zip';
    console.log(`File  ${pth} compressing...\n`);
    setTimeout(() => {
        compressed(cpath);
    }, 5000);
}

console.log(Date(0));
function upload(cpath,uploaded) {
    console.log(`${cpath} file Uploading...\n`);
    setTimeout(() => {
        uploaded(cpath);
    }, 6000);
}
//uploaded part



function downloaded(imagename) {
    console.log(`file Downloaded sucessfully as ${imagename} \n`);
    
    compressfile(imagename,function compressed(cpath) {
        console.log(`${cpath} File Compressed Successfully\n`);
        upload(cpath,function uploaded(cpath) {
            let upfile = cpath.split(".")[0]+'jpg';
            console.log(`${upfile} Uploaded Successfully.. \n`)
        });
    });
}
//this type of nested callback is not a good thing this call called Callback Hell;
//to remove callback hall we use promises;
download("https://facebook/profile.jpg" ,downloaded);