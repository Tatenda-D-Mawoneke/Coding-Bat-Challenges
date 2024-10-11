export function alarmClock(day: number, onHoliday: boolean): string {
	if (onHoliday) {
		if (day == 0 || day == 6) {
			return "off";
		} else return "10:00";
	} else {
		if (day == 0 || day == 6) {
			return "10:00";
		} else return "7:00";
	}
}
