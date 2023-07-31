// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

export function in3050(num1: number, num2:number):boolean{
   const num1InRange3040 = ((num1 >= 30 && num1 <= 40 ))
   const num1InRange4050 = ((num1 >= 40 && num1 <= 50 ))
   const num2InRange3040 = ((num2 >= 30 && num2 <= 40 ))
   const num2InRange4050 = ((num2 >= 40 && num2 <= 50 ))

   return num1InRange3040 && num2InRange3040 || num1InRange4050 && num2InRange4050
 }