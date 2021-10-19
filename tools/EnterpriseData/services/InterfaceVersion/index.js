const SoapService = require('../../includes/SoapService');
const path = require('path');
const GetVersions = require('./methods/GetVersions');

const methods = {
    GetVersions
}
class InterfaceVersionService extends SoapService{
    constructor(app, basePath){
        super(
            app,
            path.resolve(__dirname, 'InterfaceVersion.wsdl'),
            methods,
            {
                appHost: app.get('url'),
                pathPrefix: basePath,
                name: 'InterfaceVersion',
                namespace: 'http://www.1c.ru/SaaS/1.0/WS'
            }
        );
    }
}
module.exports = InterfaceVersionService;