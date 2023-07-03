"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startHi = void 0;
function startHi(myString) {
    const stringArray = [...myString];
    return stringArray[0] == "h" && stringArray[1] == "i" ? true : false;
}
exports.startHi = startHi;
