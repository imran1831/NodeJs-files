const jsonData=`{
    "name":"Avinash",
    "age":18,
    "place":"HYD",
    "email":"avi@gamil.com",
    "address":{
        "street":"Kulas light",
        "suite":"Apt.556",
        "city":"Gwenborough"
    }
}`
const obj=JSON.parse(jsonData);
console.log(obj.name);
console.log(obj.email);
console.log(obj.address.city);
console.log(JSON.stringify(obj));