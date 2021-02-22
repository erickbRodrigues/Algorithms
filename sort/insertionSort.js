var numbers = [99, 44, 6, 2, 520, 1, 5, 63, 87, 283, 4, 147, 0, 3, 123, 932, 52, 9, 572, 743];
var numbers2 = [99, 44, 6, 2, 520, 1, 5, 63, 87, 283, 4, 147, 0, 3, 123, 932, 52, 9, 572, 743];
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let tmp = array.splice(i, 1)[0]
        let pos = i;
        for (let j = i; j >= 0; j--) {
            if (tmp < array[j]) {
                pos = j
            }
        }
        array.splice(pos, 0, tmp)
    }

    return array
}

function insertionSort2(array) { // also works, but isnt 100% correct
    const length = array.length
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0])
        } else {
            if (array[i] < array[i - 1]) {
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        array.splice(j, 0, array.splice(i, 1)[0])
                    }
                }
            }
        }
    }
}

console.time(1)
insertionSort(numbers);
console.timeEnd(1)
console.log(numbers);
console.time(2)
insertionSort2(numbers2);
console.timeEnd(2)
console.log(numbers2);