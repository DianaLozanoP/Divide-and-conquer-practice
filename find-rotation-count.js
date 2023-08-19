function findRotationCount(arr) {
    let indexLeft = 0
    let indexRight = arr.length - 1
    count = 0
    while (arr[indexLeft] > arr[indexRight]) {
        count += 1
        indexLeft = indexLeft + 1
    }
    return (count)
}

module.exports = findRotationCount