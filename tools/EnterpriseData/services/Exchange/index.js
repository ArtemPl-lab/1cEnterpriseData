const SoapService = require('../../includes/SoapService');
const path = require('path');

const methods = {
    Ping: require('./methods/Ping'),
    GetIBParameters: require('./methods/GetIBParameters'),
    CreateExchangeNode: require('./methods/CreateExchangeNode'),
    TestConnection: require('./methods/TestConnection'),
    PutFilePart: require('./methods/PutFilePart'),
    SaveFileFromParts: require('./methods/SaveFileFromParts')
}
class ExchangeService extends SoapService{
    constructor(app, basePath){
        super(
            app,
            path.resolve(__dirname, 'Exchange_3_0_1_1.wsdl'),
            methods,
            {
                appHost: app.get('url'),
                pathPrefix: basePath,
                name: 'Exchange_3_0_1_1',
                namespace: "http://www.1c.ru/SSL/Exchange_3_0_1_1"
            }
        );
    }
}
module.exports = ExchangeService;