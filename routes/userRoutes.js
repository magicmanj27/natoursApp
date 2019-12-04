const express = require('express');
const userController = require('./../controllers/usersController.js');
const authController = require('./../controllers/authController.js');

// 1.) ACTUAL USER ROUTES
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
