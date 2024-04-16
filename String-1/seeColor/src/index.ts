export default function seeColor(input: string):string{
  
    if(input.substring(0, 3).includes("red")  ){
        return "red"
    }else if(input.substring(0, 4).includes("blue")){
        return "blue"
    } else{
        return ""
    }

      //use .startWith string method next time
}