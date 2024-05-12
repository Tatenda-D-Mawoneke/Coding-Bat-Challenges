import { assert } from "chai";
import startWord from "../src";

/*
Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

startWord("hippo", "hi") → "hi"
startWord("hippo", "xip") → "hip"
startWord("hippo", "i") → "h"
*/

describe("startWord", () => {
	it("Should return 'hi' when given 'hippo' and 'hi'", () => {
		const result = startWord("hippo", "hi");
		assert.equal(result, "hi");
	});
	it("Should return 'hip' when given 'hippo' and 'xip'", () => {
		const result = startWord("hippo", "xip");
		assert.equal(result, "hip");
	});
	it("Should return 'h' when given 'hippo' and 'i'", () => {
		const result = startWord("hippo", "i");
		assert.equal(result, "h");
	});
});
