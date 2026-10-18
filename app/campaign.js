// Points the store badges at the campaign named by the page's ?c= parameter.
// Links and names: PeakPlate repo, docs/marketing/campaign-links.md. Only these five names count;
// anything else, or no ?c= at all, means "site", which is also what the HTML links to without
// this script. Nothing is stored or sent anywhere: the campaign rides on the store link itself.
(function () {
  "use strict";

  var LINKS = {
    site: {
      ios: "https://apps.apple.com/app/apple-store/id6788466814?pt=125384112&ct=site&mt=8",
      play: "https://play.google.com/store/apps/details?id=com.peakplate.peak_plate&referrer=utm_source%3Dpeakplate_site%26utm_medium%3Dweb%26utm_campaign%3Dsite"
    },
    video: {
      ios: "https://apps.apple.com/app/apple-store/id6788466814?pt=125384112&ct=video&mt=8",
      play: "https://play.google.com/store/apps/details?id=com.peakplate.peak_plate&referrer=utm_source%3Dpeakplate_site%26utm_medium%3Dsocial%26utm_campaign%3Dvideo"
    },
    videoboost: {
      ios: "https://apps.apple.com/app/apple-store/id6788466814?pt=125384112&ct=videoboost&mt=8",
      play: "https://play.google.com/store/apps/details?id=com.peakplate.peak_plate&referrer=utm_source%3Dpeakplate_site%26utm_medium%3Dpaid_social%26utm_campaign%3Dvideoboost"
    },
    coach: {
      ios: "https://apps.apple.com/app/apple-store/id6788466814?pt=125384112&ct=coach&mt=8",
      play: "https://play.google.com/store/apps/details?id=com.peakplate.peak_plate&referrer=utm_source%3Dpeakplate_site%26utm_medium%3Dreferral%26utm_campaign%3Dcoach"
    },
    searchads: {
      ios: "https://apps.apple.com/app/apple-store/id6788466814?pt=125384112&ct=searchads&mt=8",
      play: "https://play.google.com/store/apps/details?id=com.peakplate.peak_plate&referrer=utm_source%3Dpeakplate_site%26utm_medium%3Dcpc%26utm_campaign%3Dsearchads"
    }
  };

  var campaign = "site";
  try {
    var requested = new URLSearchParams(window.location.search).get("c");
    if (requested !== null && Object.prototype.hasOwnProperty.call(LINKS, requested)) {
      campaign = requested;
    }
  } catch (e) {
    // No URLSearchParams (very old browser): keep the "site" links already in the HTML.
    return;
  }

  var badges = document.querySelectorAll("a[data-store]");
  for (var i = 0; i < badges.length; i++) {
    var store = badges[i].getAttribute("data-store");
    if (Object.prototype.hasOwnProperty.call(LINKS[campaign], store)) {
      badges[i].href = LINKS[campaign][store];
    }
  }
})();
