const Furniture = require('../models/Furniture');

exports.getAll = (ownerId) => {
let filter = {};
if(ownerId){
    filter._ownerId = ownerId;

}
    return Furniture.find(filter);
}

exports.create = (ownerId, furnitureData) => Furniture.create({ ...furnitureData, _ownerId: ownerId });

exports.getOne = (id) => Furniture.findById(id);

exports.update = (id, furnitureData) => Furniture.findByIdAndUpdate(id, furnitureData);


exports.delete = (id) => Furniture.findByIdAndDelete(id);