export default function extraFront(input: string): string {
	if (input.length < 2) {
		return input.repeat(3);
	}
	return input.substring(0, 2).repeat(3);
}
