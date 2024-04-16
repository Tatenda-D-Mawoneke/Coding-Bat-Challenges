export default function minCat(input1: string, input2: string): string{
    let difference
    if (input1.length > input2.length){
        difference = input1.length - input2.length
        return input1.substring(difference) + input2
    }
    difference = input2.length - input1.length
    return input1 + input2.substring(difference) 
}