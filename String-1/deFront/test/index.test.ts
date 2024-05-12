import { assert } from "chai";
import deFront from "../src";

// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

// deFront("Hello") → "llo"
// deFront("java") → "va"
// deFront("away") → "aay"

describe("deFront", () => {
	it("Should return 'llo' when given 'Hello'", () => {
		const result = deFront("Hello");
		assert.equal(result, "llo");
	});
	it("Should return 'va' when given 'java'", () => {
		const result = deFront("java");
		assert.equal(result, "va");
	});
	it("Should return 'aay' when given 'away'", () => {
		const result = deFront("away");
		assert.equal(result, "aay");
	});
});
