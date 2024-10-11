import { assert } from "chai";
import { start1 } from "../src/index.js";

/*

Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.


start1([1, 2, 3], [1, 3]) → 2
start1([7, 2, 3], [1]) → 1
start1([1, 2], []) → 1
*/

describe("start1", () => {
	it("Should return 2 when given [1, 2, 3], [1, 3]", () => {
		const result = start1([1, 2, 3], [1, 3]);
		assert.equal(result, 2);
	});
	it("Should return 1 when given [7, 2, 3], [1]", () => {
		const result = start1([7, 2, 3], [1]);
		assert.equal(result, 1);
	});
	it("Should return 1 when given [1, 2], []", () => {
		const result = start1([1, 2], []);
		assert.equal(result, 1);
	});
});
