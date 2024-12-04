export function topping1(inputMap: Map<string, string>): Map<string, string> {
	let myMap = inputMap
    console.log("map:", myMap.get("ice cream"));
    if (myMap.get("ice cream")) {
		myMap.set("ice cream", "cherry");
	}
	myMap.set("bread", "butter");

	return myMap;
}
