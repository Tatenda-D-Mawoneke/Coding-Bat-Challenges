export function makeLast(input: number[]): number[] {
	const last = input[input.length - 1];
	let newArray = new Array(input.length * 2).fill(0);
	newArray[newArray.length - 1] = last;
	
	return newArray;
}
