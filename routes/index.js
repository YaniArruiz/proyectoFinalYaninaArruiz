const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {validarID} = require('../middleware/validarID')
const controller = require('../controllers/indexController')

router.get('/', controller.index );
router.get('/ver', controller.getFurnitures);
router.post('/crear' ,[
  check("type").not().isEmpty().withMessage('El campo type es obligatorio'),
  check("style").not().isEmpty().withMessage('El campo style es obligatorio'),
  check("material").not().isEmpty().withMessage('El campo material es obligatorio'),
  check("price").not().isEmpty().withMessage('El campo price es obligatorio'),
],controller.createFurniture);
router.put('/editar/:id' ,validarID,[
  check("type").not().isEmpty().withMessage('El campo type es obligatorio'),
  check("style").not().isEmpty().withMessage('El campo style es obligatorio'),
  check("material").not().isEmpty().withMessage('El campo material es obligatorio'),
  check("price").not().isEmpty().withMessage('El campo price es obligatorio'),
],controller.editFurniture)
router.delete('/eliminar/:id', validarID,controller.deleteFurniture)


  module.exports = router