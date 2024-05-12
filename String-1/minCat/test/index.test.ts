import { assert } from "chai";
import minCat from "../src";

// Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

// minCat("Hello", "Hi") → "loHi"
// minCat("Hello", "java") → "ellojava"
// minCat("java", "Hello") → "javaello"

describe("minCat", () => {
	it("Should return 'loHi' when given 'Hello' and 'Hi'", () => {
		const result = minCat("Hello", "Hi");
		assert.equal(result, "loHi");
	});
	it("Should return 'ellojava' when given 'Hello' and 'java'", () => {
		const result = minCat("Hello", "java");
		assert.equal(result, "ellojava");
	});
	it("Should return 'javaello' when given 'java' and 'Hello'", () => {
		const result = minCat("java", "Hello");
		assert.equal(result, "javaello");
	});
});
