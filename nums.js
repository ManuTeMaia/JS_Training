//Дан массив целых чисел. Нужно найти и вернуть количество подотрезков (непрерывных подпоследовательностей)
// с заданной суммой k. Если это невозможно, функция должна вернуть 0
//Используйте хешмапу для наиболее эффективного решения по сложности.

function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;

    nums.reduce(
        (hashMap, current) => {
            sum += current;
           // console.log(sum, hashMap[sum - k])
            if (hashMap[sum - k]) {
                count += hashMap[sum - k];
            }
//console.log(count, hashMap[sum])
            hashMap[sum] = (hashMap[sum] || 0) + 1;
            console.log(hashMap)
            return hashMap;
        },
        { 0: 1 }
    );
console.log(count)
    return count;

}
function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;

    nums.reduce(
        (hashMap, current) => {
            sum += current;
            // console.log(sum, hashMap[sum - k])
            if (hashMap[sum - k]) {
                count += hashMap[sum - k];
            }
//console.log(count, hashMap[sum])
            hashMap[sum] = (hashMap[sum] || 0) + 1;
            console.log(hashMap)
            return hashMap;
        },
        { 0: 1 }
    );
    console.log(count)
    return count;

}

function subarraySum2(nums, k) {
    let count = 0;
    let sum = 0;


    console.log(count)
    return count;

}
//subarraySum([3,0,7,2,8,4,-20,10], 10) // 3
//subarraySum([-2, 10,3,1,7,4], 11) // 2
//subarraySum([10, 2, -2, -20, 10], -10) //3
//subarraySum([9, 4, 20, 3, 10, 5], 33) //2
subarraySum([1,1,5,1,5,1,5], 6)
