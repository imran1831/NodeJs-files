// const fs=require('fs');
// fs.open("example.txt","r",(err,fd)=>{
//     if(err){
//         console.log("error opening file",err);
//         return;
//     }
//     console.log("file opened successfully");
//     console.log("file descriptor",fd);
// });

// // Open the file
// // ----File Descriptor---




// ----Write to a open file---
// const fs=require('fs');
// fs.open("file.txt","w",(err,fd)=>{
//     if(err)throw err;
//     fs.write(fd,"hello welcome to node",(err,fd)=>{
//         if(err)throw err;
//         console.log("data written");
//     })
// })

//closing files in node.js:
// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "file.txt");

// fs.open(filePath, "r", (err, fd) => {
//     if (err) throw err;
//     const buffer = Buffer.alloc(1024);
//     fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
//         if (err) throw err;
//         console.log("Content:", buffer.toString("utf8", 0, bytesRead));
//         fs.close(fd, (err) => {
//             if (err) throw err;
//             console.log("File closed");
//         });
//     });
// });

// Synchronous File open
const fs=require('fs');
try{
    const fd=fs.openSync("example.txt","r");
    console.log("file opened");
    fs.closeSync(fd);
    console.log("file Closed");
}catch(err){
    console.log("Error:",err);
}

