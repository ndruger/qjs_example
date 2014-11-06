
var Q = require('q');

function successAsyncQ(arg) {
  var defer = Q.defer();
  
  setTimeout(function() {
    console.log('1');
    defer.resolve(arg);  // PromiseをPending -> Fulfilledにする
  });

  return defer.promise; // PromiseはPending状態
}


Q.all([
    successAsyncQ('test1'),
    successAsyncQ('test2'),
  ])
  .spread(function(a, b) {
    console.log('2', a, b);
  })
  .done();
