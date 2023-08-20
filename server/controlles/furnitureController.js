const router = require('express').Router();

const furnitureManager = require('../managers/furnitureManager');

router.get('/',async (req, res) => {
    const furnitures = await furnitureManager.getAll();

    res.json(furnitures);

});

router.get('/:furnitureId',async (req,res)=>{
    const furniture = await furnitureManager.getOne(req.params.furnitureId);

    res.json(furniture);
    
});

router.post('/', async (req, res) => {
    const furnitureData = req.body;

    await furnitureManager.create(furnitureData);

    res.json({ _id: furnitureData._id });

});

module.exports = router;