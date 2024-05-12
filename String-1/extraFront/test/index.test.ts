import { assert } from "chai";
import extraFront from "../src";

// Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

// extraFront("Hello") → "HeHeHe"
// extraFront("ab") → "ababab"
// extraFront("H") → "HHH"

describe("extraFront", () => {
	it("It should return 'HeHeHe' when given 'Hello'", () => {
		const result = extraFront("Hello");
		assert.equal(result, "HeHeHe");
	});
	it("It should return 'ababab' when given 'ab'", () => {
		const result = extraFront("ab");
		assert.equal(result, "ababab");
	});
	it("It should return 'HHH' when given 'H'", () => {
		const result = extraFront("H");
		assert.equal(result, "HHH");
	});
});
