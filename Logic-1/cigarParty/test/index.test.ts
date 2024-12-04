import { assert } from "chai";
import { cigarParty } from "../src/index.js";

/*
When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.


cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true
*/

describe("Template", () => {
	it("Should return true when given '30, false'", () => {
		const result = cigarParty(30, false);
		assert.equal(result, false);
	});
	it("Should return true when given '50, false'", () => {
		const result = cigarParty(50, false);
		assert.equal(result, true);
	});
	it("Should return true when given '70, true'", () => {
		const result = cigarParty(70, true);
		assert.equal(result, true);
	});
});
