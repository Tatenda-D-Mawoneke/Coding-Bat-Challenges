export function cigarParty(input: number, isWeekend: boolean): boolean {
	if (isWeekend) {
		if (input >= 40) {
			return true;
		}
		return false;
	} else if (input >= 40 && input <= 60) {
		return true;
	}
	return false;
}
