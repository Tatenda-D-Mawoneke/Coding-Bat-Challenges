import { assert } from "chai";
import { no23 } from "../src/index.js";

/*

Given an int array length 2, return true if it does not contain a 2 or 3.


no23([4, 5]) → true
no23([4, 2]) → false
no23([3, 5]) → false
*/

describe("no23", () => {
	it("Should return true when given [4, 5]", () => {
		const result = no23([4, 5]);
		assert.equal(result, true);
	});
	it("Should return false when given [4, 2]", () => {
		const result = no23([4, 2]);
		assert.equal(result, false);
	});
	it("Should return false when given [3, 5]", () => {
		const result = no23([3, 5]);
		assert.equal(result, false);
	});
});
