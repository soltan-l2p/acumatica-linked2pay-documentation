(() => {
  const figures = [...document.querySelectorAll(".guide-image")].filter((figure) => figure.querySelector("img"));

  if (!figures.length) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "image-zoom-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Screenshot zoom viewer");
  overlay.innerHTML = `
    <div class="image-zoom-toolbar">
      <div class="image-zoom-title"></div>
      <button class="image-zoom-close" type="button" data-zoom-close aria-label="Close zoom view">
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div class="image-zoom-stage" tabindex="0">
      <img alt="" />
    </div>
    <div class="image-zoom-dock" aria-label="Zoom controls">
      <button class="image-zoom-button" type="button" data-zoom-out aria-label="Zoom out" title="Zoom out">
        <span class="zoom-icon zoom-icon-minus" aria-hidden="true"></span>
      </button>
      <button class="image-zoom-button image-zoom-reset" type="button" data-zoom-reset aria-label="Reset zoom" title="Reset zoom">
        <span data-zoom-level>100%</span>
      </button>
      <button class="image-zoom-button" type="button" data-zoom-in aria-label="Zoom in" title="Zoom in">
        <span class="zoom-icon zoom-icon-plus" aria-hidden="true"></span>
      </button>
    </div>
  `;
  document.body.appendChild(overlay);

  const title = overlay.querySelector(".image-zoom-title");
  const stage = overlay.querySelector(".image-zoom-stage");
  const zoomImage = overlay.querySelector(".image-zoom-stage img");
  const zoomLevel = overlay.querySelector("[data-zoom-level]");
  let scale = 1;

  const setScale = (nextScale) => {
    scale = Math.min(2.5, Math.max(0.75, Number(nextScale.toFixed(2))));
    zoomImage.style.setProperty("--zoom-scale", scale);
    zoomLevel.textContent = `${Math.round(scale * 100)}%`;
  };

  const openZoom = (image) => {
    zoomImage.src = image.currentSrc || image.src;
    zoomImage.alt = image.alt || "Setup screenshot";
    title.textContent = image.alt || "Setup screenshot";
    setScale(1);
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    stage.focus({ preventScroll: true });
  };

  const closeZoom = () => {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    zoomImage.removeAttribute("src");
  };

  figures.forEach((figure) => {
    const image = figure.querySelector("img");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "image-zoom-trigger";
    button.innerHTML = '<span aria-hidden="true"></span><span>Zoom</span>';
    button.setAttribute("aria-label", `Zoom image: ${image.alt || "setup screenshot"}`);
    figure.appendChild(button);

    image.addEventListener("click", () => openZoom(image));
    button.addEventListener("click", () => openZoom(image));
  });

  overlay.querySelector("[data-zoom-close]").addEventListener("click", closeZoom);
  overlay.querySelector("[data-zoom-in]").addEventListener("click", () => setScale(scale + 0.25));
  overlay.querySelector("[data-zoom-out]").addEventListener("click", () => setScale(scale - 0.25));
  overlay.querySelector("[data-zoom-reset]").addEventListener("click", () => setScale(1));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeZoom();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeZoom();
    }

    if ((event.key === "+" || event.key === "=") && !event.ctrlKey && !event.metaKey) {
      setScale(scale + 0.25);
    }

    if (event.key === "-" && !event.ctrlKey && !event.metaKey) {
      setScale(scale - 0.25);
    }
  });
})();