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
  url: 'https://7d3139c2.ngrok.io/getSessionToken/',
  success: function(sessionToken) {
    $.ajax({
      method: 'POST',
      url: 'https://7d3139c2.ngrok.io/send/',
      data: {
        session_token: sessionToken,
        sender: 'chrome ext',
        message: 'foobar'
      },
      success: function() {
        console.log("POST send");
      }
    });
  }
});

