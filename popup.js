document.addEventListener('DOMContentLoaded', function() {
  var injecthttp = document.getElementById('injecthttp');
  // onClick's logic below:
  injecthttp.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('button clicked');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "injectHTTP"});
    });
  });
  var injecthttps = document.getElementById('injecthttps');
  // onClick's logic below:
  injecthttps.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('button clicked');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "injectHTTPS"});
    });
  });

  var browserReplay = document.getElementById('browser-replay');
  // onClick's logic below:
  browserReplay.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('button clicked');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "browser-replay"});
    });
  });

  $(document).ready(function(){
    $('body').on('click', '#exernal', function(){
      chrome.tabs.create({url: $(this).attr('href')});
      return false;
    });
  });
});
