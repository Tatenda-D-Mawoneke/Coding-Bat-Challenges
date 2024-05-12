import { assert } from "chai";
import { comboString } from "../src";

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"

describe("comboString", () => {
	it("Should return a string of the form short+long+short, returning 'hiHellohi' when given 'Hello' & 'hi'", () => {
		const string1 = "Hello";
		const string2 = "hi";
		const result = comboString(string1, string2);

		assert.equal("hiHellohi", result);
	});
	it("Should return a string of the form short+long+short, returning 'hiHellohi' when given 'hi' & 'Hello'", () => {
		const string1 = "hi";
		const string2 = "Hello";
		const result = comboString(string1, string2);

		assert.equal("hiHellohi", result);
	});
	it("Should return a string of the form short+long+short, returning 'hiHellohi' when given 'aaa' & 'b'", () => {
		const string1 = "aaa";
		const string2 = "b";
		const result = comboString(string1, string2);

		assert.equal("baaab", result);
	});
});
