import { assert } from "chai"
import hasBad from "../src"


describe("",()=>{
    it("Should return true if bad is in the first 4 characters of a string badxx",()=>{
        const result = hasBad("badxx")
        assert.equal(result, true)
    })
    it("Should return true if bad is in the first 4 characters of a string badxxx",()=>{
        const result = hasBad("badxxx")
        assert.equal(result, true)
    })
    it("Should return false if bad is in the first 4 characters of a string xxbadxx",()=>{
        const result = hasBad("xxbadxx")
        assert.equal(result, false)
    })
})