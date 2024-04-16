import { assert } from "chai"
import deFront from "../src"


describe("",()=>{
    it("",()=>{
        const result = deFront("Hello")
        assert.equal(result, "llo")
    })
    it("",()=>{
        const result = deFront("java")
        assert.equal(result, "va")
    })
    it("",()=>{
        const result = deFront("away")
        assert.equal(result, "aay")
    })
})