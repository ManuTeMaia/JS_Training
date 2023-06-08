//

function bynarySearchLeft(arr, check, params) {
    let left = arr[0]
    let right = arr[arr.length - 1]
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if(check(mid, checkparams)) {
            right  = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

function bynarySearchRight(left, right, check, checkparams) {
    while (left < right) {
        let mid = Math.floor((left + right+1) / 2)
        if(check(mid, checkparams)) {
            right  = mid
        } else {
            left = mid - 1
        }
    }
    return left
}

function stickerCheck(size, ...params) {
    const [w, h, n] = params
    return ((w / size) * (h / size) <= n)
}

console.log(bynarySearchRight(1, 10, stickerCheck(), [10, 20, 15]))
