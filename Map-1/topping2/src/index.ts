export function topping2 (inputMap: Map<string, string>): Map<string, string>{
    const myMap: Map<string, string> = inputMap;
    if(myMap.get("ice cream")){
        myMap.set("yogurt", myMap.get("ice cream") || "")
    }
    if(myMap.get("spinach")){
        myMap.set("spinach", "nuts")
    }

    return myMap
}