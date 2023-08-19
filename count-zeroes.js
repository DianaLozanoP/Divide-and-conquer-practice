function countZeroes(arr) {
    let indexLeft = 0
    let indexRight = arr.length - 1
    while (arr[indexLeft] > 0) {
        let middleIndex = Math.floor((indexLeft + indexRight) / 2)
        let middleValue = arr[middleIndex]
        if (middleValue === 1) {
            indexLeft = middleIndex + 1
        }
        else {
            indexLeft = indexLeft + 1
        }
    }
    return (arr.length - indexLeft)
}

// module.exports = countZeroes