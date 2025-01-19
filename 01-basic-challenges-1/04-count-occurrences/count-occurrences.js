function countOccurrences(text, search) {
    let result = 0
    for(let i=0; i<text.length; i++) {
        if(text[i] == search) {
            result++
        }
    }
    return result
}

module.exports = countOccurrences;
