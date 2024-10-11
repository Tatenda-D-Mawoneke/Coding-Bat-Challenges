export function makeEnds(input: number[]): number[] {
	const first = input[0]
	const last = input[input.length-1]
	return [first,last]
}
