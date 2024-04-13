export default function twoChar(input: string, position: number): string{
    if(input[position+1]){
        return input.substring(position, position+2)
    }
    return input.substring(0,2)
}