
var Q = require('q');

function successAsyncQ() {
  var defer = Q.defer();
  
  setTimeout(function() {
    console.log('2');
    defer.resolve('test');  // PromiseをPending -> Fulfilledにする
  });

  console.log('1');
  return defer.promise; // PromiseはPending状態
}


successAsyncQ()
  .then(function(a) {
    console.log('3', a);  // 前のPromiseが完了すると、チェーンされた次のPromiseが実行される
  })
  .done();
