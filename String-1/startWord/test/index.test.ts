import { assert } from "chai"
import startWord from "../src"


describe("",()=>{
    it("",()=>{
        const result = startWord("hippo", "hi")
        assert.equal(result, "hi")
    })
    it("",()=>{
        const result = startWord("hippo", "xip")
        assert.equal(result, "hip")
    })
    it("",()=>{
        const result = startWord("hippo", "i")
        assert.equal(result, "h")
    })
})