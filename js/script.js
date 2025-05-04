document.addEventListener("DOMContentLoaded", () => {
  applySavedMode();
  renderHistory();
  document.getElementById("modeToggle").addEventListener("click", toggleMode);
  document.getElementById("generateBtn").addEventListener("click", generatePassword);
  document.getElementById("copyBtn").addEventListener("click", () => copyPassword(false));
  document.getElementById("downloadBtn").addEventListener("click", downloadPassword);
  document.getElementById("downloadHistoryBtn").addEventListener("click", downloadHistory);
  document.getElementById("clearBtn").addEventListener("click", clearHistory);
  document.getElementById("passwordOutput").addEventListener("click", () => copyPassword(true));
});
