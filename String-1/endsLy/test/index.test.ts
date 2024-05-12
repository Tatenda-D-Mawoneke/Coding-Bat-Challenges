import { assert } from "chai";
import endsLy from "../src";

// Given a string, return true if it ends in "ly".

// endsLy("oddly") → true
// endsLy("y") → false
// endsLy("oddy") → false

describe("endly", () => {
	it("Should return true if given oddly", () => {
		const result = endsLy("oddly");
		assert.equal(result, true);
	});
	it("Should return false if given y", () => {
		const result = endsLy("y");
		assert.equal(result, false);
	});
	it("Should return true if given oddy", () => {
		const result = endsLy("oddy");
		assert.equal(result, false);
	});
});
