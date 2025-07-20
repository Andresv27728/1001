// Cambiar título si cambia de pestaña
let originalTitle = document.title;
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "¡Vuelve a Gura News!";
  } else {
    document.title = originalTitle;
    alert("¡Gracias por volver!");
  }
});
