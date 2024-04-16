export default function lastTwo(input:string):string{
    const inputArray = [...input]

    const lastOne = inputArray[input.length-1]
    const lastTwo = inputArray[input.length-2]

    inputArray[input.length-1] = lastTwo
    inputArray[input.length-2] = lastOne

    return inputArray.join()

}