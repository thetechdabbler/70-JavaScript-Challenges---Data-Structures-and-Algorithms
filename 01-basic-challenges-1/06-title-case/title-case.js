function titleCase(input) {
    let result = ""
    let letters = input.split('')
    let makeUpper = true;

    for(let letter of letters) {
       if(makeUpper) {
        result += letter.toUpperCase()
        makeUpper = false
       }
       else if(letter == " ") {
        result += letter
        makeUpper = true
       } 
       else {
        result += letter.toLowerCase()
       }
       //console.log(`The letter is "${letter}" and makeUpper value is "${Boolean(makeUpper)}"`)
    }

    return result
}

module.exports = titleCase;
