//Дана строка, нужно найти наибольшее число повторяющихся знаков

function maxCharsInString(str) {
    if (str.length === 0) return false
    let char = ''
    let co = co2 = 0
    let max = 0
    // Плохой вариант за O(N^2)
    // for(let i = 0; i < str.length; i++) {
    //     let currCount = 0
    //     for(let j = 0; j < str.length; j++){
    //         co++
    //         if(str[i] === str[j]) {
    //                         currCount++
    //                      }
    //                     if (count < currCount) {
    //                          count = currCount
    //                          char = str[i]
    //                      }
    //     }
    // }

    // Средний вариант за O(Nk)
    // let set = [...new Set(str)]
    //
    // for(let i = 0; i < set.length; i++) {
    //     let currCount = 0
    //     for(let j = 0; j < str.length; j++) {
    //         co++
    //         if(set[i] === str[j]) {
    //             currCount++
    //         }
    //         if (count < currCount) {
    //             count = currCount
    //             char = set[i]
    //         }
    //     }
    //
    // }

    // Лучший вариант за O(1)
    const map = new Map()
    for(char of str) {
        co++
        if(map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    for(let key of map.keys()) {
        co2++
        if(map.get(key) > max) {
            max = map.get(key)
            char = key
        }
    }
    console.log(max, char, co, co2)
    return char
}

maxCharsInString('') // false
maxCharsInString('strtrtrtt') // 't'
maxCharsInString('abbaaaacccddhkkjbkjh') // 'a'
