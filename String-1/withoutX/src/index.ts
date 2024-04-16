export default function withoutX(input1: string): string {
	const firstChar = input1[0];
	const last = input1[input1.length - 1];

	let word = input1;
	if (firstChar == "x") {
		word = word.slice(1);
	}
	if (last == "x") {
		word = word.slice(0, word.length - 1);
	}

	return word;
}
