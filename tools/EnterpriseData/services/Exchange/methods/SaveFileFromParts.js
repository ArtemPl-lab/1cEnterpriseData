const path = require('path');
const fs = require('fs');
const base64ToZip = require('../../../includes/base64ToZip');

module.exports = function(args) {
    const { TransferId, PartQuantity } = args;
    let resultBase64 = "";
    for(let PartNumber = 1; PartNumber <= PartQuantity; PartNumber++)
        resultBase64 += fs.readFileSync(path.resolve(__dirname,  `../tmp/base64/${TransferId}/${PartNumber}`), 'utf8');
    base64ToZip(resultBase64, path.resolve(__dirname,  `../tmp/zip/${TransferId}/application.zip`));
    return {
        xml: `
        <m:return xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/>
        <m:FileId xmlns:xs="http://www.w3.org/2001/XMLSchema"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            ac21b7c7-41cd-4bf5-a87b-15e8c709947g
        </m:FileId>
        `
    }
}