function greet(name, callback) {
    callback(name);
}
greet("Immu", function (n) {
    console.log("Hello " + n);
});