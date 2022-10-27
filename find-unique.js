function findUnique (arr) {
    if (arr.length === 0) return 0
    return arr.reduce((prev, cur) => prev ^ cur)
}

console.log (findUnique([1,2,3,4,5,1,2,3,4]))
