import { assert } from "chai"
import extraFront from "../src"


describe("extraFront",()=>{
    it("",()=>{
        const result = extraFront("Hello")
        assert.equal(result, "HeHeHe")
    })
    it("",()=>{
        const result = extraFront("ab")
        assert.equal(result, "ababab")
    })
    it("",()=>{
        const result = extraFront("H")
        assert.equal(result, "HHH")
    })
})