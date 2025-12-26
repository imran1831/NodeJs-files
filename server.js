const http = require("http");

http.createServer((req, res) => {
    const data = {
            message: "hello Imran",
            name:"Imran",
            branch:"IT",
            college:"MRDU"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));

}).listen(4000, () => {
    console.log("Server started at http://localhost:4000");
});
console.log("This is running");