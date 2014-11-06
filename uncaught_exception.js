
var Q = require('q');


Q.fcall(function() {
    console.log('1');
    throw new Error('error');
  })  // failがない場合
  .done();
