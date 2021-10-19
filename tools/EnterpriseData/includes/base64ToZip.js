var fs = require('fs');
const path = require('path');
var Readable = require('stream').Readable


module.exports = function(base64, resPath) {
    const zipBuffer = Buffer.from(base64, 'base64')
    var s = new Readable();
    s.push(zipBuffer);
    s.push(null);
    fs.mkdir(path.dirname(resPath), { recursive: true }, (err) => {
        s.pipe(fs.createWriteStream(resPath));
    });
}