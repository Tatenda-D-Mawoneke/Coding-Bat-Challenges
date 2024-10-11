import { assert } from "chai";
import { commonEnd } from "../src/index.js";

/*
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.


double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false
*/

describe("double23", () => {
	it("Should return true when given [2,2]", () => {
		const result = commonEnd([2,2]);
		assert.equal(result, true);
	});
	it("Should return true when given [2,3]", () => {
		const result = commonEnd([3,3]);
		assert.equal(result, true);
	});
	it("Should return false when given [3,2]", () => {
		const result = commonEnd([2,3]);
		assert.equal(result, false);
	});
});
