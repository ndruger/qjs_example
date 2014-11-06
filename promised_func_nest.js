
var Q = require('q');

function successAsyncQ() {
  var defer = Q.defer();
  
  setTimeout(function() {
    console.log('3');
    defer.resolve('test');
  });

  console.log('2');
  return defer.promise;
}


Q.fcall(function() {
  console.log('1');
})
  .then(function() {
    if (true) { // コールバックと異なり、同期処理記述に近い形で非同期のフローを制御できる
      return successAsyncQ();
    }
  })
  .then(function(a) {
    console.log('5', a);
  })
  .done();
