function highestFrequency(arr) {
    let maxStr = ''
    let max = 0
	const map = {}

    for(let str of arr)  {
        if (map[str]) {
            map[str]++
        } else {
            map[str] = 1
        }
        if (map[str] > max) {
            max = map[str]
            maxStr = str
        }
    }

    return maxStr
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
