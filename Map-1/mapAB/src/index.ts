export function mapAB(inputMap: Map<string, string>): Map<string, string> {
	if (inputMap.has("a") && inputMap.has("b")) {
		inputMap.set("ab", (inputMap.get("a") || "") + (inputMap.get("b") || ""));
	}

	console.log(inputMap);
	return inputMap;
}
