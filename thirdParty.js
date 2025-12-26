/*---------------LODASH-------------
const _=require("lodash");
console.log(_.chunk([1,2,3,4,5,6,7,8,9],3));*/

//-----------OS module--------
// const os=require("os");
// console.log(`OS.${os.platform()}`);
// console.log(`OS.${os.arch()}`);
// console.log(`OS.${os.totalmem()}`);
// console.log(`OS.${os.freemem()}`);


// -------------event handler------
// console.log("start")
// setTimeout(()=>{
//     console.log("setTimeout")
// },0);
// setImmediate(()=>{
//     console.log("setImmediate");
// });
// process.nextTick(()=>{
//     console.log("nextTick");
// });

//------EventEmitter-----
// const EventEmitter=require("events");
// const emitter=new EventEmitter();
// emitter.on("message",()=>{
//     console.log("message recieved")
// });//event listener
// emitter.emit("message");

// const EventEmitter=require("events");
// // const {use}=require("react");
// const emitter=new EventEmitter();
// emitter.on("login",(username)=>{
//     console.log(`${username} logged in`)
// });
// emitter.emit("login","Anji");

// -----------Order processing ----
const EventEmitter=require("events");
const orderEmitter=new EventEmitter();
orderEmitter.on("orderPlaced",(orderid)=>console.log(`Order ${orderid} placed`));
orderEmitter.on("paymentDone",(orderid)=>console.log(`payment completed for ${orderid}`));
orderEmitter.emit("orderPlaced",101);
orderEmitter.emit("paymentDone",101);

