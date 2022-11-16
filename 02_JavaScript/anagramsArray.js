function allAnagrams(arr) {
    if (arr.length < 2)  return false

    for (let i = 1; i < arr.length; i++) {
        if (isAnagram(arr[i], arr[0])) return true
    }
    return true
}

// повторение - мать...
function isAnagram(a,b) {
    if(a.length !== b.length) return false
    const map = new Map()
    for (let i = 0; i < a.length; i++) {
        if(map.has(a[i])) {
            map.set(a[i], map.get(a[i]) + 1)
        } else {
            map.set(a[i], 1)
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (map.has(b[i])) {
            map.set(b[i], map.get(b[i]) - 1)
        } else {
            return false
        }
    }

    const keys = map.keys()

    for (let key of keys) {
        if (map.get(key) !== 0) return false
    }
    return true
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
console.log(allAnagrams([])) // false
