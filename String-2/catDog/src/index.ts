export function catDog(input: string): boolean {
	let catCount = 0
	let dogCount = 0
	for(let i = 0; i < input.length; i++){
		let check = input[i]+input[i+1]+input[i+2]
		if(check == "dog"){
			dogCount++
		}
		if(check == "cat"){
			catCount++
		}
	}

	return catCount == dogCount
}
