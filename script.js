const modal = document.getElementById("modal");
const interferencia = document.getElementById("interferencia");
const menu = document.getElementById("menu");
const sonido = document.getElementById("staticSound");

document.getElementById("btnSi").addEventListener("click", () => {
  modal.style.display = "none";
  interferencia.style.display = "block";
  sonido.play(); // sonido de interferencia

  setTimeout(() => {
    interferencia.style.display = "none";
    menu.style.display = "flex";
  }, 3000);
});
