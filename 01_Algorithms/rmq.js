// Дан массив из чисел N.
// Какое минимальное значение есть на полуинтервале [M, K)  //RMQ (range minimum query)
// 2**k = 1 << k (!!!)

const sparseTable = (arr) => {
    let matrix = Array.from(Array(arr.length), () => Array(arr.length))

    for (let i = 0; i < arr.length; i++) {
        matrix[i][0] = arr[i]
    }

    for (let j = 1; (1 << j) <= arr.length; j++) {
        for (let i = 0; (i + (1 << j) - 1) < arr.length; i++) {  //ST[k][i] = min(ST[k-1][i], ST[k-1][i + 2**(k — 1)]) ???
            matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i + (1 << (j - 1))][j - 1])
        }
    }
    //console.log(matrix)
    return matrix
}

function getRmq(arr, m, k) {
    let res
    let j = parseInt(Math.log2(k - m + 1));
    const table = sparseTable(arr)
    console.log(table)
    if (table[m][j] <= table[k - (1 << j) + 1][j])
        res =  table[m][j];
    else
        res = table[k - (1 << j) + 1][j];

    return res
}

console.log(getRmq([3,5,7,9,4,1,5,6], 2, 6)) // 1
console.log(getRmq([3,5,7,9,4,1,5,6], 6, 7)) // 1

