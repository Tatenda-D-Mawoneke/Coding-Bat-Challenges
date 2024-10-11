export function biggerTwo(inputA: number[], inputB: number[]): number[] {
	const sumA = inputA.reduce((accumulator, currentValue) => accumulator + currentValue)
	const sumB = inputB.reduce((accumulator, currentValue) => accumulator + currentValue)

	return sumB > sumA ? inputB : inputA
}
