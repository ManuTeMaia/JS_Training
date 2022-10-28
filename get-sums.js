// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

function getSums(arr) {
    let res = []
    if(!arr.length) return res

    const totalSum = arr.reduce((acc, curr) => {
        res.push(acc)
        return acc + curr
    })
    res.push(totalSum)

    console.log(res)
    return res
}

getSums([ 1, 2, 3, 4, 5 ]) // [ 1, 3, 6, 10, 15 ]
getSums([-2,-1,0,1]) // [-2,-3,-3,-2]
getSums([1]) // [1]
getSums([]) // []
