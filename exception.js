
var Q = require('q');


Q.fcall(function() {
    console.log('1');
    throw new Error('error');
  })
  .then(function() {
    console.log('2'); // エラーなのでスキップ
  })
  .fail(function(e) {
    console.log('3', e);  // エラー処理
    throw e;
  })
  .then(function() {
    console.log('4'); // エラーなのでスキップ
  })
  .fail(function(e) {
    console.log('5', e);  // エラー処理をして回復
  })
  .fin(function() {
    console.log('6'); // finallyもできる
  })
  .done();
