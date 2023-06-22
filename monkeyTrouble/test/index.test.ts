// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

import { assert } from "chai";
import { monkeyTrouble } from "../src";

// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

describe("monkeyTrouble", () => {
  it("Should return true when aSmile and bSmile are true", () => {
    const result = monkeyTrouble(true, true);
    assert.equal(result, true);
  });

  it("Should return true when aSmile and bSmile are false", () => {
    const result = monkeyTrouble(false, false);
    assert.equal(result, true);
  });

  it("Should return false when aSmile and bSmile are not the same", () => {
    const result1 = monkeyTrouble(false, true);
    assert.equal(result1, false);
    const result2 = monkeyTrouble(true, false);
    assert.equal(result2, false);
  });
});
