import { assert } from "chai";
import { commonEnd } from "../src/index.js";

/*
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

endOther("Hiabc", "abc") → true
endOther("AbC", "HiaBc") → true
endOther("abc", "abXabc") → true
*/

describe("Template", () => {
	it("Should ", () => {
		const result = commonEnd("A");
		assert.equal(result, "A");
	});
});
