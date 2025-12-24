// ---------------Pretty Print JSON------------
// const Nxt={
//     id:101,
//     name:"nikhitha",
//     age:28,
//     branch:"cse",
//     college:"MRDU",
//     "email":"immu@gamil.com"
// }
// const obj=JSON.stringify(Nxt,["id","name","email"],2);
// console.log(obj);

// -----------Creating a JSON file--------
// const fs=require("fs");
// const employee={
//     id:101,
//     name:"nikhitha",
//     age:28,
//     branch:"cse",
//     college:"MRDU"

// };
// fs.writeFileSync(
//     "employee.json",JSON.stringify(employee,null,2)
// )
// console.log("JSON file created");


// -------------replacer---------
const nxt={
    id:101,
    name:"nikhitha",
    age:28,
    branch:"cse",
    college:"MRDU",
    email:"immu@gamil.com"
}
const obj=JSON.stringify(nxt,["id","name","email"],2);
console.log(obj);
