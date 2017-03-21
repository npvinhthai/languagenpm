# languagenpm
======

node js language util module

#1 load libs
======

const langPackage = require('languagenpm');

const langPacks = {};

#2 init language
======

langPacks.vi = new langPackage();

langPacks.en = new langPackage();

langPacks.vi.importJSON('path to json file');

#3 use
======

const key = 'HELLO';

const objReplace = {keyword1: 'hello', keyword2: 'world'};

const result = langPacks.vi.get(key, objReplace);

