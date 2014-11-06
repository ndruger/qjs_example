
var Q = require('q');


Q.fcall(function() {
    console.log('1');
    throw new Error('error');
  })  // failがない
//  .done();  // .done()削除の効率化




