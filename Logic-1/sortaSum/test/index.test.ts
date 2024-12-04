import { assert } from "chai";
import { sortaSum } from "../src/index.js";

/*

Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.


sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21
*/

describe("sortaSum", () => {
	it("Should return 7 when given (3,4)", () => {
		const result = sortaSum(3, 4);
		assert.equal(result, 7);
	});
	it("Should return 20 when given (9,4)", () => {
		const result = sortaSum(9, 4);
		assert.equal(result, 20);
	});
	it("Should return 7 when given (10,11)", () => {
		const result = sortaSum(10, 11);
		assert.equal(result, 21);
	});
});
