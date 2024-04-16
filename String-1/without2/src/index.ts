export default function without2(input:string): string{
    if(input.substring(0,2) == input.substring(input.length-2)){
        return input.substring(2)
    }
    return input
}