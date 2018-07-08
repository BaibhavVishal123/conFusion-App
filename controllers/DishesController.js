exports.list_all_dishes = function(req, res, next) {
    res.end('Will send all dishes: ');
};
exports.create_a_dish = function(req, res, next) {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
};
exports.delete_all_dishes = function(req, res, next) {
    res.end('Deleting all dishes');
};
exports.list_a_dish = function(req, res, next) {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
};
exports.update_a_dish = function(req, res, next) {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
};
exports.delete_a_dish = function(req, res, next) {
    res.end('Deleting dish: ' + req.params.dishId);
};