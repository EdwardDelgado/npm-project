const $ = require("jquery");  // loads jquery.min.js

const data = require("./data");

const hello = () => console.log("hello world from webpack!");

hello();

console.log(data.whichSideOfTheForce);

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "gray");