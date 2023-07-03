"use strict";
/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
*/
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("hasTeen which returns true when given 3 interger values and any of them are in the range of 13-19 (inclusive) ", () => {
    it("should return true when given [13, 20, 10]", () => {
        const result = (0, src_1.hasTeen)([13, 20, 10]);
        chai_1.assert.equal(result, true);
    });
    it("should return true when given [20, 19, 10]", () => {
        const result = (0, src_1.hasTeen)([20, 19, 10]);
        chai_1.assert.equal(result, true);
    });
    it("should return true when given [20, 10, 13]", () => {
        const result = (0, src_1.hasTeen)([20, 10, 13]);
        chai_1.assert.equal(result, true);
    });
    it("should return false when given ", () => {
        const result = (0, src_1.hasTeen)([20, 12, 30]);
        chai_1.assert.equal(result, false);
    });
});
