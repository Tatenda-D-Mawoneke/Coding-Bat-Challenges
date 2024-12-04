import { assert } from "chai";
import { mapAB3 } from "../src/index.js";

/*
Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.

mapAB3({"a": "aaa", "c": "cake"}) → {"a": "aaa", "b": "aaa", "c": "cake"}
mapAB3({"b": "bbb", "c": "cake"}) → {"a": "bbb", "b": "bbb", "c": "cake"}
mapAB3({"a": "aaa", "b": "bbb", "c": "cake"}) → {"a": "aaa", "b": "bbb", "c": "cake"}
*/

describe("mapAB3", () => {
	it('Should return {"a": "aaa", "b": "aaa", "c": "cake"} when given {"a": "aaa", "c": "cake"}', () => {
		const result = mapAB3(
			new Map([
				["a", "aaa"],
				["c", "cake"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "aaa"],
				["b", "aaa"],
				["c", "cake"],
			])
		);
	});
	it('Should return {"a": "bbb", "b": "bbb", "c": "cake"} when given {"a": "bbb", "b": "bbb", "c": "cake"}', () => {
		const result = mapAB3(
			new Map([
				["a", "bbb"],
				["b", "bbb"],
				["c", "cake"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "bbb"],
				["b", "bbb"],
				["c", "cake"],
			])
		);
	});
	it('Should return {"a": "aaa", "b": "bbb", "c": "cake"} when given {"a": "aaa", "b": "bbb", "c": "cake"}', () => {
		const result = mapAB3(
			new Map([
				["a", "aaa"],
				["b", "bbb"],
				["c", "cake"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "aaa"],
				["b", "bbb"],
				["c", "cake"],
			])
		);
	});
});
