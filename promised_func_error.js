
var Q = require('q');

function errorAsyncQ() {
  var defer = Q.defer();
  
  setTimeout(function() {
    console.log('2');
    defer.reject(new Error('error'));  // PromiseをPending -> Rejectedにする
  });

  console.log('1');
  return defer.promise; // PromiseはPending状態
}


Q()
  .then(function() {
    return errorAsyncQ();
  })
  .then(function(a) {
    console.log('3', a);  // 前のPromiseがRejectedなので、このPromiseの正常処理は通らない
  })
  .fail(function(e) {
    console.log('4', e);  // 前のPromiseがRejectedなので、このPromiseのエラー処理を通る
    // ここで再度throwしないので、PromiseはRejectedからFullfilledになる
  })
  .then(function() {
    console.log('5'); // 前のPromiseがFullfilledなので、この正常処理を通る
  })
  .done();
