import { assert } from "chai";
import { makePi } from "../src/index.js";

// Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

// makePi() → [3, 1, 4]

describe("makePi", () => {
	it("should return an array [3,1,4]", () => {
		const result = makePi();
		assert.deepEqual(result, [3, 1, 4]);
	});
});
