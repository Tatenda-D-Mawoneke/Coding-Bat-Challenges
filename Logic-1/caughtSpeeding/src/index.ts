export function caughtSpeeding(speed: number, isBirthday: boolean): number {
	let speedLowerLimit = 61;
	let speedUpperLimit = 80;
	if (isBirthday) {
		speedLowerLimit += 5;
		speedUpperLimit += 5;
	}

	return speedTest(speed, speedLowerLimit, speedUpperLimit);
}

function speedTest(speed: number, lowerLimit: number, upperLimit: number): number {
	if (speed >= upperLimit) {
		return 2;
	} else if (speed >= lowerLimit && speed <= upperLimit) {
		return 1;
	}
	return 0;
}
