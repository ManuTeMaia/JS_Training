// Найти в последовательности крайнее левое вхождение положительного числа X  (его индекс)
//если число не найдено, то возвращаем -1

function findVeryLeft(arr, x) {
    let res = -1
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] === x) && (res === -1)) {
            res = i
        }
    }

    console.log(res)
    return res
}


findVeryLeft([1,2,3,4,3], 3) // 2
findVeryLeft([1,2,4,3], 3) // 3
findVeryLeft([1,2,3,4], 1) // 0
findVeryLeft([], 1) // -1
findVeryLeft([1], 3) // -1
findVeryLeft([1,1,1,1,1,1], 1) // 0
