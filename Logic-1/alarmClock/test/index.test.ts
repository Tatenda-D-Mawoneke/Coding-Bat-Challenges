import { assert } from "chai";
import { alarmClock } from "../src/index.js";

/*
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

alarmClock(1, false) → "7:00"
alarmClock(5, false) → "7:00"
alarmClock(0, false) → "10:00"
alarmClock(1, true) → "10:00"
alarmClock(5, true) → "10:00"
alarmClock(0, true) → "off"

*/

describe("alarmClock", () => {
	it("Should return '7:00' when given (1, false)", () => {
		const result = alarmClock(1, false);
		assert.equal(result, "7:00");
	});
	it("Should return '7:00' when given (5, false)", () => {
		const result = alarmClock(5, false);
		assert.equal(result, "7:00");
	});
	it("Should return '10:00' when given (0, false)", () => {
		const result = alarmClock(0, false);
		assert.equal(result, "10:00");
	});
	it("Should return '10:00' when given (1, true)", () => {
		const result = alarmClock(1, true);
		assert.equal(result, "10:00");
	});
	it("Should return '10:00' when given (5, true)", () => {
		const result = alarmClock(5, true);
		assert.equal(result, "10:00");
	});
	it("Should return 'off' when given (0, true)", () => {
		const result = alarmClock(0, true);
		assert.equal(result, "off");
	});
});
