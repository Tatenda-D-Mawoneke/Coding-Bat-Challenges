import { assert } from "chai"
import theEnd from "../src"


// Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.


// theEnd("Hello", true) → "H"
// theEnd("Hello", false) → "o"
// theEnd("oh", true) → "o"

describe("",()=>{
    it("",()=>{
        const result = theEnd("Hello", true)
        assert.equal("H", result)
    })
    it("",()=>{
        const result = theEnd("Hello", false)
        assert.equal("o", result)
    })
    it("",()=>{
        const result = theEnd("oh", true)
        assert.equal("o", result)
    })
})