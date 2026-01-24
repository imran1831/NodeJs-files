// const url=require('url');
// const myUrl="https://example.com:3000/shop?item=phone&price=10000";
// const parsedUrl=url.parse(myUrl,true);
// console.log(parsedUrl);
// console.log(parsedUrl.port);
// console.log(parsedUrl.protocol);
// console.log(parsedUrl.pathname);


// ----Query String----
// const querystring=require('querystring');
// const qs='category=books&price=500';
// const parsedData=querystring.parse(qs);
// console.log(parsedData);

const querystring=require('querystring');
const obj={
    category:"books",
    price:500
};
const qs=querystring.stringify(obj);
console.log(qs);