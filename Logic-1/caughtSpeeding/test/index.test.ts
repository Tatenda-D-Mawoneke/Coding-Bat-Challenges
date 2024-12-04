import { assert } from "chai";
import { caughtSpeeding } from "../src/index.js";

/*
You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.


caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0
*/

describe("Template", () => {
	it("Should return 0 when given (60, false)", () => {
		const result = caughtSpeeding(60, false);
		assert.equal(result, 0);
	});
	it("Should return 1 when given (65, false)", () => {
		const result = caughtSpeeding(65, false);
		assert.equal(result, 1);
	});
	it("Should return 0 when given (65, true)", () => {
		const result = caughtSpeeding(65, true);
		assert.equal(result, 0);
	});
});
