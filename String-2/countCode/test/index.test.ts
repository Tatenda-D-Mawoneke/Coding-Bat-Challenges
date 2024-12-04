import { assert } from "chai";
import { countCode } from "../src/index.js";

/*
Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

countCode("aaacodebbb") → 1
countCode("codexxcode") → 2
countCode("cozexxcope") → 2
*/

describe("countCode", () => {
	it("Should return 1 when given 'aaacodebbb'", () => {
		const result = countCode("aaacodebbb");
		assert.equal(result, 1);
	});
	it("Should return 2 when given 'codexxcode'", () => {
		const result = countCode("codexxcode");
		assert.equal(result, 2);
	});
	it("Should return 2 when given 'cozexxcope'", () => {
		const result = countCode("cozexxcope");
		assert.equal(result, 2);
	});
});
