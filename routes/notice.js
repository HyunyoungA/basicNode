const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    // req.query.type
    res.send('보내줄게')
    // 리액트는 res.body.data로 보내줄게를 받게된다.
})

module.exports = router;