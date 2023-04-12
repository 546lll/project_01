##安装
```
npm install itheima-tools;
```

##导入
```js
const itheima = require("itheima-tools-chl")；
```

##格式化时间
```js
const dtStr = itheima.dateFormat(new Date());
console.log(dtStr);
```

##转义HTML中的特殊字符
```js
const htmlstr = '<h1 title = "da">dhada<span>dai&dha</span></h1>'
str = theima.htmlEscape(htmlstr);
console.log(str);
```

##还原HTML中的特殊字符
```js
console.log(itheima.htmlunEscape(str));
```

##开源协议
ISC
