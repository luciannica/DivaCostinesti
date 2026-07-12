const shareButton = document.getElementById("shareButton");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Răzvan Albu | Casa Diva Costinești",
    text: "Date de contact Casa Diva Costinești",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copiat");
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      showToast("Nu am putut distribui linkul");
    }
  }
});
