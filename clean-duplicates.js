function cleanDuplicates(arr) {
    return [...new Set(arr)]
}

console.log (cleanDuplicates([1,2,3,4,5,1,2,3,4,9]))
