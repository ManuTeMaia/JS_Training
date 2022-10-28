//Найти максимальное число в последовательности N(N>0)

function findMaxNum(arr) {
    let res = arr[0]
    // for(let i = 1; i < arr.length; i ++) {
    //     if(arr[i] > res) {
    //         res = arr[i]
    //     }
    // }
    arr.reduce((max, curr) => {
        if(max > curr) return max
    },arr[0])
    console.log(res)
    return res
}

findMaxNum([1,2,3,6,10,9]) //10
findMaxNum([1,2,3,6,4,9]) //9
findMaxNum([10,2,3,6,4,9]) //10
