"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasTeen = void 0;
function hasTeen(myArray) {
    for (let number of myArray) {
        if (19 >= number && number >= 13) {
            return true;
        }
    }
    return false;
}
exports.hasTeen = hasTeen;
