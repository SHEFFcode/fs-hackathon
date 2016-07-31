chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message.message);
  switch (message.message) {
    case 'injectHTTP':
    var script = '<script async src="http://localhost:8080/gateway.min.js"></script>';
    $('head').append(script);
    chrome.storage.sync.set({'http': true}, function() {
      // Notify that we saved.
      console.log('HTTP Injection on');
    });
    break;
    case 'stopInjection':
    chrome.storage.sync.set({'http': false, 'https': false}, function() {
      // Notify that we saved.
      console.log('Injeciton Off');
    });
    break;
    case 'injectHTTPS':
    var script = '<script async src="https://localhost/gateway.min.js"></script>';
    $('head').append(script);
    chrome.storage.sync.set({'https': true}, function() {
      // Notify that we saved.
      console.log('HTTPS injection on');
    });
    break;
    case 'browser-replay':
    location.href=location.href.replace(/(.*?)(id\/)([a-z0-9-]*)(.*)/, "https://replay.replay.answerscloud.com/replay/replay?browser_mode=CHROME&session_id=$3&page_number=0&player=web&speed=1.00");
    break;
    case 'showinvite':
    FSR.showInvite();
    break;
  }
});

chrome.storage.sync.get('http', function (obj) {
  console.log(JSON.stringify(obj.http));
  if (obj.http === true) {
    var script = '<script async src="http://localhost:8080/gateway.min.js"></script>';
    $('head').append(script);
  }
});

chrome.storage.sync.get('https', function (obj) {
  console.log(JSON.stringify(obj.http));
  if (obj.http === true) {
    var script = '<script async src="https://localhost/gateway.min.js"></script>';
    $('head').append(script);
  }
});
