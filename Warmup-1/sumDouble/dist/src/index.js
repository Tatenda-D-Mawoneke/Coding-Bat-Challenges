"use strict";
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDouble = void 0;
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8
function sumDouble(num1, num2) {
    return num1 == num2 ? (num1 + num2) * 2 : num1 + num2;
}
exports.sumDouble = sumDouble;
