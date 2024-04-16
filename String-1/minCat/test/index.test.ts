import { assert } from "chai"
import minCat from "../src"


describe("minCat",()=>{
    it("",()=>{
        const result = minCat("Hello", "Hi")
        assert.equal(result, "loHi")
    })
    it("",()=>{
        const result = minCat("Hello", "java")
        assert.equal(result, "ellojava")
    })
    it("",()=>{
        const result = minCat("java", "Hello")
        assert.equal(result, "javaello")
    })
})