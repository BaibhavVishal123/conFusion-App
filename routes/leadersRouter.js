var express = require('express');
var router = express.Router();

var leaderController = require('../controllers/leadersController');

router.route('/')
    .get(leaderController.list_all_leaders)
    .post(leaderController.create_a_leader)
    .delete(leaderController.delete_all_leaders);
router.route('/:leaderId')
    .get(leaderController.list_a_leader)
    .put(leaderController.update_a_leader)
    .delete(leaderController.delete_a_leader);

module.exports = router;