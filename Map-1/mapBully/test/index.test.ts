import { assert } from 'chai';
import { mapBully } from "../src/index.js";

/*
Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.


mapBully({"a": "candy", "b": "dirt"}) → {"a": "", "b": "candy"}
mapBully({"a": "candy"}) → {"a": "", "b": "candy"}
mapBully({"a": "candy", "b": "carrot", "c": "meh"}) → {"a": "", "b": "candy", "c": "meh"}
*/

describe("mapBully", ()=>{
    it('Should return {"a": "", "b": "candy"} when given {"a": "candy", "b": "dirt"}', ()=>{
        const map1 = new Map([["a", "candy"], ["b", "dirt"]])
        const result = mapBully(map1)

        const resultantMap = new Map()
        resultantMap.set("a", "")
        resultantMap.set("b", "candy")
        assert.deepEqual(result, resultantMap)
    })
})