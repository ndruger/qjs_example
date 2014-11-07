var Promise = require("bluebird");

var urls = ['neko.json', 'neko2.json', 'neko3.json'];

function promisedFunc(url) {
  return new Promise(function(resolve) {
    console.log('I want', url);
    setTimeout(function() {
      console.log('I got', url);
      resolve(0);
    }, 1000);
  });
}

Promise.reduce(urls, function(m, url) {
  return promisedFunc(url);
}, 0)
  .then(function() {
    console.log('2')
  });

// Promise.map(urls, promisedFunc, {concurrency: 1})
//   .then(function() {
//     console.log('2')
//   });

