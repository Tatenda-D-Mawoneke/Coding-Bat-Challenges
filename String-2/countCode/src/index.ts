export function countCode(input: string): number {
	let result = 0;
	for (let i = 0; i < input.length; i++) {
		let word1 = input[i] + input[i + 1] 
		let word2 = input[i+3]
		if (word1 == "co" && word2 == "e") {
			result++;
		}
	}
	return result;
}
