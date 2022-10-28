// Дана строка, функция должна позвратить новую строку из слов минимальной длины в исходной строке

function minLengthWords(str) {
    const arr = str.split(' ')
    let wordMin = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length < arr[wordMin].length) {
            wordMin = i
        }
    }
    let resString = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === arr[wordMin].length) {
            resString.push(arr[i])
        }
    }
    
    resString = resString.join(' ')
    console.log(resString)
    return resString
}

minLengthWords('sfdf nn ds erfsf dfe dffe bb') // nn ds bb
minLengthWords('') // пусто
