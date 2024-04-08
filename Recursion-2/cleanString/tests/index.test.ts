import { assert } from "chai"
import { stringClean } from "../src/index.js"

describe("stringClean",()=>{
    it("should clean strings",()=>{
        const result = stringClean("aabc")
        assert.equal(result, "abc")
    })
})