import { assert } from "chai";
import { topping2 } from "../src/index.js";

/*
Given a map of food keys and their topping values, modify and return the map as follows: if the key "ice cream" has a value, set that as the value for the key "yogurt" also. If the key "spinach" has a value, change that value to "nuts".

topping2({"ice cream": "cherry"}) → {"yogurt": "cherry", "ice cream": "cherry"}
topping2({"spinach": "dirt", "ice cream": "cherry"}) → {"yogurt": "cherry", "spinach": "nuts", "ice cream": "cherry"}
topping2({"yogurt": "salt"}) → {"yogurt": "salt"}
*/

describe("topping2", () => {
	it('Should return {"yogurt": "cherry", "ice cream": "cherry"} when given {"ice cream": "cherry"}', () => {
		const result = topping2(new Map([["ice cream", "cherry"]]));
		assert.deepEqual(
			result,
			new Map([
				["yogurt", "cherry"],
				["ice cream", "cherry"],
			])
		);
	});

	it('Should return {"yogurt": "cherry", "spinach": "nuts", "ice cream": "cherry"} when given {"spinach": "dirt", "ice cream": "cherry"}', () => {
		const result = topping2(
			new Map([
				["spinach", "dirt"],
				["ice cream", "cherry"],
			])
		);
		assert.deepEqual(
			result,
			new Map([
				["yogurt", "cherry"],
				["spinach", "nuts"],
				["ice cream", "cherry"],
			])
		);
	});

	it('Should return {"yogurt": "salt"} when given {"yogurt": "salt"}', () => {
		const result = topping2(new Map([["yogurt", "salt"]]));
		assert.deepEqual(result, new Map([["yogurt", "salt"]]));
	});
});
