// 1. Создать двумерный массив, c заданнонй высотой и шириной, заполненный каким-нибудь символом
// 2. Создать hash объект с методами add, get, delete

function twoDimensionalArray(w, h, fill) {
    let matrix = []

    for(let i = 0; i  < w; i++) {
        matrix[i] = []
        for(let j = 0; j < h; j++) {
            matrix[i][j] = fill ? fill : null
        }
    }

    console.log(matrix)
    return matrix

}

// twoDimensionalArray(3)
// twoDimensionalArray(3,2)
// twoDimensionalArray(3,5,'_')

class HashObj {

    constructor(length) {
        this.length = length
        this.set = twoDimensionalArray(this.length)
    }

    add(el) {
        if(HashObj._find(el, this.set, this.length)) return
        const list = this.set[el  %  this.length]
        list.push(el)
    }

    get(el) {
        let res = 'N/A'
        const list = this.set[el  %  this.length]
        for(let i = 0; i < list.length; i++) {
            if(list[i] === el) {
                res = el
            }
        }

        return HashObj._console(res)
    }

    static _find(el, set, length) {
        const list = set[el  %  length]
        for(let i = 0; i < list.length; i++) {
            if(list[i] === el) {
                return true
            }
        }
        return false
    }

    delete(el) {
        const list = this.set[el  %  this.length]
        for(let i = 0; i < list.length; i++) {
            if(list[i] === el) {
                list[i] = list[list.length -1]
                list.pop()
            }
        }
        return HashObj._console(this.set)
    }

    print() {
        return HashObj._console(this.set)
    }

    static _console(str) {
        return console.log(str)
    }

}

const hash = new HashObj(10)
hash.add(35)
hash.add(14)
hash.add(14)
hash.add(164)
//hash.print()
//hash.get(14)
//hash.delete(14)
