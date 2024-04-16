import { assert } from "chai"
import lastTwo from "../src"


// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".


// lastTwo("coding") → "codign"
// lastTwo("cat") → "cta"
// lastTwo("ab") → "ba"

describe("lastTwo",()=>{
    it("Should return codign when given coding",()=>{
        const result = lastTwo("coding")
        assert.equal(result, "codign")
    })
    it("Should return cta when given cat",()=>{
        const result = lastTwo("cat")
        assert.equal(result, "cta")
    })
    it("Should return ba when given ab",()=>{
        const result = lastTwo("ab")
        assert.equal(result, "ba")
    })
})