import { assert } from "chai";
import { fix23 } from "../src/index.js";

/*
Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.


fix23([1, 2, 3]) → [1, 2, 0]
fix23([2, 3, 5]) → [2, 0, 5]
fix23([1, 2, 1]) → [1, 2, 1]
*/

describe("fix23", () => {
	it("Should return [1, 2, 0] when given [1, 2, 3]", () => {
		const result = fix23([1, 2, 3]);
		assert.deepEqual(result, [1, 2, 0]);
	});
	it("Should return [2, 0, 5] when given [2, 3, 5]", () => {
		const result = fix23([2, 3, 5]);
		assert.deepEqual(result, [2, 0, 5]);
	});
	it("Should return [1, 2, 1] when given [1, 2, 1]", () => {
		const result = fix23([1, 2, 1]);
		assert.deepEqual(result, [1, 2, 1]);
	});
});
