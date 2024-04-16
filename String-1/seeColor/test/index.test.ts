import { assert } from "chai"
import seeColor from "../src"


describe("seeColor",()=>{
    it("return red",()=>{
        const result = seeColor("redxx")
        assert.equal(result, "red")
    })
    it("return ''",()=>{
        const result = seeColor("xxred")
        assert.equal(result, "")
    })
    it("return blue",()=>{
        const result = seeColor("blueTimes")
        assert.equal(result, "blue")
    })
})