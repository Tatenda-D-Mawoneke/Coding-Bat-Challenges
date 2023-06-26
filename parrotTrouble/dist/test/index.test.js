"use strict";
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false
describe("parrotTrouble", () => {
    it("should return true if the parrot is talking and the hour is 6", () => {
        const result = (0, src_1.parrotTrouble)(true, 6);
        chai_1.assert.equal(result, true);
    });
    it("should return false if the parrot is talking and the hour is 7", () => {
        const result = (0, src_1.parrotTrouble)(true, 7);
        chai_1.assert.equal(result, false);
    });
    it("should return false if the parrot is not talking and the hour is 6", () => {
        const result = (0, src_1.parrotTrouble)(false, 6);
        chai_1.assert.equal(result, false);
    });
});
