// Данно множество целых чисел, в котором нужно найти неодинаковые А и В, которые в сумме дают Х
// Если такие числа не найдены, возвращаем [0,0]

function sumInArray(arr, x) {
    let set = new Set(arr)
    let res = [0,0]
    for(let i = 0; i < arr.length; i++) {
        if(set.has(x - arr[i])) {
            res = [x - arr[i], arr[i]]
        }
    }
    console.log(res)
    return res
}

sumInArray([], 1) // [0,0]
sumInArray([1], 1) // [0,0]
sumInArray([1,4,7,3,4,9,7], 4) // [1,3]
sumInArray([1,4,7,3,4,9,7], 10) // [3,7]
