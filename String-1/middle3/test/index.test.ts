import { assert } from "chai"
import middle3 from "../src"


describe("middle3",()=>{
    it("Should return and when given Candy",()=>{
        const result = middle3("Candy")
        assert.equal(result, "and")
    })
    it("Should return and when given and",()=>{
        const result = middle3("and")
        assert.equal(result, "and")
    })
    it("Should return lvi when given solving",()=>{
        const result = middle3("Solving")
        assert.equal(result, "lvi")
    })
})