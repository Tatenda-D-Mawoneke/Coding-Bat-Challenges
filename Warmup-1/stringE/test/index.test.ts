import { assert } from "chai";
import { stringE } from "../src";

// Return true if the given string contains between 1 and 3 'e' chars.

// stringE("Hello") → true
// stringE("Heelle") → true
// stringE("Heelele") → false

describe("stringE", ()=>{
    it("should return true if passed a string containing between and including 1-3 e characters", ()=>{
        const result = stringE("Hello");
        assert.equal(result, true)
    })
    it("should return true if passed a string containing between and including 1-3 e characters", ()=>{
        const result = stringE("Heelle");
        assert.equal(result, true)
    })
    it("should return true if passed a string containing between and including 1-3 e characters", ()=>{
        const result = stringE("Hello");
        assert.equal(result, true)
    })
    it("should return true if passed a string containing between and including 1-3 e characters", ()=>{
        const result = stringE("testOverload");
        assert.equal(result, true)
    })
    it("should return false if passed a string not containing between and including 1-3 e characters", ()=>{
        const result = stringE("Heelele");
        assert.equal(result, false)
    })
    it("should return false if passed a string not containing between and including 1-3 e characters", ()=>{
        const result = stringE("Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeello");
        assert.equal(result, false)
    })
})