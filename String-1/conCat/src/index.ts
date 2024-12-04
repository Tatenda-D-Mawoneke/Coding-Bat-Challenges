export function conCat(input1: string, input2: string): string {
	let output1 = input1
	let output2 = input2

	if (input1[input1.length-1] == input2[0]) {
		output1 = input1.substring(0, input1.length - 1);
		output2 = input2;
		return output1 + output2;
	}

    return output1 + output2
}
