// Дана последовательность, возможно пустая, из заков A-Z
// Функция RLE должна повторяющиеся подпоследователььности привезти к виду AAAA => A4
// (если символ встречается один раз, остается без изменений, если больше 1 раза к первому символу
// прибавляет количество его повторений)
// Функция должна выдать ошибку если строка некорректна

function stringRle(str) {
    if(!str.match(/^([A-Z]+)?$/)) return console.log('wrong format')
    let resString = [str[0]]
    let count = 0
    for(let i = 1; i < str.length; i++) {
        if(str[i] === str[i - 1]) {
            count++
            if(i === str.length - 1) {
                resString.push(count)
            }
        } else {
            count = count !== 1 ? count : ''
            resString.push(count + str[i])
            count = 1
        }
    }

    // другое решение
    // let resString = []
    // function pack(sym, cnt)  {
    //     if (cnt > 1) {
    //         return sym + cnt.toString()
    //     }
    //     return sym
    // }
    // let lastSym = str[0]
    // let lastPos = 0
    // for(let i = 0; i < str.length; i++) {
    //     if(str[i] !== lastSym) {
    //         resString.push(pack(lastSym, i - lastPos))
    //         lastSym = str[i]
    //         lastPos = i
    //     }
    // }
    // resString.push(pack(str[lastPos], str.length - lastPos))

    resString = resString.join('')
    console.log(resString)
    return resString
}

stringRle('AAAAABBBBGGGGGJJYDDDG') //  A4B4G5J2YD3G
stringRle('AABBBGGKJJJ') //  A2B3G2KJ2
stringRle('D1') // ошибка
stringRle('dbY') // ошибка
stringRle('') // пусто
stringRle('G') // G
