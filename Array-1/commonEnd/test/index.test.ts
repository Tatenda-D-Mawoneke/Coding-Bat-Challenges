import { assert } from "chai";
import { commonEnd } from "../src/index.js";

// Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true

describe("commonEnd", () => {
	it("Should true when given [1, 2, 3], [7, 3]", () => {
		const result = commonEnd([1, 2, 3], [7, 3]);
		assert.equal(result, true);
	});
	it("Should false when given [1, 2, 3], [7, 3, 2]", () => {
		const result = commonEnd([1, 2, 3], [7, 3, 2]);
		assert.equal(result, false);
	});
	it("Should true when given [1, 2, 3], [1, 3]", () => {
		const result = commonEnd([1, 2, 3], [1, 3]);
		assert.equal(result, true);
	});
});
