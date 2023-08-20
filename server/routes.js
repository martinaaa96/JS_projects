const router = require('express').Router();

const userController = require('./controlles/userController');
const furnitureController = require('./controlles/furnitureController');


router.use('/users',userController);
router.use('/furnitures',furnitureController);



module.exports = router;