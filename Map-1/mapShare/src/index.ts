export function mapShare (inputMap: Map<string, string>): Map<string, string>{
    inputMap.set("b", inputMap.get("a") || "")
    inputMap.delete("c")

    console.log("***", inputMap);
    return inputMap
}