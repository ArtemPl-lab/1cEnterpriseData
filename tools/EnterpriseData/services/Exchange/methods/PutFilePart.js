const path = require('path');
const fs = require('fs');

module.exports = function(args) {
    const { PartData, TransferId, PartNumber } = args;
    fs.mkdir(path.resolve(__dirname, `../tmp/base64/${TransferId}`), { recursive: true }, (err) => {
        fs.writeFileSync(path.resolve(__dirname, `../tmp/base64/${TransferId}/${PartNumber}`), PartData, 'utf8');
    });
    return {
        xml: `
        <m:return xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/>`
    }
}