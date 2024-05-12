import { assert } from "chai";
import twoChar from "../src";

// Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

// twoChar("java", 0) → "ja"
// twoChar("java", 2) → "va"
// twoChar("java", 3) → "ja"

describe("twoChar", () => {
	it("Should return ja when given java and 0", () => {
		const result = twoChar("java", 0);
		assert.equal(result, "ja");
	});
	it("Should return va when given java and2", () => {
		const result = twoChar("java", 2);
		assert.equal(result, "va");
	});
	it("Should return ja when given java and 3", () => {
		const result = twoChar("java", 3);
		assert.equal(result, "ja");
	});
});
