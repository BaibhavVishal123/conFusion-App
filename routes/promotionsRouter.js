var express = require('express');
var router = express.Router();

var promotionController = require('../controllers/promotionsController');

router.route('/')
    .get(promotionController.list_all_promotions)
    .post(promotionController.create_a_promotion)
    .delete(promotionController.delete_all_promotions);
router.route('/:promotionId')
    .get(promotionController.list_a_promotion)
    .put(promotionController.update_a_promotion)
    .delete(promotionController.delete_a_promotion);

module.exports = router;