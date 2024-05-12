export function nonStart(string1: string, string2: string): string {
	const string1Modified = string1.slice(1, string1.length);
	const string2Modified = string2.slice(1, string1.length);

	return string1Modified + string2Modified;
}
