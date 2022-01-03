// express 외부모듈을 가져오겠다. 
const express = require('express');

// app.메서드(PATH, HANDLER())구조
const app = express();

app.get('/',(req, res, next) => {
    console.log('get으로 /페이지에 요청이 들어왔습니다');
    res.send('hello world'); //응답값으로 보내기
});

app.get('/blog',(req, res, next) => {
    console.log('get으로 /blog페이지에 요청이 들어왔습니다');
    res.send('<h1>hello blog</h1><p>hello</p>'); 
});

app.get('/product',(req, res, next) => {
    console.log('get으로 /product페이지에 요청이 들어왔습니다');
    res.send('<h1>hello product</h1><p>hello</p>'); 
});
app.listen(8080);