let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
  const key = localStorage.getItem("apiKey");
  const currentPage = window.location.pathname.split("/").pop();

  const exemptPages = ["enter-api-key.html"]; // Add any other page that doesn't need auth

  if (!key && !exemptPages.includes(currentPage)) {
    window.location.href = "enter-api-key.html";
  }

  return key;
}
