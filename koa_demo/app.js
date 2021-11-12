const koa = require('koa')
let app =new koa()
// const fn =
// app.use(async ctx =>{
//     await setTimeout(() => {
//         ctx.body = 3333
//         console.log(1111);
//     }, 2000);   
//     console.log(2222);
// })
// app.listen(3000)

let a = new Date()
console.log(a.getHours()+':'+a.getMinutes());
const timeout = time => new Promise(resolve => setTimeout(resolve, time));

const foo = () => {
    console.log('before timeout');
    timeout(10000); // 10秒
    console.log('after timeout');
};

const main = async () => {
    console.log('before foo');
    await foo();
    console.log('after foo');
};

main();

const http = require('http');
http.createServer(app.callback()).listen(3000);