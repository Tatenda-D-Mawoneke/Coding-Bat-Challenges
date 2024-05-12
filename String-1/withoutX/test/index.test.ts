import { assert } from "chai";
import withoutX from "../src";

// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

// withoutX("xHix") → "Hi"
// withoutX("xHi") → "Hi"
// withoutX("Hxix") → "Hxi"

describe("withoutX", () => {
	it("Should return Hi when given xHix", () => {
		const result = withoutX("xHix");
		assert.equal(result, "Hi");
	});
	it("Should return Hi without the xHi", () => {
		const result = withoutX("xHi");
		assert.equal(result, "Hi");
	});
	it("Should return Hxi without the Hxix", () => {
		const result = withoutX("Hxix");
		assert.equal(result, "Hxi");
	});
});
