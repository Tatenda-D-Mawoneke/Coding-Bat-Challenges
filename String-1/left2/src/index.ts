export function left2(input: string): string{
    const firstString = input.substring(0,2)
    const secondString = input.substring(2)

    return secondString+firstString
}