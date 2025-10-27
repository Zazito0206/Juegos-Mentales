const modal = document.getElementById("modal");
const interferencia = document.getElementById("interferencia");
const menu = document.getElementById("menu");
const sonido = document.getElementById("staticSound");

// Aseguramos que el sonido pueda reproducirse después de la interacción
document.getElementById("btnSi").addEventListener("click", () => {
  modal.style.display = "none";
  interferencia.style.display = "block";

  // Reinicia y reproduce el sonido
  sonido.currentTime = 0;
  sonido.volume = 0.5; // Ajusta volumen si es muy fuerte
  sonido.play().catch(err => console.log("Error al reproducir sonido:", err));

  setTimeout(() => {
    interferencia.style.display = "none";
    menu.style.display = "flex";
  }, 3000);
});
