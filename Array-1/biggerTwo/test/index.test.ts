import { assert } from "chai";
import { biggerTwo } from "../src/index.js";

/*

Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.


biggerTwo([1, 2], [3, 4]) → [3, 4]
biggerTwo([3, 4], [1, 2]) → [3, 4]
biggerTwo([1, 1], [1, 2]) → [1, 2]
*/

describe("biggerTwo", () => {
	it("Should return [3, 4] when given [1, 2], [3, 4]", () => {
		const result = biggerTwo([1, 2], [3, 4]);
		assert.deepEqual(result, [3, 4])
	});
	it("Should return [3, 4] when given [3, 4], [1, 2]", () => {
		const result = biggerTwo([3, 4], [1, 2]);
		assert.deepEqual(result, [3, 4])
	});
	it("Should return [1, 2] when given [1, 1], [1, 2]", () => {
		const result = biggerTwo([1, 1], [1, 2]);
		assert.deepEqual(result, [1, 2])
	});
});
