const soap = require('soap');
const authMiddleware = require('./auth');
const fs = require('fs');

class SoapService {
    constructor(app, wsdl_path = '', methods = {}, settings = {}){
        this.app = app;
        this.wsdl_path = wsdl_path;
        this.methods = methods;
        this.settings = settings;
        this.wsdl = setupWsdl(fs.readFileSync(this.wsdl_path, 'utf8'), this.settings);
    }
    start(){
        this.server = soap.listen(this.app, {
            path: `${this.settings.pathPrefix}/ws/${this.settings.name}`,
            services: generateConfig(this.methods, this.settings.name),
            xml: this.wsdl,
            overrideRootElement: {
                namespace: 'm',
                xmlnsAttributes: [
                    {
                        name: 'xmlns:m',
                        value: this.settings.namespace
                    }
                ]
            },
            xmlKey: 'xml'
        });
        authMiddleware(this.app, this.server);
        return this.server;
    }
}
const generateConfig = (methods, name) => ({
    [name]: {
		[`${name}Soap`]: {
            ...methods
	    },
        [`${name}Soap12`]: {
            ...methods
        }
	}
});
const setupWsdl = (xml = '', settings = {}) => {
    Object.keys(settings).map(key => {
        const re = new RegExp(`{${key}}`,"g");
        xml = xml.replace(re, settings[key]);
    });
    return xml;
}

module.exports = SoapService;