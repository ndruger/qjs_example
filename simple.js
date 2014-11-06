
var Q = require('q');

Q.fcall(function() {
  console.log('1');
  return "test";
})
  .then(function(a) {
    console.log('2', a);
  })
  .done();
