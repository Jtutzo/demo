
module.exports.sendObject = function(req, res, object) {
    var response = {};
    response['object'] = object;
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
}

module.exports.sendData = function(req, res, data) {
    var response = {};
    response['aaData'] = data;
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
}

module.exports.sendMessage = function(req, res, msg) {
    res.setHeader('Content-Type', 'text/html');
    res.send(msg);
}

module.exports.sendError = function(req, res, msg) {
    res.setHeader('Content-Type', 'text/html');
    res.send("Error technique : [" + msg + "]");
}
