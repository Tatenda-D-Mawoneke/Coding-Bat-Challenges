export function fix23(input: number[]): number[] {
	if (input[0] == 2 && input[1] == 3) {
		input[1] = 0;
		return input;
	}
	if (input[1] == 2 && input[2] == 3) {
		input[2] = 0;
		return input;
	}
	return input
}
