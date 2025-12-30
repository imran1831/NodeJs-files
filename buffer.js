// ------------from String-----
// const buf=Buffer.from("hello node");
// console.log(buf);
// console.log(buf.toString());

// ---------------Array------
// const buf=Buffer.from([65,66,67]);
// console.log(buf.toString());

//
// const buf=Buffer.alloc(5,"A");
// console.log(buf);

// const buf=Buffer.allocUnsafe(15,"A");//This contain old data so use only critical
// console.log(buf);

// const buf=Buffer.alloc(10);
// buf.write("Anji");
// console.log(buf);
// console.log(buf.toString());

// -----------buffer.length()-----
// ex:
// const buf=Buffer.from("Nodejs");
// console.log(buf.length);

// -------------Buffer.slice():------
// const buf=Buffer.from("Nodejs");
// const sliced=buf.slice(0,4)
// console.log(sliced);
// console.log(sliced.toString());

const fs=require("fs");
const stream  =fs.createReadStream("file.txt");
stream.on("data",(chunk)=>{
    console.log("chunk received");
    console.log(chunk);
});
stream.on("end",()=>{
    console.log("file reading completed");
});
