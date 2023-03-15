const { json } = require('express');
const { get } = require('mongoose')
const {Furniture} = require('../models/furnitures')
const {validationResult} = require('express-validator')

module.exports = {
   index: (req, res) => {
        res.send('Hello World!')
      },

    getFurnitures: async (req, res)=>{
        const furnitures = await Furniture.find();
        res.json({furnitures});
    },
    createFurniture: async (req, res)=>{
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                const item = new Furniture (req.body);
                await item.save();
                res.status(201).json({item})
            } else {
                res.status(401).json(err.errors)
            }
        } catch (error) {
            res.status(401).json({error})
        }
    },
    editFurniture: async (req, res) => {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                await Furniture.findByIdAndUpdate(req.params.id, req.body);
                res.status(201).json({msg: 'se actualizo el registro ' + req.params.id});
            } else {
                res.status(401).json(err.errors)
            }
        } catch (error) {
            res.status(401).json({error})
        }
    },
    deleteFurniture: async (req, res) => {
        await Furniture.findByIdAndDelete(req.params.id);
        res.status(203).json({msg: 'se elimino el registro ' + req.params.id});
    }
}