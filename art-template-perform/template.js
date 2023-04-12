// 定义自己的模板引擎
function template(id, data) {
    var str = document.getElementById(id).innerHTML;
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/

    var pattResult = null;
    while (pattResult = pattern.exec(str)) {
        str = str.replace(pattResult[0], data[pattResult[1]])
    }
}

var str = '<div>我是{{name}}<div>'
// 小括号提取分组
var pattern = /{{([a-zA-Z]+)}}/
var result = pattern.exec(str)

// output = [
//     '{{name}}',
//     'name',
//     index: 7,
//     input: '<div>我是{{name}}<div>',
//     groups: undefined
//   ]