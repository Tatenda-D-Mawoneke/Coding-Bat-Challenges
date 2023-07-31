import { assert } from "chai";
import { in3050 } from "../src";

// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

describe("in3050", ()=>{
    it("should return true if passed 30, 31", ()=>{
        const result = in3050(30,31);
        assert.equal(result, true)
    })
    it("should return false if passed 30,41", ()=>{
        const result = in3050(30,41);
        assert.equal(result, false)
    })
    it("should return true if passed 40,50", ()=>{
        const result = in3050(40,50);
        assert.equal(result, true)
    })
    it("should return false if passed 0,50", ()=>{
        const result = in3050(0,50);
        assert.equal(result, false)
    })
    it("should return false if passed -1,50", ()=>{
        const result = in3050(-1,50);
        assert.equal(result, false)
    })
})