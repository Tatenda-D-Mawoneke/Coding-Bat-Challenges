"use strict";
// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
Object.defineProperty(exports, "__esModule", { value: true });
// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe("nearHundred", () => {
    // n close to 100 by 10, n < 100
    it("should retrun true if n is within 100 by 10 when n < 100, n = 99", () => {
        const result = (0, index_1.nearHundred)(99);
        chai_1.assert.equal(result, true);
    });
    // n close to 100 by 10, n > 100
    it("should retrun true if n is within 100 by 10 when n > 100, n = 109", () => {
        const result = (0, index_1.nearHundred)(109);
        chai_1.assert.equal(result, true);
    });
    // n close to 200 by 10 , n < 200
    it("should retrun true if n is within 200 by 10 when n < 200, n = 199", () => {
        const result = (0, index_1.nearHundred)(199);
        chai_1.assert.equal(result, true);
    });
    // n close to 200 by 10 , n > 200
    it("should retrun true if n is within 100 by 10 when n > 200, n = 209", () => {
        const result = (0, index_1.nearHundred)(209);
        chai_1.assert.equal(result, true);
    });
    // n not close to 100 by 10, n < 100
    it("should retrun false if n is not within 100 by 10, n = 89", () => {
        const result = (0, index_1.nearHundred)(89);
        chai_1.assert.equal(result, false);
    });
    // n not close to 100 by 10, n < 100
    it("should retrun false if n is not within 100 or 200 by 10, n = 189", () => {
        const result = (0, index_1.nearHundred)(189);
        chai_1.assert.equal(result, false);
    });
    // n not close to 200 by 10, n < 200
    it("should retrun false if n is not within 200 by 10, n = 289", () => {
        const result = (0, index_1.nearHundred)(289);
        chai_1.assert.equal(result, false);
    });
});
