// Дан массив из чисел N.
// Чему равна сумма элементов на полуинтервале [M, K)  //RSQ (range sum query)

function getRsq(arr, m, k) {
    if (!arr.length) return 0

    const prefixSumsArray = []
    arr.reduce((sum, cur) => {
        prefixSumsArray.push(sum)
        return sum + cur
    }, 0)

    return prefixSumsArray[k] - prefixSumsArray[m]
}

 console.log(getRsq([3,5,7,2,4,1,5,6], 2, 6)) // 14
 console.log(getRsq([3,5,7,2,4,1,5,6], 0, 7)) // 27
 console.log(getRsq([], 0, 1)) // 0
