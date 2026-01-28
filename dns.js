// const dns=require('dns');
// dns.lookup('google.com',(err,address)=>{
//     if(err)throw err;
//     console.log("address:",address);
// })
// -------------
// const dns=require('dns');
// dns.lookup('google.com',{all:true},(err,address)=>{
//     console.log(address);
// })
// -------------ipv4---
// const dns=require('dns');
// dns.resolve4('google.com',{all:true},(err,address)=>{
//     console.log("ipv4:",address);
// })
// -------ipv6---
// const dns=require('dns');
// dns.resolve6('google.com',{all:true},(err,address)=>{
//     console.log("ipv6:",address);
// })

// -------Resolve Mx records---
// const dns=require('dns');
// dns.resolveMx('gmail.com',(err,address)=>{
//     console.log("MailServers:",address);
// })

// // -------Resolve TXT records---
// const dns=require('dns');
// dns.resolveTxt('gmail.com',(err,address)=>{
//     console.log("Txt Records:",address);
// })

// --------Reverse DNS----
const dns=require('dns');
dns.reverse('8.8.8.8',(err,hostname)=>{
    console.log("HostName:",hostname);
})