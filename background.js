const phishingDomains = [
  "phishingsite.com",
  "maliciousdomain.net"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (phishingDomains.includes(url.hostname)) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon128.png",
        title: "Phishing Alert!",
        message: `The site ${url.hostname} is known for phishing. Proceed with caution!`
      });
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);