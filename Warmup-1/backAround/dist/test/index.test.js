"use strict";
/*
Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"
*/
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("backAround", () => {
    it("should return tcatt when string is cat", () => {
        const result = (0, src_1.backAround)("cat");
        chai_1.assert.equal(result, "tcatt");
    });
    it("should return oHelloo when string is Hello", () => {
        const result = (0, src_1.backAround)("Hello");
        chai_1.assert.equal(result, "oHelloo");
    });
    it("should return aaa when string is a", () => {
        const result = (0, src_1.backAround)("a");
        chai_1.assert.equal(result, "aaa");
    });
});
