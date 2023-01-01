const express = require('express');
const app = express();
const port = 3000;


app.get('/users', (req, res) => {
    res.send('users 테스트 페이지 입니다')
})

app.post('/login', (req, res) => {
    res.send('login 테스트 페이지 입니다')
})

app.post('/logout', (req, res) => {
    res.send('logout 테스트 페이지 입니다')
})

app.post('/register', (req, res) => {
    res.send('register 테스트 페이지 입니다')
})


app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});