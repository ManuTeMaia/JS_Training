//Найти максимальное число в последовательности N(N>0)

function findMax(arr) {

    // Вариант хорош только для небольших значений
    // let res = arr[0]
    // for(let i = 1; i < arr.length; i ++) {
    //     if(arr[i] > res) {
    //         res = arr[i]
    //     }
    // }
    // return res

    // Лучший вариант для сравнения больших объектов
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[res]) {
            res = i
        }
    }
    console.log(arr[res])
    return arr[res]
}

// findMax([1,2,3,6,10,9]) //10
// findMax([1,2,3,6,4,9]) //9
// findMax([10,2,3,6,4,9]) //10
// findMax(['aaa','ddddd','fdcf']) //10
