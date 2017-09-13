const $ = require("jquery");  // loads jquery.min.js

// npm way
//const data = require("./data");
import configuration from "./data";
import wave from "./say-hello";//import " " is assigning variable.
import math from "./math";


// npm way
//const math = require("./math");
// math is a variable, I could have used m
// instead and call m.add(1, 2)
wave();

// similar to doing this
/*const data = {
    someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};*/

const hello = () => console.log("hello redwood from webpack!");

hello();

console.log(math.multiply(3,4));
console.log(configuration.whichSideOfTheForce);

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "gray")
;