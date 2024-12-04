export function mapAB3(inputMap: Map<string, string>): Map<string, string> {
	if (inputMap.get("a") && !inputMap.get("b")) {
		const value = inputMap.get("a") || "";
		inputMap.set("b", value);
	}
	if (inputMap.get("b") && !inputMap.get("a")) {
		const value = inputMap.get("b") || "";
		inputMap.set("a", value);
	}
	return inputMap;
}
