"use strict";
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parrotTrouble = void 0;
// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false
function parrotTrouble(isTalking, hour) {
    return isTalking && (hour > 20 || hour < 7) ? true : false;
}
exports.parrotTrouble = parrotTrouble;
