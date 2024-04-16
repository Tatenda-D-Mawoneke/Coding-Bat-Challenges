export default function lastChars(input1: string, input2: string): string {
	const output1 = input1.length > 0 ? input1[0] : "@";
	const output2 = input2.length > 0 ? input2[input2.length - 1] : "@";
	return output1 + output2;
}
