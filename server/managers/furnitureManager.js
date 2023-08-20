const Furniture = require('../models/Furniture');

exports.getAll = ()=> Furniture.find({});

exports.create = (ownerId,furnitureData) => Furniture.create({...furnitureData, owner: ownerId});

exports.getOne = (id)=> Furniture.findById(id);
