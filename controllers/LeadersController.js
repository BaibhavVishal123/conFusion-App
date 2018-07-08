exports.list_all_leaders = function abc(req, res, next) {
    res.end('Will send all the leaders to you!');
};

exports.create_a_leader = function(req, res, next) {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
};
exports.delete_all_leaders = function(req, res, next) {
    res.end('Deleting all leaders');
};
exports.list_a_leader = function(req, res, next) {
    res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
};
exports.update_a_leader = function(req, res, next) {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name +
        ' with details: ' + req.body.description);
};
exports.delete_a_leader = function(req, res, next) {
    res.end('Deleting leader: ' + req.params.leaderId);
};