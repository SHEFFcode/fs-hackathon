document.addEventListener('DOMContentLoaded', function() {

  /*==========  HTTP Injection ============ */
  var injecthttp = document.getElementById('injecthttp');
  // onClick's logic below:
  if (injecthttp) {
    injecthttp.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('button clicked');

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "injectHTTP"});
      });
    });
  };

  /*==========  HTTPS Injection ============ */
  var injecthttps = document.getElementById('injecthttps');
  // onClick's logic below:
  if (injecthttps) {
    injecthttps.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('button clicked');

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "injectHTTPS"});
      });
    });
  };

  /*==========  Stop Injection ============ */
  var stopinjection = document.getElementById('stopinjection');
  if (injecthttps) {
    // onClick's logic below:
    stopinjection.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('button clicked');

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "stopInjection"});
      });
    })
  };

  var browserReplay = document.getElementById('browser-replay');
  // onClick's logic below:
  if (browserReplay) {
    browserReplay.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('button clicked');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "browser-replay"});
      });
    });
  }

  var external = document.getElementById('external');
  // onClick's logic below:
  if (external) {
    external.addEventListener('click', function(e) {
      console.log('clicked');
      chrome.tabs.create({url: $(this).attr('href')});
    });
  }

});
