import { assert } from "chai";
import { mapAB4 } from "../src/index.js";

/*
Modify and return the given map as follows: if the keys "a" and "b" have values that have different lengths, then set "c" to have the longer value. If the values exist and have the same length, change them both to the empty string in the map.

mapAB4({"a": "aaa", "b": "bb", "c": "cake"}) → {"a": "aaa", "b": "bb", "c": "aaa"}
mapAB4({"a": "aa", "b": "bbb", "c": "cake"}) → {"a": "aa", "b": "bbb", "c": "bbb"}
mapAB4({"a": "aa", "b": "bbb"}) → {"a": "aa", "b": "bbb", "c": "bbb"}
*/
describe("foo", () => {
	it('Should return {"a": "aaa", "b": "bb", "c": "aaa"} when given {"a": "aaa", "b": "bb", "c": "cake"}', () => {
		const result = mapAB4(
			new Map([
				["a", "aaa"],
				["b", "bb"],
				["c", "cake"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "aaa"],
				["b", "bb"],
				["c", "aaa"],
			])
		);
	});
	it('Should return {"a": "aa", "b": "bbb", "c": "bbb"} when given {"a": "aa", "b": "bbb", "c": "cake"}', () => {
		const result = mapAB4(
			new Map([
				["a", "aa"],
				["b", "bbb"],
				["c", "cake"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "aa"],
				["b", "bbb"],
				["c", "bbb"],
			])
		);
	});
	it('Should return {"a": "aa", "b": "bbb", "c": "bbb"} when given {"a": "aa", "b": "bbb"}', () => {
		const result = mapAB4(
			new Map([
				["a", "aa"],
				["b", "bbb"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", "aa"],
				["b", "bbb"],
				["c", "bbb"],
			])
		);
	});
	it('Should return {"a": "", "b": ""} when given {"a": "aa", "b": "bb"}', () => {
		const result = mapAB4(
			new Map([
				["a", "aa"],
				["b", "bb"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["a", ""],
				["b", ""],
			])
		);
	});
});
