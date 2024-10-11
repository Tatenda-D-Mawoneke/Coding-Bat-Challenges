import { assert } from "chai";
import { makeEnds } from "../src/index.js";

/*
Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

makeEnds([1, 2, 3]) → [1, 3]
makeEnds([1, 2, 3, 4]) → [1, 4]
makeEnds([7, 4, 6, 2]) → [7, 2]
*/

describe("makeEnds", () => {
	it("Should return [1, 3] when given [1,2,3]", () => {
		const result = makeEnds([1,2,3]);
		assert.deepEqual(result, [1,3]);
	});
	it("Should return [1, 4] when given [1, 2, 3, 4]", () => {
		const result = makeEnds([1, 2, 3, 4]);
		assert.deepEqual(result, [1, 4]);
	});
	it("Should return [7,2] when given [7, 4, 6, 2]", () => {
		const result = makeEnds([7, 4, 6, 2]);
		assert.deepEqual(result, [7, 2]);
	});
});
