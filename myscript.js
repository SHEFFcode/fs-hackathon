chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message.message);
  switch (message.message) {
    case 'injectHTTP':
    var script = '<script src="http://localhost:8080/gateway.min.js"></script>';
    $('html').append(script);
    break;
    case 'injectHTTPS':
    var script = '<script src="https://localhost/gateway.min.js"></script>';
    $('html').append(script);
    break;
    case 'browser-replay':
    console.log('location change requested');
    location.href='google.com';
    break;
  }
});
