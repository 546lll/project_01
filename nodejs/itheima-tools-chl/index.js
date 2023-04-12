
const date = require("./src/dataFormat")
const escape = require("./src/htmlEscape")
module.exports = {
    // 利用展开符
    ...date,
    ...escape
}