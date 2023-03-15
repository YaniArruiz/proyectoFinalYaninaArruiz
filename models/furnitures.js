const mongoose =require('mongoose');


const Schema= mongoose.Schema;
const furnitures = new Schema({
    type:{
        type: String,
        required: true
    },
    style:{
        type: String,
        required: true
    },
    material:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },

})

const Furniture = mongoose.model('Furniture', furnitures)
module.exports= {Furniture};