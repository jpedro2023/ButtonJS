const counterButton = document.getElementById("counterButton");
const arrayButton = document.getElementById("arrayButton");

counterButton.addEventListener("click", () => {
  window.location.href = "pressedButton.html";
});
arrayButton.addEventListener("click", () => {
  console.log("pressionado");
});
