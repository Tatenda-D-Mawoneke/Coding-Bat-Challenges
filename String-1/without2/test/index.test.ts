import { assert } from "chai";
import without2 from "../src";

describe("without2", () => {
	it("Should return 'lloHe' when given 'HelloHe'", () => {
		const result = without2("HelloHe");
		assert.equal(result, "lloHe");
	});
	it("Should return 'lloHe' when given 'HelloHi'", () => {
		const result = without2("HelloHi");
		assert.equal(result, "lloHe");
	});
	it("", () => {
		const result = without2("Hi");
		assert.equal(result, "");
	});
});
