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

const objReplace = {username: 'Andrew', lastLogin: '03/21/2017'};

const result = langPacks.vi.get(key, objReplace);

#4 json language sample
======

{
  "HELLO":"Hello {username}. Your last login on: {lastLogin}"
}
