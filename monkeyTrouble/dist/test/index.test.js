"use strict";
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false
describe("monkeyTrouble", () => {
    it("Should return true when aSmile and bSmile are true", () => {
        const result = (0, src_1.monkeyTrouble)(true, true);
        chai_1.assert.equal(result, true);
    });
    it("Should return true when aSmile and bSmile are false", () => {
        const result = (0, src_1.monkeyTrouble)(false, false);
        chai_1.assert.equal(result, true);
    });
    it("Should return false when aSmile and bSmile are not the same", () => {
        const result1 = (0, src_1.monkeyTrouble)(false, true);
        chai_1.assert.equal(result1, false);
        const result2 = (0, src_1.monkeyTrouble)(true, false);
        chai_1.assert.equal(result2, true);
    });
});
