const router = require('express').Router();

router.post('/register',(req,res)=>{
res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
});

router.post('/login',(req,res)=>{

});

router.get('/logout',(req,res)=>{

});

module.exports = router;
