export function squirrelPlay(temperature: number, isSummer: boolean): boolean {
	if (isSummer) {
		if (temperature >= 60 && temperature <= 100) {
			return true;
		}
	} else if (temperature >= 60 && temperature <= 90) {
		return true;
	}
	return false;
}
