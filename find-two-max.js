// Для последовательности N(N>1) найти максимальное значение и следующее за ним по величине


function findTwoMax(arr) {
    let max1 = Math.max(arr[0], arr[1])
    let max2 = Math.min(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2  =  max1
            max1 = arr[i]
        }
        else if (arr[i] > max2) {
            max2 = arr[i]
        }
    }

    console.log({max1, max2})
    return {max1, max2}
}

findTwoMax([1,2,3,6,10,9]) // [10,9]
findTwoMax([1,2]) // [2,1]
