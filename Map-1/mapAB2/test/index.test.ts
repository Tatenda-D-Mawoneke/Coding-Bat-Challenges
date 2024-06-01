import { assert } from "chai";
import { mapAB2 } from "../src/index.js";

/*
Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.


mapAB2({"a": "aaa", "b": "aaa", "c": "cake"}) → {"c": "cake"}
mapAB2({"a": "aaa", "b": "bbb"}) → {"a": "aaa", "b": "bbb"}
mapAB2({"a": "aaa", "b": "bbb", "c": "aaa"}) → {"a": "aaa", "b": "bbb", "c": "aaa"}
*/

describe("mapAB2", () => {
	it('Should return {"c": "cake"} when given {"a": "aaa", "b": "aaa", "c": "cake"}', () => {
		const result = mapAB2(
			new Map([
				["a", "aaa"],
				["b", "aaa"],
				["c", "cake"],
			])
		);
		assert.deepEqual(result, new Map([["c", "cake"]]));
	});

	it('Should return {"a": "aaa", "b": "bbb"} when given {"a": "aaa", "b": "bbb"}', () => {
		const result = mapAB2(
			new Map([
				["a", "aaa"],
				["b", "bbb"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "aaa"],
				["b", "bbb"],
			])
		);
	});

	it('Should return {"a": "aaa", "b": "bbb", "c": "aaa"} when given {"a": "aaa", "b": "bbb", "c": "aaa"}', () => {
		const result = mapAB2(
			new Map([
				["a", "aaa"],
				["b", "bbb"],
				["c", "aaa"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "aaa"],
				["b", "bbb"],
				["c", "aaa"],
			])
		);
	});
});
