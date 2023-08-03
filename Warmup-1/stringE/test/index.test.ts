import { assert } from "chai";
import { stringE } from "../src";

// Return true if the given string contains between 1 and 3 'e' chars.

// stringE("Hello") → true
// stringE("Heelle") → true
// stringE("Heelele") → false

describe("stringE", () => {
  it("should return true if passed 'Hello', a string containing 1 e character", () => {
    const result = stringE("Hello");
    assert.equal(result, true);
  });
  it("should return true if passed 'Helle', a string containing 2 e characters", () => {
    const result = stringE("Helle");
    assert.equal(result, true);
  });
  it("should return true if passed 'Heelle', a string containing 3 e characters", () => {
    const result = stringE("Heelle");
    assert.equal(result, true);
  });
  it("should return true if passed a string containing between and including 1-3 e characters", () => {
    const result = stringE("testOverload");
    assert.equal(result, true);
  });
  it("should return false if passed a string not containing no e characters", () => {
    const result = stringE("loram ipsum");
    assert.equal(result, false);
  });
  it("should return false if passed a string with more than 3 e characters", () => {
    const result = stringE(
      "Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeello"
    );
    assert.equal(result, false);
  });
});
