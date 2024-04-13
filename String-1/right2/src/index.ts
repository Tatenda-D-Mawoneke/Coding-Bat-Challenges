export default function right2(input: string){
    const last2 = input.substring(input.length-2)
    const restOfString = input.substring(0, input.length-2)
    return last2+restOfString
}