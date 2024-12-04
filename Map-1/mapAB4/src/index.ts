export function mapAB4(inputMap: Map<string, string>): Map<string, string> {
	const valueA: string | undefined = inputMap.get("a") || undefined;
	const valueB: string | undefined = inputMap.get("b") || undefined;
	if (typeof valueA == "string" && typeof valueB == "string") {
		if (valueA.length > valueB.length) {
			inputMap.set("c", valueA);
		}
		if (valueA.length < valueB.length) {
			inputMap.set("c", valueB);
		}
		if (valueA.length == valueB.length) {
			inputMap.set("a", "");
			inputMap.set("b", "");
		}
	}
	return inputMap;
}
