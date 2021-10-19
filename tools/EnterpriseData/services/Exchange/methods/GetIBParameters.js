const fs = require('fs');
const path = require("path");

module.exports = function(args) {
    return {
        xml: fs.readFileSync(path.resolve(__dirname, '../IBParametrsCut.xml'), 'utf8')
    }
}