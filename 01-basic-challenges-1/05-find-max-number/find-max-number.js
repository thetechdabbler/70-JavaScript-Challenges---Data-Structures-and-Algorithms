function findMaxNumber(arr) {
    let max = null;

    for(let num of arr) {
        if(max == null || max < num) {
            max = num
        }
    }

    return max;
}

module.exports = findMaxNumber;
