const { Op } = require('sequelize');
const { Category } = require('../models/Category.model');

const getAll = async ({ userId, from, to, categories }) => {
  const where = {};

  if (userId) {
    where.userId = userId;
  }

  if (categories) {
    const cats = categories.split(',');

    where.category = { [Op.in]: cats };
  }

  if (from || to) {
    where.spentAt = {};
  }

  if (from) {
    where.spentAt[Op.gte] = new Date(from);
  }

  if (to) {
    where.spentAt[Op.lte] = new Date(to);
  }

  const result = await Category.findAll({
    where,
  });

  return result;
};

const getById = async (id) => Category.findByPk(id);
const add = (expense) => Category.create(expense);

const remove = (id) => Category.destroy({ where: { id } });

const update = async (id, categoryData) => {
  await Category.update(categoryData, { where: { id } });

  return getById(id);
};

const categoryService = {
  getAll,
  getById,
  add,
  remove,
  update,
};

module.exports = {
  categoryService,
};
