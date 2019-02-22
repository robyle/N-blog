console.log('main starting');
//console.log(undefined==b);
console.log('开始引入js文件');
const a = require('./a.js');
const b = require('./b.js');
console.log('结束引入文件')
console.log("in main, a.done ="+a.done+", b.done = "+b.done);//, a.done, b.done