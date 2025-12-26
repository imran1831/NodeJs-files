// const os=require("os");
// console.log("os :",os.platform());
// console.log("CPU:",os.cpus()[0].model);
// console.log("Memory: ",os.totalmem());

// program 1
// const http = require("http");
// http.createServer((req,res)=>{
//     res.write("hello world node.js");
//     res.end()
// }).listen(3001);
// console.log("server running at http://localhost:3001")

/*-----program 2-------
const fs =require("fs")
fs.writeFile("sample.txt","hello welcome iam from node js",(err)=>{
    if(err){
        console.error("error writing file.",err);
        return
    }
    console.log("file written successfully")
})*/

//--------------Read File--------------------
// const fs =require("fs");
// const data= fs.readFileSync("sample.txt", "utf-8");
// console.log(data);


//-------------------------process.nextTick():--------
// console.log("start");
// process.nextTick(() => {
//     console.log("runs before any async task");
// });
// console.log("end");

/*---------------------setImmediate---
console.log("Start")
setImmediate(()=>console.log("immediate"))
console.log("end")*/


//--------------setInterval-----------
console.log("Start")
let count=0
const interval=setInterval(()=>{
    count++;
    console.log(count);
    if(count===4){
        clearInterval(interval)
    }
},1000)





