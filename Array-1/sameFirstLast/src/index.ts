export function sameFirstLast(input: number[]): boolean {
	return input.length == 1 || input[0] == input[input.length-1]
}
