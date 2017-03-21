/**
 * Created by thainpv on 3/21/2017.
 */

const Lang = function () {
    this.phrase = {};
};

Lang.prototype.importJSON = function (file) {
    try {
        this.phrase = JSON.parse(require('fs').readFileSync(file + '.json', 'utf8'));
        return true;
    } catch (e) {
        console.log("langpackage - JSON parsing error");
        console.log(e.stack);
        this.phrase = {};
        return false;
    }
},

Lang.prototype.get = function (code, params) {
    try {
        let result = this.phrase[code];
        result = result.replace(/{[^{}]+}/g, function (key) {
            return params[key.replace(/[{}]+/g, "")] || "";
        });
        return result;
    } catch (e) {
        console.log("langpackage - reading error. Check phrase '" + code + "'");
        console.log(e.message);
        console.log(e.stack);
        return "";
    }
}
module.exports = Lang;
