import { assert } from "chai";
import { middleWay } from "../src/index.js";

/*
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
middleWay([7, 7, 7], [3, 8, 0]) → [7, 8]
middleWay([5, 2, 9], [1, 4, 5]) → [2, 4]
*/

describe("middleWay", () => {
	it("Should return [2, 5] when given [1, 2, 3], [4, 5, 6]", () => {
		const result = middleWay([1, 2, 3], [4, 5, 6]);
		assert.deepEqual(result, [2, 5]);
	});
	it("Should return [7, 8] when given [1, 2, 3], [4, 5, 6]", () => {
		const result = middleWay([7, 7, 7], [3, 8, 0]);
		assert.deepEqual(result, [7, 8]);
	});
	it("Should return [2, 4] when given [1, 2, 3], [4, 5, 6]", () => {
		const result = middleWay([5, 2, 9], [1, 4, 5]);
		assert.deepEqual(result, [2, 4]);
	});
});
