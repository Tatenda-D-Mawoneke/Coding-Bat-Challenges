import { assert } from "chai";
import { squirrelPlay } from "../src/index.js";

/*
The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.


squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true
*/

describe("Template", () => {
	it("Should return true when given (70, false)", () => {
		const result = squirrelPlay(70,false);
		assert.equal(result, true);
	});
	it("Should return true when given (95, false)", () => {
		const result = squirrelPlay(95,false);
		assert.equal(result, false);
	});
	it("Should return true when given (70, false)", () => {
		const result = squirrelPlay(95,true);
		assert.equal(result, true);
	});
})
