const http = require("http");

http.createServer((req, res) => {
    const data = { message: "hello Imran" };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));

}).listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});
