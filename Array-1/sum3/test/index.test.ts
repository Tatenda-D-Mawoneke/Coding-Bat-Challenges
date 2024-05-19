import { assert } from "chai";
import { sum3 } from "../src/index.js";

// Given an array of ints length 3, return the sum of all the elements.

// sum3([1, 2, 3]) → 6
// sum3([5, 11, 2]) → 18
// sum3([7, 0, 0]) → 7

describe("sum3", () => {
	it("Should return 6 when given [1,2,3]", () => {
		const result = sum3([1, 2, 3]);
		assert.equal(result, 6);
	});
	it("Should return 18 when given [1,2,3]", () => {
		const result = sum3([5, 11, 2]);
		assert.equal(result, 18);
	});
	it("Should return 7 when given [1,2,3]", () => {
		const result = sum3([7, 0, 0]);
		assert.equal(result, 7);
	});
});
