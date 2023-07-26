"use strict";
/*
Given a string, return true if the string starts with "hi" and false otherwise.

startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false
*/
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("startHi", () => {
    it("should return true when string starts with hi (hi There)", () => {
        const result = (0, src_1.startHi)("hi there");
        chai_1.assert.equal(result, true);
    });
    it("should return true when string starts with hi (hi)", () => {
        const result = (0, src_1.startHi)("hi");
        chai_1.assert.equal(result, true);
    });
    it("should return false when string doesn't starts with hi (hello hi)", () => {
        const result = (0, src_1.startHi)("hello hi");
        chai_1.assert.equal(result, false);
    });
    it("should return false when string doesn't starts with hi (Hi there)", () => {
        const result = (0, src_1.startHi)("Hi there");
        chai_1.assert.equal(result, false);
    });
});
