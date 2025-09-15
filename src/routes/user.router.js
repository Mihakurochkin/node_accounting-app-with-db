const express = require('express');
const { usersController } = require('../controllers/users.controller');
const router = express.Router();

router.route('/').get(usersController.getAll).post(usersController.add);

router
  .route('/:id')
  .get(usersController.getById)
  .patch(usersController.update)
  .delete(usersController.remove);

module.exports = router;
