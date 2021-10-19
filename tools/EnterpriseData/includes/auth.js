module.exports = function(app, soapServer) {
    soapServer.authenticate = function(security, callback) {
        return true;
    }
}