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
    location.href=location.href.replace(/(.*?)(id\/)([a-z0-9-]*)(.*)/, "https://replay.replay.answerscloud.com/replay/replay?browser_mode=CHROME&session_id=$3&page_number=0&player=web&speed=1.00");
    break;
  }
});
