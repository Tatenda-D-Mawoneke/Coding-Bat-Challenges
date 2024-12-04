export function topping3 (inputMap: Map<string, string>): Map<string, string>{
    const myMap: Map<string, string> = inputMap
    if(myMap.get("potato")){
        myMap.set("fries", myMap.get("potato") || "")
    }
    if(myMap.get("salad")){
        myMap.set("spinach", myMap.get("salad") || "")
    }

    return myMap
}