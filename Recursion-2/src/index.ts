export function groupSum(startingIndex: number, group: number[], target: number): boolean {
	if (group[startingIndex] + group[startingIndex + 1] == target) {
		return true;
	}

	groupSum(startingIndex + 1, group, target);
	return false;
}
