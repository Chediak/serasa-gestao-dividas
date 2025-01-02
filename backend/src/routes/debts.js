const express = require('express');
const router = express.Router();
const {
  createDebt,
  listDebts,
  updateDebt,
  deleteDebt,
  getSummary,
} = require('../../controllers/debtController');
const authenticate = require('../middlewares/authenticate');

// Rotas para dívidas (protegidas por autenticação)
router.post('/', authenticate, createDebt);
router.get('/', authenticate, listDebts);
router.put('/:id', authenticate, updateDebt);
router.delete('/:id', authenticate, deleteDebt);
router.get('/summary', authenticate, getSummary);

module.exports = router;
