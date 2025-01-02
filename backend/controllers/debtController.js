const { Debt } = require('../models');

// Criar Dívida
exports.createDebt = async (req, res) => {
  try {
    const { title, amount, dueDate, status, notes } = req.body;
    const debt = await Debt.create({
      title,
      amount,
      dueDate,
      status,
      notes,
      userId: req.userId,
    });
    res.status(201).json(debt);
  } catch (error) {
    res.status(500).json({ error: 'Error creating debt' });
  }
};

// Listar Dívidas
exports.listDebts = async (req, res) => {
  try {
    const debts = await Debt.findAll({ where: { userId: req.userId } });
    res.status(200).json(debts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching debts' });
  }
};

// Atualizar Dívida
exports.updateDebt = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const debt = await Debt.update(updates, { where: { id, userId: req.userId } });
    res.status(200).json(debt);
  } catch (error) {
    res.status(500).json({ error: 'Error updating debt' });
  }
};

// Excluir Dívida
exports.deleteDebt = async (req, res) => {
  try {
    const { id } = req.params;
    await Debt.destroy({ where: { id, userId: req.userId } });
    res.status(200).json({ message: 'Debt deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting debt' });
  }
};

// Resumo Financeiro
exports.getSummary = async (req, res) => {
  try {
    const debts = await Debt.findAll({ where: { userId: req.userId } });
    const total = debts.reduce((sum, debt) => sum + debt.amount, 0);
    const paid = debts.filter((debt) => debt.status === 'Pago').length;
    res.status(200).json({ total, paid, count: debts.length });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching summary' });
  }
};
