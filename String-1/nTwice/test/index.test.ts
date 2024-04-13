import { assert } from "chai"
import nTwice from "../src"


describe("nTwice",()=>{
    it("Should return Helo when given Hello and 2",()=>{
        const result = nTwice("Hello", 2)
        assert.equal(result, "Helo")
    })
    it("Should return Choate when given Chocolate and 3",()=>{
        const result = nTwice("Chocolate", 3)
        assert.equal(result, "Choate")
    })
    it("Should return Helo when given Chocolate and 1",()=>{
        const result = nTwice("Chocolate", 1)
        assert.equal(result, "Ce")
    })
})