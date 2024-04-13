
// Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

import { assert } from "chai"
import { left2 } from "../src"


// left2("Hello") → "lloHe"
// left2("java") → "vaja"
// left2("Hi") → "Hi"

describe("left2", ()=>{
    it("should return a 'rotated left 2' version where the first 2 chars are moved to the end, returning 'lloHe' when given 'Hello'", ()=>{
        const result = left2("Hello")
        assert.equal("lloHe", result)
    })
    it("should return a 'rotated left 2' version where the first 2 chars are moved to the end, returning 'vaja' when given 'java'", ()=>{
        const result = left2("java")
        assert.equal("vaja", result)
    })
    it("should return a 'rotated left 2' version where the first 2 chars are moved to the end, returning 'Hi' when given 'Hi'", ()=>{
        const result = left2("Hi")
        assert.equal("Hi", result)
    })
})