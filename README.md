# Q.js 勉強会

## なにが問題なのか？

### コールバックによるコード

```javascript

var res = {};
get1(function(err) {
  if (err, result) {
    handleError(err);
    return;
  }
  res.a = doSomething1(result);
  get2(function(err, result) {
  	if (err) {
      handleError(err);
  	  return;
  	}
    res.b = doSomething2(result);
    get3(function(err, result) {
      if (err) {
        handleError(err);
        return;
      }
      res.c = doSomething3(result);

      doResponse(res);
    ));
  });
});
```


## 解決方法の種類

[JavaScript非同期処理方法の比較](https://docs.google.com/spreadsheets/d/1sHwMkIJ0DukM4-BLzOuwhRYhtm92ICghc8UDqsalWpI/edit#gid=0)

## Future / Promiseとは？

複数のプログラム言語で利用されている非同期・並列処理のパターン。

[Futures and promises - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/Futures_and_promises)

[爆速でわかるjQuery.Deferred超入門](http://techblog.yahoo.co.jp/programming/jquery-deferred/)

[JavaScript Promises: There and back again - HTML5 Rocks](http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promise-terminology)

Q.jsはJavaScriptのPromises/A+の実装の一つ。

### 標準？

[Can I use... Support tables for HTML5, CSS3, etc](http://caniuse.com/#feat=promises)

[ECMAScript Language Specification ECMA-262 6th Edition – DRAFT](https://people.mozilla.org/~jorendorff/es6-draft.html)

[Writing Promise-Using Specifications](http://www.w3.org/2001/tag/doc/promises-guide)

[Promises are now ES6/IDL territory · 3f656c5 · whatwg/dom](https://github.com/whatwg/dom/commit/3f656c52696dd2d90d3796569cc6dc18e73a487b)

## JavaScriptにおけるPromiseとその類似の実装

* [jQuery.Deferred](http://api.jquery.com/jquery.deferred/)
* [JSDeferred](http://cho45.stfuawsc.com/jsdeferred/)
	* シンプル。doneがない
	* CommonJSのPromiseとは大きく違う
* [Bluebird](https://github.com/petkaantonov/bluebird)
	* キャッチする例外の型による指定ができる
	* props, bindなどで値を奇麗に渡せる
	* map, reduce, filter, eachなどのコレクション操作がある
* [q](http://documentup.com/kriskowal/q/)
	* 利用者が多く高機能

## Promiseの利用例

* jQuery.ajax()
* [Synth](https://github.com/JonAbrams/synth)
* [JavaScript Developer Guide | Parse](https://parse.com/docs/js_guide#promises)
* Mangooseのexec
* 多くのpromised-*

## 例

* [シンプル](simple.js)
* [Promiseを返す関数](promised_func.js) 
* [ネストと条件分岐](promised_func_nest.js)
* [複雑なネスト](promised_func_more_nest.js)
* [Promiseを返す関数(Rejectedのケース)](promised_func_error.js)
* [チェーン内でのエラーを発生とハンドリング](exception.js)
* [uncaught excpetionはどうなるのか？](uncaught_exception.js)
* [.done()の必要性](uncaught_exception_without_done.js)
	* チェーンの最後がないので、uncaughtの判定ができない。
* [AllとSpread](all_and_spread.js)


## 他

### 命名規則

Poromiseを返す関数は、引数を返す関数とは異なり、呼び出し側で区別がしづらいので、関数名で区別がつくようにすることを推奨する。

似たような命名規則だと、Nodeだと同期関数にSyncをつける。C#だとawait可能な非同期関数にAsyncをつける。

C#に合わせてAsyncを付けるのがよさそう。だが、Q.jsのPromiseを返すと明示したいので、個人的にはAsyncQを付けるが、長いのでQだけでもいいかも。

### 複数の引数を後に渡したい

.spread()で配列の展開はできるが、それならまだhashを返した方が拡張性やミスの少なさという意味でいいと思う。
