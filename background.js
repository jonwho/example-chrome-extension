// extensions dont have access to all of the browser APIs
chrome.browserAction.onClicked.addListener(function(tab) {
  // send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});
