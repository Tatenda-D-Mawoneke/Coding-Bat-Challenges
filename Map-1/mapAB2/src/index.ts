export function mapAB2(inputMap: Map<string, string>): Map<string, string> {
	const keyAMapA = inputMap.get("a") || "";
	const keyBMapA = inputMap.get("b") || "";
	if (keyAMapA == keyBMapA && keyAMapA != "") {
		inputMap.delete("a");
		inputMap.delete("b");
	}
	return inputMap;
}
