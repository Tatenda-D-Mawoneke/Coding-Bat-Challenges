export function sortaSum(inputA: number, inputB: number): number {
	const sum = inputA + inputB;
	return sum >= 10 && sum <= 20 ? 20 : sum;
}
