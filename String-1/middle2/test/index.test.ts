import { assert } from "chai"
import middle2 from "../src"


// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.


// middleTwo("string") → "ri"
// middleTwo("code") → "od"
// middleTwo("Practice") → "ct"

describe("",()=>{
    it("Should return ri when given string",()=>{
        const result = middle2("string")
        assert.equal(result, 'ri')
    })
    it("Should return od when given code",()=>{
        const result = middle2("code")
        assert.equal(result, 'od')
    })
    it("Should return ct when given Practice",()=>{
        const result = middle2("Practice")
        assert.equal(result, 'ct')
    })
})