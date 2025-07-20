// Cambiar el título si el usuario cambia de pestaña
let originalTitle = document.title;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "¡Vuelve a Gura News!";
  } else {
    document.title = "Gracias por volver a Gura News ❤️";
    setTimeout(() => {
      document.title = originalTitle;
    }, 2000);
  }
});
