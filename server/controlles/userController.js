const router = require('express').Router();

router.post('/register', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
        'Content-Type, Authorization');


});


router.post('/login', (req, res) => {

});

router.get('/logout', (req, res) => {

});

module.exports = router;
