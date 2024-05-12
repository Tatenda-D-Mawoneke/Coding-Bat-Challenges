import { assert } from "chai";
import { describe } from "mocha";
import wihtoutX2 from "../src";

// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

// withoutX2("xHi") → "Hi"
// withoutX2("Hxi") → "Hi"
// withoutX2("Hi") → "Hi"

describe("withoutX2", () => {
	it("Should return 'Hi' when given 'xHi'", () => {
		const result = wihtoutX2("xHi");
		assert.equal(result, "Hi");
	});
	it("Should return 'Hi' when given 'Hxi'", () => {
		const result = wihtoutX2("Hxi");
		assert.equal(result, "Hi");
	});
	it("Should return 'Hi' when given 'Hi'", () => {
		const result = wihtoutX2("Hi");
		assert.equal(result, "Hi");
	});
});
