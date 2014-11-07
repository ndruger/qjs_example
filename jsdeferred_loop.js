var Deferred = require('jsdeferred').Deferred;

var urls = ['neko.json', 'neko2.json', 'neko3.json'];


function promisedFunc(url) {
  return Deferred.wait(1)
    .next(function() {
      console.log('I got', url);
    });
}

Deferred.loop(urls.length, function (i) {
  var url = urls[i];
  return promisedFunc(url);
}).
  next(function () {
    console.log('2')
  });
