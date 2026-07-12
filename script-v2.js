
const shareButton = document.getElementById("shareButton");
const toast = document.getElementById("toast");

function showToast(text){
  toast.textContent = text;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

shareButton.addEventListener("click", async () => {
  try{
    if(navigator.share){
      await navigator.share({
        title:"Răzvan Albu | Casa Diva Costinești",
        text:"Date de contact Casa Diva Costinești",
        url:window.location.href
      });
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copiat");
  }catch(error){
    if(error.name !== "AbortError") showToast("Distribuirea nu a reușit");
  }
});
