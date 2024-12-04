import { assert } from "chai";
import { topping1 } from "../src/index.js";

/*
Given a map of food keys and topping values, modify and return the map as follows: if the key "ice cream" is present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".

topping1({"ice cream": "peanuts"}) → {"bread": "butter", "ice cream": "cherry"}
topping1({}) → {"bread": "butter"}
topping1({"pancake": "syrup"}) → {"bread": "butter", "pancake": "syrup"}
*/

describe("topping1", () => {
	it('Should return {"bread": "butter", "ice cream": "cherry"} when given {"ice cream": "peanuts"}', () => {
		const result = topping1(new Map([["ice cream", "peanuts"]]));
		assert.deepEqual(
			result,
			new Map([
				["bread", "butter"],
				["ice cream", "cherry"],
			])
		);
	});
	it('Should return {"bread": "butter"} when given {}', () => {
		const result = topping1(new Map());
        console.log("result:", result);
		assert.deepEqual(
			result,
			new Map([
				["bread", "butter"]
			])
		);
	});
	it('Should return {"bread": "butter", "pancake": "syrup"} when given {"pancake": "syrup"}', () => {
		const result = topping1(new Map([["pancake", "syrup"]]));
		assert.deepEqual(
			result,
			new Map([
				["bread", "butter"],
				["pancake", "syrup"],
			])
		);
	});
});
