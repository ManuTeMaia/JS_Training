const input = [
    {value: 'abc', order: 4, expired: false},
    {value: 'jdh', order: 2, expired: true},
    {value: 'xyz', order: 1, expired: false},
    {value: 'job', order: 3, expired: false}
]
//Конкатенировать строки из "value" с условиями:
//1. Только не просроченные
//2. Конкатенация согласно order
//3. стоки должны быть в обратном порядке
//4. В результативной строке не должны повторятьься буквы
function reverse(str) {
    const arr = str.split('')
    let start = 0;
    let end = arr.length - 1
    while (start < end) {
        let tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp
        start++
        end--
    }
    return arr.join('')
}

function uniqueString(arr) {
    let res = ''
    arr.sort((a, b) => {
        if(a.order < b.order) {return -1}
        else if(a.order > b.order) {return 1}
        else return 0
    })
    //console.log(sortArr)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].expired === false) {
            res += reverse(arr[i].value)
        }
    }
    res = new Set(res)
    const unique = Array.from(res).join('')

    console.log(unique)
    return unique
}

uniqueString(input)
