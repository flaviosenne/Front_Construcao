const express = require('express');
const router = express.Router();

const controller = require('../controllers/projeto');

router.post('/', controller.novo);
router.get('/', controller.listar);
router.get('/:id', controller.obterUm);
router.put('/:id', controller.atualizar);
router.delete('/', controller.excluir);

module.exports = router