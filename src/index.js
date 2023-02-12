module.exports = function check(str, bracketsConfig) {
str = str.split('')
    function lengthStrCount() {
        for (j of bracketsConfig) {
            for (i = 0; i < str.length - 1; ++i) {
                if (j[0] == str[i] && j[1] == str[i + 1]) {
                    str.splice(i, 2)
                    i = 0
                }
            }
        }
            return str.length
    }
    while (str.length != lengthStrCount()) {
        lengthStrCount()
    }
return str.length > 0 ? false : true
}


