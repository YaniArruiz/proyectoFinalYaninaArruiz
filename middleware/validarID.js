const {Furniture} = require("../models/furnitures")
const validarID = async (req, res, next) =>{
    try {
        const furniture = await Furniture.findById(req.params.id)
        if (furniture !== null) {
            next()
        } else {
           res.status(500).json({msg: "el id es invalido"}) 
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { validarID }