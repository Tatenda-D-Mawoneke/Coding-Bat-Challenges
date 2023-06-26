// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

import { assert } from "chai";
import { parrotTrouble } from "../src";

// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false

describe("parrotTrouble", () => {
  it("should return true if the parrot is talking and the hour is 6", () => {
    const result = parrotTrouble(true, 6);
    assert.equal(result, true);
  });
  it("should return false if the parrot is talking and the hour is 7", () => {
    const result = parrotTrouble(true, 7);
    assert.equal(result, false);
  });
  it("should return false if the parrot is not talking and the hour is 6", () => {
    const result = parrotTrouble(false, 6);
    assert.equal(result, false);
  });
});
