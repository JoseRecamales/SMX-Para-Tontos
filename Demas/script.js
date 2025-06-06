const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // Colapsa otros si no quieres que se abran todos a la vez
      panel.style.maxHeight = panel.scrollHeight + "px";

      // Actualiza por si hay acordeones dentro
      setTimeout(() => {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }, 10);
    }
  });
});
