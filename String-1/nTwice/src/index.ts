export default function nTwice(input: string, n: number):string{
    return input.substring(0,n)+input.substring(input.length-n)
}