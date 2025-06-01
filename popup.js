document.addEventListener("DOMContentLoaded", () => {
  const todayKey = "count_" + new Date().toISOString().split("T")[0];

  chrome.storage.local.get(todayKey, (result) => {
    const count = result[todayKey] || 0;
    document.getElementById("redirectCount").textContent = count;
  });

  // Dark mode setup (unchanged)
  const toggle = document.getElementById("darkModeToggle");
  const isDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", isDark);
  toggle.checked = isDark;

  toggle.addEventListener("change", () => {
    const enableDark = toggle.checked;
    document.body.classList.toggle("dark", enableDark);
    localStorage.setItem("darkMode", enableDark);
  });

  // Random motivational quote
  const quotes = [
    "“Discipline is freedom.”",
    "“Small steps every day.”",
    "“Be stronger than your excuse.”",
    "“You're doing better than you think.”",
    "“Scroll less, live more.”"
  ];
  document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
});
