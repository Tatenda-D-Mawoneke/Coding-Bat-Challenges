import { assert } from "chai";
import seeColor from "../src";

// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// seeColor("redxx") → "red"
// seeColor("xxred") → ""
// seeColor("blueTimes") → "blue"

describe("seeColor", () => {
	it("Should return 'red' when given 'redxx'", () => {
		const result = seeColor("redxx");
		assert.equal(result, "red");
	});
	it("Should return '' when given 'xxred'", () => {
		const result = seeColor("xxred");
		assert.equal(result, "");
	});
	it("Should return 'blue' when given 'blueTimes'", () => {
		const result = seeColor("blueTimes");
		assert.equal(result, "blue");
	});
});
