// "use strict";
// import { add } from "./Utils";
const Utils = require("./Utils");

const unit_test = async () => {
    
    if (Utils.add(2, 3) === 5) {
        console.log(0);
    }
    else {
        console.log(1);
    }

    if (Utils.add(2, 4) === 7) {
        console.log(0);
        // helloworld();
    }
    else {
        console.log(2);
    }
}

// if (Utils.add(2, 3) === 5) {
//     console.log(0);
//     // helloworld();
// }
// else {
//     console.log(1);
// }
unit_test();
