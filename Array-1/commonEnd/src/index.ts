export function commonEnd (a: number[], b: number[]): boolean{
    return a[0] == b[0] || a.slice(-1)[0] == b.slice(-1)[0]
}