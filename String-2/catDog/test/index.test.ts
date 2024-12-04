import { assert } from "chai";
import { catDog } from "../src/index.js";

/*
Return true if the string "cat" and "dog" appear the same number of times in the given string.

catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true
*/

describe("catDog", () => {
	it("Should return true when given catdog", () => {
		const result = catDog("catdog");
		assert.equal(result, true);
	});
	it("Should return false when given catcat", () => {
		const result = catDog("catcat");
		assert.equal(result, false);
	});
	it("Should return true when given 1cat1cadodog", () => {
		const result = catDog("1cat1cadodog");
		assert.equal(result, true);
	});
});
