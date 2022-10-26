function anagramClean(arr) {
    const map = new Map()
    arr.forEach((word) => {
        const sorted = word
            .toLowerCase()
            .split('')
            .sort()
            .join('')
        map.set(sorted, word)
    })
    return Array.from(map.values())
}


console.log(anagramClean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));
console.log(anagramClean(["abcd", "xyz", "Zxy", "cdab", "tryu", "uYtr"]));
