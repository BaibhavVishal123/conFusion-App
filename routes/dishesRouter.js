var express = require('express');
var router = express.Router();

var dishController = require('../controllers/DishesController');

router.route('/')
    .get(dishController.list_all_dishes)
    .post(dishController.create_a_dish)
    .delete(dishController.delete_all_dishes);
router.route('/:dishId')
    .get(dishController.list_a_dish)
    .put(dishController.update_a_dish)
    .delete(dishController.delete_a_dish);

module.exports = router;