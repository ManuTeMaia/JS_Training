//Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.
// **Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.

/*
* 0:0 0:1 0:2       2:0 1:0 0:0
* 1:0 1:1 1:2 -->   2:1 1:1 0:1
* 2:0 2:1 2:2       2:0 2:1 2:0
 */

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source) {
    const rotated = source[0].map(() => [])

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source.length; j++) {
            rotated[j][(source.length - 1) - i] = source[i][j]
        }
    }

    return rotated
}

function rotate180(source) {
    return rotate(rotate(source))
}

function rotate270(source) {
    return rotate(rotate180(source))
}

function print(source) {
    source.forEach(i => console.log(i))
}

print(rotate(matrix))
print(rotate180(matrix))
print(rotate270(matrix))
