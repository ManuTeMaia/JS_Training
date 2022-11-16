/**Необходимо написать функцию для подсчета суммы всех числовых значений в массиве.
 Валидными числовыми значениями являются так же строки, которые начинаются с цифр.
 В этом случае в качестве числового значения нужно использовать эту начальную последовательность цифр.
 Массив может содержать любые типы данных, быть не плоским.**/


function sum(arr) {
    let sum = 0
    const sumArr = plain(arr)

    for (let i = 0; i < sumArr.length; i++) {
        if(!isNaN(parseInt(sumArr[i]))) {
            sum += parseInt(sumArr[i],10)
        }
    }
    console.log(sum)
    return sum
}

function plain(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            const flat = plain(arr[i])
            for (let j = 0; j < flat.length; j++) {
                newArr.push(flat[j])
            }
        } else  {
           newArr.push(arr[i])
        }
    }
    return newArr
}

sum([1, 'x', '2x', ['3', ['x2', '5']]]); // 11
sum([1, 'x', '23x', ['x3', ['x2', '2']]]); // 26
