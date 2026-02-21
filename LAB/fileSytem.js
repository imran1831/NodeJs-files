// write a file
//read a file
//Append a file
//Delete a file

// const fs = require('fs');
// fs.writeFile('sample.txt','Hello World',(err)=>{
//     if(err){
//         console.log('Error writing file',err);
//         return;
//     }
// console.log('File written successfully');
// });
// //Read a file
// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log('Error reading file',err);
//         return;
//     }
// console.log('File read successfully',data);
// });

//Append a file
// const fs=require('fs');
// fs.appendFile('sample.txt',' my name is Imran',(err)=>{
//     if(err){
//         console.log('Error appending file',err);
//         return;
//     }
// console.log('File appended successfully');
// });

// relink a file
const fs = require('fs');
fs.rename('sample.txt', 'imran.txt', (err) => {
    if (err) {
        console.log('Error renaming file', err);
        return;
    }
    console.log('File renamed successfully');
})

// Delete a file
// fs.unlink('imran.txt',(err)=>{
//     if(err){
//         console.log('Error while deleting file',err);
//         return;
//     }
// console.log('File deleted successfully');
// });

