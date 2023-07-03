"use strict";
/*
Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"
*/
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("missingChar", () => {
    it("should return ktten when n = 1", () => {
        const result = (0, src_1.missingChar)("kitten", 1);
        chai_1.assert.equal(result, "ktten");
    });
    it("should return itten when n = 0", () => {
        const result = (0, src_1.missingChar)("kitten", 0);
        chai_1.assert.equal(result, "itten");
    });
    it("should return kittn when n = 4", () => {
        const result = (0, src_1.missingChar)("kitten", 4);
        chai_1.assert.equal(result, "kittn");
    });
});
