const $ = require("jquery");  // loads jquery.min.js
const $ = require("jquery"); // loading jquery.min.js
// npm way
//const data = require("./data");
import configuration from "./data";
// npm way
//const math = require("./math");
// math is a variable, I could have used m
// instead and call m.add(1, 2)
import /* into */ math from "./math";

console.log(math.add(10, 98));
console.log(math.subtract(1, 98));
console.log(math.multiply(2, 9));
console.log(math.divide(10, 2.5));

// similar to doing this
/*const data = {
    someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};*/

const hello = () => console.log("hello redwood from webpack!");

hello();

console.log(configuration.whichSideOfTheForce);

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "gray")
;