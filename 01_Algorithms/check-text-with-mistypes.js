// Дан словарь из N слов (длина каждого не превышает K)
// В з аписи текста из М слов (также  длинной до К), где в каких-то словах может быть пропущена буква
// Для каждого слова сказать, входит ли оно в словарь (возможно с пропущенной буквой)

// Не очень красивое решение

// function checkTextWithMistypes(set, text) {
//     const wordSet =  new Set(set)
//     let map = new Map()
//     const tArr = text.toLowerCase().split(' ')
//     for(let i = 0; i < tArr.length; i++) {
//         for (let word of set) {
//             if (wordSet.has(tArr[i])) {
//                 map.set(tArr[i], true)
//             } else if (compare(word, tArr[i]) || map.get(tArr[i])) {
//                 map.set(tArr[i], true)
//             } else {
//                 map.set(tArr[i], false)
//             }
//         }
//     }
//
//     console.log([...map.entries()])
//     return [...map.entries()]
//
// }
//
// function compare(setWord, textWord) {
//     const set = new Set()
//     for (let i = 0; i < setWord.length; i++) {
//         set.add(
//             `${setWord.slice(0, i)}${setWord.slice(i + 1)}`
//         )
//         //console.log(setWord.slice(0, i - 1),  setWord.slice(i + 1), set)
//     }
//     console.log(setWord, textWord, set, set.has(textWord))
//     return set.has(textWord)
// }

function checkTextWithMistypes(set, text) {
    const wordSet = new Set(set)
    const resMap = new Map()
    text = text.toLowerCase().split(' ')

    for (let word of wordSet) {
        for (let i = 0; i < word.length; i++) {
            wordSet.add(
                `${word.slice(0,  i)}${word.slice(i + 1)}`
            )
        }
    }
    console.log(wordSet)
    for (let i = 0; i < text.length; i++) {
        if (wordSet.has(text[i])) {
            resMap.set(text[i], true)
        } else {
            resMap.set(text[i], false)
        }
    }

    console.log(resMap)
    return resMap

}


checkTextWithMistypes(['quick', 'fox', 'jumps', 'dog', 'the'], 'The quik brown fox jump over th lazy dog')

