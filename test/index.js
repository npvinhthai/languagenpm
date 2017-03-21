/**
 * Created by thainpv on 3/21/2017.
 */
const should = require('chai').should(),
    langPackage = require('../index'),
    langPacks = {};

langPacks.vi = new langPackage();
langPacks.en = new langPackage();
langPacks.vi.importJSON('./test/vi/default');


describe('#hello', function() {
    it('translate hello', function () {
        langPacks.vi.get('HELLO', {lastLogin: '30/01/2017',username: 'Trung'}).should.equal("Hello Trung. Your last login on: 30/01/2017");
    });
});

