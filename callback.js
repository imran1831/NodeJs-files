// function greet(name,callback){
//     console.log("hello"+name);
//     callback();
// }
// function sayBye(){
//     console.log("Good Bye")
// }
// greet("anil",sayBye);

//The callback pattern is a design paTTERN in a Node.js where  node js uses this pattern heavily because it is single Threaded
// event Driven
// non-blocking instead of waiting for a taSK TO FINISH, node js registers a callback and continues other configDotenv.

// function fetchUserData(userId,callback){
//     setTimeout(()=>{
//         const user={
//             id:userId,
//             name:"anil",
            
//         }
//         callback(user);
//     },2000);
// }
// console.log("fetching data.....")
// fetchUserData(1,(user)=>{
//     console.log("User:",user)
// });
// console.log("other work continues....");



/*------------------Callback hell:(pyramid of doom)----------------
when multiple callbacks are nested inside each other , making code:
hard to read
hard to debug
hard to maintain

setTimeout(()=>{
    console.log("step 1");
    setTimeout(()=>{
        console.log("step 2")
        setTimeout(()=>{
        console.log("step 3")
        setTimeout(()=>{
        console.log("step 4")
    },1000);
    },1000);
    },1000);
},1000);*/

/* ----------problems:
deep nesting
poor readability
difficult error handling
-------------error first callback---
It is a standard node.js convention where a callback function receives callback(error,result)
1st argument is error
2nd argument is success result
if there is no error , the error argument must be null
*/
function getAge(age,callback){
    setTimeout(()=>{
        if(age<0){
            callback("invalid age",null);
        }
        else{
            callback(null,age)
        }
    },1000);
}
getAge(23,(err,res)=>{
    if(err){
        console.log("ERR:",err)
    }
    else{
        console.log("Age:",res);
    }
});