const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Hello world");
});

// Date route
app.get("/date", (req, res) => {
    const date = new Date();
    res.send(`Today's date is ${date}`);
});

// HTML page route
app.get("/page", (req, res) => {
    res.sendFile("page.html", { root: __dirname });
});

// Start server
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
