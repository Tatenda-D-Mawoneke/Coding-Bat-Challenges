import { assert } from 'chai';
import { describe } from 'mocha';
import wihtoutX2 from '../src';


describe("",()=>{
    it("",()=>{
        const result = wihtoutX2("xHi")
        assert.equal(result,"Hi" )
    })
    it("",()=>{
        const result = wihtoutX2("Hxi")
        assert.equal(result,"Hi" )
    })
    it("",()=>{
        const result = wihtoutX2("Hi")
        assert.equal(result,"Hi" )
    })
})