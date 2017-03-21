/**
 * Created by thainpv on 3/21/2017.
 */
const should = require('chai').should(),
    langPackage = require('../index'),
    langPacks = {};

langPacks.vi = new langPackage();
langPacks.en = new langPackage();
langPacks.vi.importJSON('./test/vi/default');

console.dir(langPacks.vi.get('HELLO', {balance: '10,000', lastLogin: '30/01/2017',username: 'Trung'}));
describe('#hello', function() {
    it('translate hello', function () {
        langPacks.vi.get('HELLO', {balance: '10,000', lastLogin: '30/01/2017',username: 'Trung'}).should.equal("Xin chào Trung. Số dư của bạn là: 10,000. Login lần cuối ngày: 30/01/2017");
    });
});

