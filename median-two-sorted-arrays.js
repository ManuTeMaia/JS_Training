//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//The overall run time complexity should be O(log (m+n)).
// Example 1:
//
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
//
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function quickSort(arr) {
    if(arr.length <= 1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let  less = []
    let greater = []
    for(let i =  0; i < arr.length; i++) {
        if(i === pivotIndex) {
            continue
        }
        if(arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    //console.log(less, greater)
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

function findMedianSortedArrays(nums1, nums2) {
    let median
    const arr = nums1.concat(nums2)
    const arrSorted = quickSort(arr)
    const midIndex = Math.floor(arrSorted.length / 2)
    if(arrSorted.length  %  2 !== 0) {
        median = arrSorted[midIndex]
    } else {
        median = (arrSorted[midIndex - 1] + arrSorted[midIndex]) / 2
    }

    console.log(median)
    return median

}

findMedianSortedArrays([1,3], [2] ) // 2
findMedianSortedArrays([1,3], [2,4] ) // 2.5
findMedianSortedArrays([-5, 3, 6, 12, 15],[-12, -10, -6, -3, 4, 10]) // 3
