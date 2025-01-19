function isPalindrome(str) {
   
    str = str.toLowerCase()
    str = str.replace(/[^a-z0-9]/g,"")
    let [left,right ]= [0, str.length -1]
   
    let result = true
    while(left<=right) {
        if(str[left]!=str[right]) {
            result = false
            break
        } else {
            left++
            right--
        }
    }

    return result
}

module.exports = isPalindrome;
