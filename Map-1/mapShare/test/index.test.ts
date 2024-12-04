import { assert } from "chai";
import { mapShare } from "../src/index.js";

/*
Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.


mapShare({"a": "aaa", "b": "bbb", "c": "ccc"}) → {"a": "aaa", "b": "aaa"}
mapShare({"b": "xyz", "c": "ccc"}) → {"b": "xyz"}
mapShare({"a": "aaa", "c": "meh", "d": "hi"}) → {"a": "aaa", "b": "aaa", "d": "hi"}
*/

describe("mapShare", () => {
	it('Should return {"a": "aaa", "b": "aaa"} when given {"a": "aaa", "b": "bbb", "c": "ccc"}', () => {
		const result = mapShare(
			new Map([
				["a", "aaa"],
				["b", "bbb"],
				["c", "ccc"],
			])
		);
		assert.deepEqual(result, new Map([["a", "aaa"], ["b", "aaa"]]));
	});
});
