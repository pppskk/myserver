"use strict";
function helloworld() {
    console.log("Hello, World!");
}
function add(a, b) {
    return a + b;
}
// export const Utils = { 
//   helloworld, 
//   add };
module.exports = { helloworld, add };
