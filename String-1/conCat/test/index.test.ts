// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

import { assert } from "chai"
import { conCat } from "../src"


// conCat("abc", "cat") → "abcat"
// conCat("dog", "cat") → "dogcat"
// conCat("abc", "") → "abc"

describe("conCat", ()=>{
    it("Should return 'abcat' when given 'abc' & 'cat'", ()=>{
        const result = conCat("abc", "cat")
        assert.equal(result, "abcat")
    }) 
    it("Should return 'dogcat' when given 'dog' & 'cat'", ()=>{
        const result = conCat("dog", "cat")
        assert.equal(result, "dogcat")
    }) 
    it("Should return 'abc' when given 'abc' & ''", ()=>{
        const result = conCat("abc", "")
        assert.equal(result, "abc")
    }) 
})