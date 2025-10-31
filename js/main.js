/* ****************************************************************************************** */
/* Infografikside */
/* ****************************************************************************************** */

/* Infobox - Toiletpapir */
document.querySelector("#hotspotBtnToiletpapir").addEventListener("click", updateInfoboxToilepapir);
function updateInfoboxToilepapir() {
  console.log("updateInfoboxToiletpapir");
  document.querySelector(".info-text h2").textContent = "Toiletpapir";
  document.querySelector(".info-text .placeholder").textContent = "Er du ikke hjemme, og går i panik over, at du intet beskyttelse har? Så kan toiletpapiret være din ven i nød!";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet:</h3><p>Dårlig, da sugeevnen er dårlig. Er du ude længe, skal du skifte lidt ofte.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Sværhedsgrad:</h3><p>Let, da du bare vikler det rundt om trussen.</p>";
}

/* Infobox - Bind */
document.querySelector("#hotspotBtnBind").addEventListener("click", updateInfoboxBind);
function updateInfoboxBind() {
  console.log("updateInfoboxBind");
  document.querySelector(".info-text h2").textContent = "Bind";
  document.querySelector(".info-text .placeholder").textContent = "Det letteste er at starte med bind! De fleste har det i hjemmet, og så er det lige til at tage med i tasken.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet:</h3><p>Middel, da sugeevnen er tilstrækkelig. Lettere at bløde igennem.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Sværhedsgrad:</h3><p>Let, da du bare bøjer vingerne rundt om trussen.</p>";
}

/* Infobox - Tampon */
document.querySelector("#hotspotBtnTampon").addEventListener("click", updateInfoboxTampon);
function updateInfoboxTampon() {
  console.log("updateInfoboxTampon");
  document.querySelector(".info-text h2").textContent = "Tampon";
  document.querySelector(".info-text .placeholder").textContent = "Føler du dig modig? Du kan forsøge med en tampon, som kan være mere avanceret for begyndere.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet:</h3><p>God, da sugeevnen er bedre end bind.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Sværhedsgrad:</h3><p>Svær, da man nok skal være lidt mere øvet. Det kan være svært at vinkle den korrekt.</p>";
}
