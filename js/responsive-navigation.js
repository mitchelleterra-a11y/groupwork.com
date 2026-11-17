document.querySelectorAll(".menu-toggle[aria-controls]").forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));

  if (!menu) {
    console.error(`Menu not found for toggle: ${button.getAttribute("aria-controls")}`);
    return;
  }

  const container = button.closest(".navbar, .sidebar");

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    if (container) {
      container.classList.toggle("is-open", open);
    }
    button.setAttribute("aria-expanded", String(open));
  };

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });
});
