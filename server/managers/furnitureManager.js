const Furniture = require('../models/Furniture');

exports.getAll = () => Furniture.find({});

exports.create = (ownerId, furnitureData) => Furniture.create({ ...furnitureData, _ownerId: ownerId });

exports.getOne = (id) => Furniture.findById(id);


exports.delete = (id) => Furniture.findByIdAndDelete(id);