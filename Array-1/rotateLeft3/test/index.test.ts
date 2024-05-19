import { assert } from "chai";
import { rotateLeft3 } from "../src/index.js";

// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

// rotateLeft3([1, 2, 3]) → [2, 3, 1]
// rotateLeft3([5, 11, 9]) → [11, 9, 5]
// rotateLeft3([7, 0, 0]) → [0, 0, 7]

describe("rotateLeft3", () => {
	it("Should [2, 3, 1] when given [1, 2, 3]", () => {
		const result = rotateLeft3([1, 2, 3]);
		assert.deepEqual(result, [2, 3, 1]);
	});
	it("Should [11, 9, 5] when given [5, 11, 9]", () => {
		const result = rotateLeft3([5, 11, 9]);
		assert.deepEqual(result, [11, 9, 5]);
	});
	it("Should [0, 0, 7] when given [7, 0, 0]", () => {
		const result = rotateLeft3([7, 0, 0]);
		assert.deepEqual(result, [0, 0, 7]);
	});
});
