const Debt = require('../models/debt');

class DebtRepository {
  async create(data) {
    return await Debt.create(data);
  }

  async findAllByUser(userId) {
    return await Debt.findAll({ where: { userId } });
  }
  
  async update(id, updates) {
    return await Debt.update(updates, { where: { id } });
  }

  async delete(id) {
    return await Debt.destroy({ where: { id } });
  }
}

module.exports = new DebtRepository();
