//Дана строка, нужно найти наибольшее число повторяющихся знаков за O(N)

function maxCharsInString(str) {
    if (str.length === 0) return false
    let char = ''
    let count = 0
    let co = 0

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
    let set = [...new Set(str)]

    for(let i = 0; i < set.length; i++) {
        let currCount = 0
        for(let j = 0; j < str.length; j++) {
            co++
            if(set[i] === str[j]) {
                currCount++
            }
            if (count < currCount) {
                count = currCount
                char = set[i]
            }
        }

    }
    console.log(char, co)
    return char
}

maxCharsInString('') // false
maxCharsInString('strtrtrtt') // 't'
maxCharsInString('abbaaaacccddhkkjbkjh') // 'a'
