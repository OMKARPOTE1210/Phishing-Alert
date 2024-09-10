document.getElementById('reportButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    chrome.storage.sync.get("reportedSites", function(data) {
      let reportedSites = data.reportedSites || [];
      reportedSites.push(activeTab.url);
      chrome.storage.sync.set({ reportedSites: reportedSites }, function() {
        alert('The site has been reported. Thank you!');
      });
    });
  });
});