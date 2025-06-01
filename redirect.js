function redirectIfShorts() {
  const url = window.location.href;
  if (url.includes("/shorts/")) {
    const videoId = url.split("/shorts/")[1].split(/[?&]/)[0];
    if (videoId) {
      window.location.replace(`https://www.youtube.com/watch?v=${videoId}`);
    }
  }
}

// Run on first load
redirectIfShorts();

// Watch for SPA navigation
let lastUrl = location.href;
new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    redirectIfShorts();
  }
}).observe(document, { subtree: true, childList: true });
