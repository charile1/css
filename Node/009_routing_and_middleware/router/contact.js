const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('contact.js 파일에서 /contact페이지를 처리하고 있습니다.');
    res.send('<h1>여기로 연락주세요!</h1>');
});

module.exports = router;