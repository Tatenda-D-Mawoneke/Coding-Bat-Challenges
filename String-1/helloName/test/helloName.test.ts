import { assert } from "chai";
import { helloName } from "../src/helloName.js";

// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

// helloName("Bob") → "Hello Bob!"
// helloName("Alice") → "Hello Alice!"
// helloName("X") → "Hello X!"

describe("helloName", () => {
	it("Should return a greeting of the form 'Hello Bob!' given a string name: 'Bob'", () => {
		const result = helloName("Bob");
		assert.equal(result, "Hello Bob");
	});
	it("Should return a greeting of the form 'Hello Alice!' given a string name: 'Alice'", () => {
		const result = helloName("Alice");
		assert.equal(result, "Hello Alice");
	});
	it("Should return a greeting of the form 'Hello X!' given a string name: 'X'", () => {
		const result = helloName("X");
		assert.equal(result, "Hello X");
	});
});
