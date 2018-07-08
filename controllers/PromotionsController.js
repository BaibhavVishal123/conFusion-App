exports.list_all_promotions = function abc(req, res, next) {
    res.end('Will send all the promotions to you!');
};
exports.create_a_promotion = function(req, res, next) {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
};
exports.delete_all_promotions = function(req, res, next) {
    res.end('Deleting all promotions');
};
exports.list_a_promotion = function(req, res, next) {
    res.end('Will send details of the promotion: ' + req.params.promotionId + ' to you!');
};
exports.update_a_promotion = function(req, res, next) {
    res.write('Updating the promotion: ' + req.params.promotionId + '\n');
    res.end('Will update the promotion: ' + req.body.name +
        ' with details: ' + req.body.description);
};
exports.delete_a_promotion = function(req, res, next) {
    res.end('Deleting promotion: ' + req.params.promotionId);
};