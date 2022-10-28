// Найти минимальное четное число в последовательности
// если нет, вернуть -1

function findMinOdd(arr) {
    let res = -1
    let flag = false
    for (let i = 0; i<arr.length; i++) {
        if ((!flag || arr[i] < res) && (arr[i] % 2 === 0)) {
            res = arr[i]
            flag = true
        }
    }

    console.log(res)
    return res
}

findMinOdd([4,6,8,3,5]) //2
findMinOdd([1,2,1,1,4,6,-2, -4]) //-4
findMinOdd([1,3,5]) //-1
findMinOdd([]) //-1
