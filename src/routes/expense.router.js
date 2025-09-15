const express = require('express');
const { expensesController } = require('../controllers/expenses.controller');
const router = express.Router();

router.route('/').get(expensesController.getAll).post(expensesController.add);

router
  .route('/:id')
  .get(expensesController.getById)
  .patch(expensesController.update)
  .delete(expensesController.remove);

module.exports = router;
