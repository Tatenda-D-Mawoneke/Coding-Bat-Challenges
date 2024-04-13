export default function theEnd(input: string, truthy: boolean): string{
    if(truthy){
        return input.substring(0,1)
    }
    return input.substring(input.length-1)
}