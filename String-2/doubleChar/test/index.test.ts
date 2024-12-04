import { assert } from "chai";
import { doubleChar } from "../src/index.js";

/*
Given a string, return a string where for every char in the original, there are two chars.

doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree"
*/

describe("doubleChar", () => {
	it("Should return TThhee when given The", () => {
		const result = doubleChar("The");
		assert.equal(result, "TThhee");
	});
	it("Should return AAAAbbbb when given AAbb", () => {
		const result = doubleChar("AAbb");
		assert.equal(result, "AAAAbbbb");
	});
	it("Should return HHii--TThheerree when given Hi-There", () => {
		const result = doubleChar("Hi-There");
		assert.equal(result, "HHii--TThheerree");
	});
});
