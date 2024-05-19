import { assert } from "chai";
import { sameFirstLast } from "../src/index.js";

// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true

describe("sameFirstLast", () => {
	it("Should return false when given [1, 2, 3]", () => {
		const result = sameFirstLast([1, 2, 3]);
		assert.equal(result, false);
	});
	it("Should return true when given [1, 2, 3,1]", () => {
		const result = sameFirstLast([1, 2, 3, 1]);
		assert.equal(result, true);
	});
	it("Should return false when given [1, 2, 1]", () => {
		const result = sameFirstLast([1, 2, 1]);
		assert.equal(result, true);
	});
	it("Should return true when given [2]", () => {
		const result = sameFirstLast([2]);
		assert.equal(result, true);
	});
});
