function findFloor(arr, value) {
    let indexLeft = 0
    let indexRight = arr.length - 1
    while (arr[indexRight] >= value) {
        let middleIndex = Math.floor((indexLeft + indexRight) / 2)
        let middleValue = arr[middleIndex]
        if (middleValue > value) {
            indexRight = middleIndex - 1
        }
        else if (middleValue < value) {
            indexLeft = middleIndex + 1
        }
    }
    if (arr[indexRight] == undefined) {
        return (-1)
    }
    else {
        return (arr[indexRight])
    }
}

// module.exports = findFloor