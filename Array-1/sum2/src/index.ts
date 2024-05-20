export function sum2(input: number[]): number {
	if(input.length == 0) return 0

	const additive1 = input[0] ? input[0] : NaN
	const additive2 = input[1] ? input[1] : NaN

	return additive1 + additive2

}
