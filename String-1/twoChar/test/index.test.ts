import { assert } from "chai"
import twoChar from "../src"


describe("",()=>{
    it("Should return ja when given java and 0",()=>{
        const result = twoChar("java", 0)
        assert.equal(result, "ja")
    })
    it("Should return va when given java and2",()=>{
        const result = twoChar("java", 2)
        assert.equal(result, "va")
    })
    it("Should return ja when given java and 3",()=>{
        const result = twoChar("java", 3)
        assert.equal(result, "ja")
    })
})