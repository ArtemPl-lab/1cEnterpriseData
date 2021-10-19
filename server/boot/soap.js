const EnterpriseData = require('../../tools/EnterpriseData');

module.exports = function(app){
    const ed = EnterpriseData.listen(app, '/base15');
}