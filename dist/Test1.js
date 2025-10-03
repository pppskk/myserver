"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Utils = require("./Utils");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
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
});
unit_test();
