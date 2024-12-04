export function doubleChar(input: string): string {
	let result: string = ""
	for (const letter of input) {
		result += letter
		result += letter
	}
	return result
}
