const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello World!');
})
//Route
app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.get('/concat',(req,res)=>{
    res.send('Concat component');
});
//name
app.get('/user/:name',(req,res)=>{
    res.send(`Hello ${req.params.name}`);
});
//Start server
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})