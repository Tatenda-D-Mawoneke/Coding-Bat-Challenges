export function start1(inputA: number[], inputB: number[]): number {
	if(inputA[0] == 1 && inputB[0] == 1){
		return 2
	}
	if(inputA[0] == 1 || inputB[0] == 1){
		return 1
	}

	return 0
}
