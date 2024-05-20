export function maxEnd3(input: number[]): number[] {
	const largest = input[0] >= input[2] ? input[0] : input[2]
	const resultArray = new Array(3)

	return resultArray.fill(largest)
}
