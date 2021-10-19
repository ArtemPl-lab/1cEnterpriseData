const InterfaceVersionService = require('./services/InterfaceVersion');
const ExchangeService = require('./services/Exchange');

class EnterpriseData {
    constructor(app, path = ''){
        this.services = {
            interfaceVersion: new InterfaceVersionService(app, path),
            exchange: new ExchangeService(app, path)
        }
        this.start();
    }
    static listen(...args){
        return new EnterpriseData(...args);
    }
    start(){
        Object.keys(this.services).map(name => this.services[name].start())
    }
}

module.exports = EnterpriseData;