chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      alert(firstHref);
    }
  }
);

var sessionToken = null;

$.ajax({
  method: 'GET',
  url: 'https://447a397d.ngrok.io/getSessionToken/',
  success: function(sessionToken) {
    $.ajax({
      method: 'POST',
      url: 'https://447a397d.ngrok.io/send/',
      data: JSON.stringify({
        session_token: parseInt(sessionToken, 10),
        sender: 'chrome ext',
        message: 'foobar'
      }),
      success: function() {
        console.log("POST send");
      }
    });
  }
});

