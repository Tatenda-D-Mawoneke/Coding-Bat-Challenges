import { assert } from "chai";
import { sum2 } from "../src/index.js";

// Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

// sum2([1, 2, 3]) → 3
// sum2([1, 1]) → 2
// sum2([1, 1, 1, 1]) → 2

describe("Template", () => {
	it("Should return 3 when given [1, 2, 3]", () => {
		const result = sum2([1, 2, 3]);
		assert.equal(result, 3);
	});
	it("Should return 2 when given [1, 1]", () => {
		const result = sum2([1, 1]);
		assert.equal(result, 2);
	});
	it("Should return 2 when given [1, 1, 1, 1]", () => {
		const result = sum2([1, 1, 1, 1]);
		assert.equal(result, 2);
	});
});
