export function rotateLeft3(input: number[]): number[] {
	const first = input.slice(0)[0]
	input.shift()
	input.push(first);
	return input
}
