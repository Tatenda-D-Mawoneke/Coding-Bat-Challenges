import { assert } from "chai"
import right2 from "../src"

// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.


// right2("Hello") → "loHel"
// right2("java") → "vaja"
// right2("Hi") → "Hi"

describe("",()=>{
    it("",()=>{
        const result = right2("Hello")
        assert.equal(result, "loHel")
    })
    it("",()=>{
        const result = right2("java")
        assert.equal(result, "vaja")
    })
    it("",()=>{
        const result = right2("Hi")
        assert.equal(result, "Hi")
    })
})