// Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

import { assert } from "chai";
import { commonEnd } from "../src/index.js";

// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true

describe("Template", () => {
	it("Should true when given two arrays of ints and they have the same first element or same last element", () => {
		const result = commonEnd("A");
		assert.equal(result, "A");
	});
});
