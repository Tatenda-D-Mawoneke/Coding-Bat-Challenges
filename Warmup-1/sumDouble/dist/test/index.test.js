"use strict";
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8
describe("sumDouble", () => {
    // sumDouble(1, 2) → 3
    it("should return 3 when the values of the varibales are 1 and 2", () => {
        const result = (0, src_1.sumDouble)(1, 2);
        chai_1.assert.equal(result, 3);
    });
    it("should return 5 when the values of the varibales are 3 and 2", () => {
        const result = (0, src_1.sumDouble)(3, 2);
        chai_1.assert.equal(result, 5);
    });
    it("should return 8 when the values of the varibales are 2 and 2", () => {
        const result = (0, src_1.sumDouble)(2, 2);
        chai_1.assert.equal(result, 8);
    });
});
