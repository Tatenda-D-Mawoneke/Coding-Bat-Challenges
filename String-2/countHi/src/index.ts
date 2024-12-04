export function countHi(input: string): number {
	let count = 0;

	for (let i = 0; i < input.length; i++) {
		const word1 = input[i];
		const word2 = input[i + 1];
		const word3 = word1 + word2;
		if (word3 == "hi") {
			count++;
		}
	}
	return count;
}
