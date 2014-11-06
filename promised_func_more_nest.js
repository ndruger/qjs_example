
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

function someAsyncQ() {
  return Q.fcall(function() {
    return successAsyncQ();
  })
    .then(function(a) {
      console.log('4');
      return a + ' then test';
    }); // Promiseを返すので.done()で閉じない。
}


Q.fcall(function() {
  console.log('1');
})
  .then(function() {
    return someAsyncQ();
  })
  .then(function(a) {
    console.log('5', a);
  })
  .done();
