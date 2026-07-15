(() => {
  const frame = document.querySelector(".hero-shot .browser-frame");
  const sourceImage = frame?.querySelector("img");

  if (!frame || !sourceImage) {
    return;
  }

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "hero-expand-trigger";
  trigger.setAttribute("aria-label", "View the Acumatica payment screenshot full screen");
  trigger.innerHTML = '<span class="hero-expand-icon" aria-hidden="true"></span><span class="sr-only">View full screen</span>';
  frame.appendChild(trigger);

  const overlay = document.createElement("div");
  overlay.className = "hero-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Full-screen Acumatica screenshot viewer");
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="hero-lightbox-toolbar">
      <p class="hero-lightbox-title"></p>
      <button class="hero-lightbox-close" type="button" aria-label="Close full-screen image">
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div class="hero-lightbox-stage" tabindex="-1">
      <img class="hero-lightbox-image" alt="" />
    </div>
    <div class="hero-lightbox-controls" aria-label="Image zoom controls">
      <button type="button" data-zoom-out aria-label="Zoom out" title="Zoom out">
        <span class="hero-zoom-symbol hero-zoom-minus" aria-hidden="true"></span>
      </button>
      <button class="hero-zoom-level" type="button" data-zoom-reset aria-label="Reset zoom" title="Reset zoom">100%</button>
      <button type="button" data-zoom-in aria-label="Zoom in" title="Zoom in">
        <span class="hero-zoom-symbol hero-zoom-plus" aria-hidden="true"></span>
      </button>
    </div>
  `;
  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector(".hero-lightbox-image");
  const stage = overlay.querySelector(".hero-lightbox-stage");
  const title = overlay.querySelector(".hero-lightbox-title");
  const closeButton = overlay.querySelector(".hero-lightbox-close");
  const zoomOutButton = overlay.querySelector("[data-zoom-out]");
  const zoomInButton = overlay.querySelector("[data-zoom-in]");
  const zoomResetButton = overlay.querySelector("[data-zoom-reset]");
  let scale = 1;
  let baseWidth = 0;
  let baseHeight = 0;
  let previousBodyOverflow = "";

  const updateImageSize = () => {
    if (!baseWidth || !baseHeight) {
      return;
    }

    lightboxImage.style.width = `${Math.round(baseWidth * scale)}px`;
    lightboxImage.style.height = `${Math.round(baseHeight * scale)}px`;
    zoomResetButton.textContent = `${Math.round(scale * 100)}%`;
    zoomOutButton.disabled = scale <= 0.5;
    zoomInButton.disabled = scale >= 3;
  };

  const calculateBaseSize = () => {
    if (!lightboxImage.naturalWidth || !lightboxImage.naturalHeight) {
      return;
    }

    const availableWidth = window.innerWidth * 0.9;
    const availableHeight = window.innerHeight * 0.72;
    const fitScale = Math.min(
      1,
      availableWidth / lightboxImage.naturalWidth,
      availableHeight / lightboxImage.naturalHeight,
    );
    baseWidth = lightboxImage.naturalWidth * fitScale;
    baseHeight = lightboxImage.naturalHeight * fitScale;
    updateImageSize();
  };

  const setScale = (nextScale) => {
    scale = Math.min(3, Math.max(0.5, Number(nextScale.toFixed(2))));
    updateImageSize();
  };

  const openLightbox = () => {
    lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
    lightboxImage.alt = sourceImage.alt || "Acumatica payment screenshot";
    title.textContent = sourceImage.alt || "Acumatica payment screenshot";
    scale = 1;
    overlay.hidden = false;
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      overlay.classList.add("is-open");
      closeButton.focus({ preventScroll: true });
    });
  };

  const closeLightbox = () => {
    if (overlay.hidden) {
      return;
    }

    overlay.classList.remove("is-open");
    overlay.hidden = true;
    document.body.style.overflow = previousBodyOverflow;
    lightboxImage.removeAttribute("src");
    trigger.focus({ preventScroll: true });
  };

  sourceImage.addEventListener("click", openLightbox);
  trigger.addEventListener("click", openLightbox);
  closeButton.addEventListener("click", closeLightbox);
  zoomOutButton.addEventListener("click", () => setScale(scale - 0.25));
  zoomInButton.addEventListener("click", () => setScale(scale + 0.25));
  zoomResetButton.addEventListener("click", () => setScale(1));
  lightboxImage.addEventListener("load", calculateBaseSize);
  window.addEventListener("resize", calculateBaseSize);

  stage.addEventListener("click", (event) => {
    if (event.target === stage) {
      closeLightbox();
    }
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  stage.addEventListener("wheel", (event) => {
    if (!event.ctrlKey && !event.metaKey) {
      return;
    }

    event.preventDefault();
    setScale(scale + (event.deltaY < 0 ? 0.25 : -0.25));
  }, { passive: false });

  document.addEventListener("keydown", (event) => {
    if (overlay.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    } else if ((event.key === "+" || event.key === "=") && !event.ctrlKey && !event.metaKey) {
      setScale(scale + 0.25);
    } else if (event.key === "-" && !event.ctrlKey && !event.metaKey) {
      setScale(scale - 0.25);
    } else if (event.key === "0" && !event.ctrlKey && !event.metaKey) {
      setScale(1);
    }
  });
})();
