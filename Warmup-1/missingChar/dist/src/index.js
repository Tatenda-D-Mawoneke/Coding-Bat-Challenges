"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingChar = void 0;
function missingChar(myString, n) {
    const stringArray = [...myString];
    stringArray.splice(n, 1);
    return stringArray.join("");
}
exports.missingChar = missingChar;
