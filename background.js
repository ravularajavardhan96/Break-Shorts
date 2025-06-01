chrome.webNavigation.onHistoryStateUpdated.addListener(details => {
  if (details.url.includes("youtube.com/shorts/")) {
    const videoId = details.url.split("/shorts/")[1].split(/[?&]/)[0];
    const redirectUrl = `https://www.youtube.com/watch?v=${videoId}`;

    const todayKey = "count_" + new Date().toISOString().split("T")[0];

    chrome.storage.local.get([todayKey], (result) => {
      const current = result[todayKey] || 0;
      chrome.storage.local.set({ [todayKey]: current + 1 });
    });

    chrome.tabs.update(details.tabId, { url: redirectUrl });
  }
});
