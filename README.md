# languagenpm
Alt-H1
======

node js language util module

##1 load libs
Alt-H2
======

const langPackage = require('languagenpm');
const langPacks = {};

##2 init language
Alt-H2
======

langPacks.vi = new langPackage();
langPacks.en = new langPackage();
langPacks.vi.importJSON('path to json file');

##3 use
Alt-H2
======

const key = 'HELLO';
const objReplace = {keyword1: 'hello', keyword2: 'world'};
const result = langPacks.vi.get(key, objReplace);

