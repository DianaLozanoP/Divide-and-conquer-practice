function sortedFrequency(arr, value) {
    let indexLeft = 0
    let indexRight = arr.length - 1
    while (arr[indexLeft] < value || arr[indexRight] > value) {
        let middleIndex = Math.floor((indexLeft + indexRight) / 2)
        let middleValue = arr[middleIndex]
        if (middleValue > value) {
            indexRight = middleIndex - 1
        }
        else if (middleValue < value) {
            indexLeft = middleIndex + 1

        }
        else {
            if (arr[indexLeft] !== value) {
                indexLeft = indexLeft + 1

            }
            else if (arr[indexRight] !== value) {
                indexRight = indexRight - 1
            }

        }
    }
    if (arr[indexRight] < value) {
        return (-1)
    }
    else {
        return (indexRight - indexLeft + 1)
    }
}

// module.exports = sortedFrequency