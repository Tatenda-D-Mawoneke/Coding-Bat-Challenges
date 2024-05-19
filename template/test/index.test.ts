import { assert } from 'chai';
import { foo } from "../src/index.js"

describe("foo", ()=>{
    it("Should return 1", ()=>{
        const result = foo()
        assert.equal(result, 1)
    })
})