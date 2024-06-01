import { assert } from "chai";
import { mapAB } from "../src/index.js";

/*
Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".


mapAB({"a": "Hi", "b": "There"}) → {"a": "Hi", "ab": "HiThere", "b": "There"}
mapAB({"a": "Hi"}) → {"a": "Hi"}
mapAB({"b": "There"}) → {"b": "There"}
*/

describe("mapAB", () => {
	it('Should return {"a": "Hi", "ab": "HiThere", "b": "There"} when given {"a": "Hi", "b": "There"}', () => {
		const result = mapAB(new Map([["a", "Hi"], ["b", "There"]]));
		assert.deepEqual(result, new Map([["a", "Hi"], ["b", "There"], ["ab", "HiThere"]]));
	});
	it('Should return {"a": "Hi"} when given {"a": "Hi"}', () => {
		const result = mapAB(new Map([["a", "Hi"]]));
		assert.deepEqual(result, new Map([["a", "Hi"]]));
	});
	it('Should return {"b": "There"} when given {"b": "There"}', () => {
		const result = mapAB(new Map([["b", "There"]]));
		assert.deepEqual(result, new Map([["b", "There"]]));
	});
});
