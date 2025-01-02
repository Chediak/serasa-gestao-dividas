const DebtRepository = require('../repositories/DebtRepository');

class DebtService {
  async createDebt(userId, debtData) {
    return await DebtRepository.create({ ...debtData, userId });
  }

  async getUserDebts(userId) {
    const debts = await DebtRepository.findAllByUser(userId);
    return debts.map((debt) => ({
      ...debt,
      overdue: new Date(debt.dueDate) < new Date(),
    }));
  }
}

module.exports = new DebtService();
