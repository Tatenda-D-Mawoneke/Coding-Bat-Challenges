export function stringClean(str: string): string {
    if(str.length == 1){
        return str
    }
    const firstChar = str[0];
	const secondChar = str[1];
	if (firstChar == secondChar) {
		str.slice(1);
        stringClean(str);
	}
    return str.slice(0) + stringClean(str)
	
}