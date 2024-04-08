
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

import { assert } from "chai"
import { helloName } from "../src/helloName"


// helloName("Bob") → "Hello Bob!"
// helloName("Alice") → "Hello Alice!"
// helloName("X") → "Hello X!"

describe("helloName",()=>{
    it("Should return a greeting of the form 'Hello Bob!' given a string name: 'Bob'",()=>{
        const result = helloName("Bob")
        assert.equal(result, "Hello Bob!")
    })
})