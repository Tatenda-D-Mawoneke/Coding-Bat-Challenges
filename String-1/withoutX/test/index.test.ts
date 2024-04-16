import { assert } from "chai"
import withoutX from "../src"


describe("withoutX",()=>{
    it("Should return Hi when given xHix",()=>{
        const result = withoutX("xHix")
        assert.equal(result, "Hi")
    })
    it("Should return Hi without the xHi",()=>{
        const result = withoutX("xHi")
        assert.equal(result, "Hi")
    })
    it("Should return Hxi without the Hxix",()=>{
        const result = withoutX("Hxix")
        assert.equal(result, "Hxi")
    })
})