const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('about.js 파일에서 /about페이지를 처리하고 있습니다.');
    res.send('<h1>나는 누구인가</h1>');
});

module.exports = router;