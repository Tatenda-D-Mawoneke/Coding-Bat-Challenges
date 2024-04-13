export default function hasBad(input: string):boolean{
    const substring:string = input.substring(0,4)
    return substring.includes("bad") ? true : false
}