import { assert } from "chai";
import { maxEnd3 } from "../src/index.js";

// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

// maxEnd3([1, 2, 3]) → [3, 3, 3]
// maxEnd3([11, 5, 9]) → [11, 11, 11]
// maxEnd3([2, 11, 3]) → [3, 3, 3]

describe("maxEnd3", () => {
	it("Should return [3,3,3] when given [1,2,3]", () => {
		const result = maxEnd3([1, 2, 3]);
		assert.deepEqual(result, [3, 3, 3]);
	});
	it("Should return [11, 11, 11] when given [11, 5, 9]", () => {
		const result = maxEnd3([11, 5, 9]);
		assert.deepEqual(result, [11, 11, 11]);
	});
	it("Should return [3,3,3] when given [2, 11, 3]", () => {
		const result = maxEnd3([2, 11, 3]);
		assert.deepEqual(result, [3, 3, 3]);
	});
});
