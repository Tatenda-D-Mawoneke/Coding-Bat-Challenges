export default function deFront(input: string): string {
	let substring = input.substring(2);

	if (input[1] == "b") {
		return "b" + substring;
	} else if (input[0] == "a") {
		return "a" + substring;
	} else return substring;
}
