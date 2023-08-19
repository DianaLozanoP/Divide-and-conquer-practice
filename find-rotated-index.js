function findRotatedIndex(arr, value) {
    let indexLeft = 0
    let indexRight = arr.length - 1
    while (arr[indexLeft] !== value && indexLeft !== arr.length) {
        let middleIndex = Math.floor((indexLeft + indexRight) / 2)
        let middleValue = arr[middleIndex]
        if (middleValue > value && arr[indexLeft] > value) {
            indexLeft = middleIndex + 1
        }
        else if (middleValue < value) {
            indexLeft = middleIndex + 1
        }
        else if (middleValue > value && arr[indexLeft] < value) {
            indexRight = middleIndex - 1
        }
        else if (middleValue < value && arr[indexLeft] < value && arr[indexRight] < value) {
            indexLeft = arr.length
        }
        else {
            indexLeft = middleIndex
        }
    }
    if (indexLeft === arr.length) {
        return (-1)
    }
    else {
        return (indexLeft)
    }
}

// module.exports = findRotatedIndex