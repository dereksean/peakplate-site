// Shows a team's App Store offer code when the page is opened as coach.html?code=TEAMCODE.
// Codes are letters and digits only; anything else is ignored and the page keeps asking families
// to get the code from their coach. Nothing is stored or sent anywhere.
(function () {
  "use strict";

  var APPLE_REDEEM = "https://apps.apple.com/redeem?ctx=offercodes&id=6788466814&code=";
  var PAGE = "https://dereksean.github.io/peakplate-site/app/coach.html";

  var code = null;
  try {
    code = new URLSearchParams(window.location.search).get("code");
  } catch (e) {
    return;
  }
  if (code === null || !/^[A-Za-z0-9]{1,64}$/.test(code)) return;

  var i;
  var names = document.querySelectorAll("[data-team-code]");
  for (i = 0; i < names.length; i++) names[i].textContent = code;

  var redeem = document.querySelectorAll("a[data-redeem]");
  for (i = 0; i < redeem.length; i++) redeem[i].href = APPLE_REDEEM + encodeURIComponent(code);

  var share = document.querySelectorAll("a[data-share]");
  for (i = 0; i < share.length; i++) {
    share[i].href = PAGE + "?code=" + encodeURIComponent(code);
    share[i].textContent = share[i].href;
  }

  var withCode = document.querySelectorAll("[data-with-code]");
  for (i = 0; i < withCode.length; i++) withCode[i].hidden = false;
  var withoutCode = document.querySelectorAll("[data-without-code]");
  for (i = 0; i < withoutCode.length; i++) withoutCode[i].hidden = true;
})();
