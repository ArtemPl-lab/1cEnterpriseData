const vers = ["2.0.1.6", "2.1.1.7", "3.0.1.1"];

module.exports = function(args) {
    return {
        xml: getVersionsReturn(vers)
    }
}

const getVersionsReturn = versions => `<m:return xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">${versions.map(versionValue).join('')}</m:return>`;
const versionValue = version => `<Value xsi:type="xs:string" xmlns="http://v8.1c.ru/8.1/data/core">${version}</Value>`;