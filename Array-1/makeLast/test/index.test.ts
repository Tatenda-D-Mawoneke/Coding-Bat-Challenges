import { assert } from "chai";
import { makeLast } from "../src/index.js";

/*

Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. Note: by default, a new int array contains all 0's.


makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) → [0, 0, 0, 2]
makeLast([3]) → [0, 3]
*/

describe("makeLast", () => {
	it("Should return [0, 0, 0, 0, 0, 6] when given [4, 5, 6]", () => {
		const result = makeLast([4, 5, 6]);
		assert.deepEqual(result, [0, 0, 0, 0, 0, 6]);
	});
	it("Should return [0, 0, 0, 2] when given [1, 2]", () => {
		const result = makeLast([1, 2]);
		assert.deepEqual(result, [0, 0, 0, 2]);
	});
	it("Should return [0, 3] when given [3]", () => {
		const result = makeLast([3]);
		assert.deepEqual(result, [0, 3]);
	});
});
