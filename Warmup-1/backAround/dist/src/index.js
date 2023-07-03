"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backAround = void 0;
function backAround(myString) {
    const stringArray = [...myString];
    const myChar = stringArray[stringArray.length - 1];
    stringArray.splice(0, 0, myChar);
    stringArray.splice(stringArray.length - 1, 0, myChar);
    return stringArray.join("");
}
exports.backAround = backAround;
