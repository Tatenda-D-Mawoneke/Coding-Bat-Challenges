import { assert } from "chai"
import frontAgain from "../src"


describe("frontAgain",()=>{
    it("",()=>{
        const result = frontAgain("edited")
        assert.equal(result, true)
    })
    it("",()=>{
        const result = frontAgain("edit")
        assert.equal(result, false)
    })
    it("",()=>{
        const result = frontAgain("ed")
        assert.equal(result, true)
    })
})