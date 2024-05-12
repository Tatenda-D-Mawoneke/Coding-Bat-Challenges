import { assert } from "chai";
import without2 from "../src";

// Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

// without2("HelloHe") → "lloHe"
// without2("HelloHi") → "HelloHi"
// without2("Hi") → ""

describe("without2", () => {
	it("Should return 'lloHe' when given 'HelloHe'", () => {
		const result = without2("HelloHe");
		assert.equal(result, "lloHe");
	});
	it("Should return 'lloHe' when given 'HelloHi'", () => {
		const result = without2("HelloHi");
		assert.equal(result, "lloHe");
	});
	it("Should return '' when given 'Hi'", () => {
		const result = without2("Hi");
		assert.equal(result, "");
	});
});
