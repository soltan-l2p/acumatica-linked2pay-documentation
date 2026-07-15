(() => {
  const items = [...document.querySelectorAll(".faq-item")];
  if (!items.length) return;

  items.forEach((item, index) => {
    item.open = index === 0;
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();