export default function startWord(input1: string, input2: string) : string{
    if (input2.length <= 1){
        return input1[0]
    }
    const moddedInput1 = input1.substring(1)
    if( moddedInput1.startsWith(input2.substring(1))){
        return input1.substring(0,input2.length)
    }
    return ''


}