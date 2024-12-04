import { assert } from "chai";
import { topping3 } from "../src/index.js";

/*
Given a map of food keys and topping values, modify and return the map as follows: if the key "potato" has a value, set that as the value for the key "fries". If the key "salad" has a value, set that as the value for the key "spinach".

topping3({"potato": "ketchup"}) → {"potato": "ketchup", "fries": "ketchup"}
topping3({"potato": "butter"}) → {"potato": "butter", "fries": "butter"}
topping3({"salad": "oil", "potato": "ketchup"}) → {"spinach": "oil", "salad": "oil", "potato": "ketchup", "fries": "ketchup"}
*/

describe("toppings3", () => {
	it('Should return {"potato": "ketchup", "fries": "ketchup"} when given {"potato": "ketchup"}', () => {
		const result = topping3(new Map([["potato", "ketchup"]]));
		assert.deepEqual(
			result,
			new Map([
				["potato", "ketchup"],
				["fries", "ketchup"],
			])
		);
	});

	it('Should return {"potato": "butter", "fries": "butter"} when given {"potato": "butter"}', () => {
		const result = topping3(new Map([["potato", "butter"]]));
		assert.deepEqual(
			result,
			new Map([
				["potato", "butter"],
				["fries", "butter"],
			])
		);
	});

	it('Should return {"spinach": "oil", "salad": "oil", "potato": "ketchup", "fries": "ketchup"} when given {"salad": "oil", "potato": "ketchup"}', () => {
		const result = topping3(new Map([["salad", "oil"], ["potato", "ketchup"]]));
		assert.deepEqual(result, new Map([["spinach", "oil"], ["salad", "oil"], ["potato", "ketchup"], ["fries", "ketchup"]]));
	});
});
