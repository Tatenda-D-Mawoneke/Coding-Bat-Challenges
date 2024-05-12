export default function atFirst(input: string): string {
	if (input.length < 2) {
		return input + "@";
	}

	return input.substring(0, 2);
}
