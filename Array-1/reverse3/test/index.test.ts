import { assert } from "chai";
import { reverse3 } from "../src/index.js";

// Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

// reverse3([1, 2, 3]) → [3, 2, 1]
// reverse3([5, 11, 9]) → [9, 11, 5]
// reverse3([7, 0, 0]) → [0, 0, 7]

describe("Template", () => {
	it("Should return [3,2,1] when given [1,2,3]", () => {
		const result = reverse3([1, 2, 3]);
		assert.deepEqual(result, [3, 2, 1]);
	});
	it("Should return [9, 11, 5] when given [5, 11, 9]", () => {
		const result = reverse3([5, 11, 9]);
		assert.deepEqual(result, [9, 11, 5]);
	});
	it("Should return [0, 0, 7] when given [7, 0, 0]", () => {
		const result = reverse3([7, 0, 0]);
		assert.deepEqual(result, [0, 0, 7]);
	});
});
