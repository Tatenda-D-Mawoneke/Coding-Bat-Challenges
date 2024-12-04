export function mapBully(inputMap: Map<string, string>): Map<string, string> {
	inputMap.set("b", inputMap.get("a") || "");
    inputMap.set("a", "")

    return inputMap
}
