(() => {
  const normalize = (value) => (value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  const main = document.querySelector(".main-shell");
  const pageTitle = document.querySelector("h1")?.textContent?.trim() || "Documentation";

  if (main && !main.querySelector(".doc-breadcrumbs")) {
    const breadcrumbs = document.createElement("nav");
    breadcrumbs.className = "doc-breadcrumbs";
    breadcrumbs.setAttribute("aria-label", "Breadcrumb");
    const isDemo = window.location.pathname.startsWith("/demo");
    breadcrumbs.innerHTML = `<a href="/">Home</a><span aria-hidden="true">/</span><a href="${isDemo ? "/demo/" : "/setup/"}">${isDemo ? "Demo" : "Documentation"}</a><span aria-hidden="true">/</span><span aria-current="page">${pageTitle}</span>`;
    main.insertBefore(breadcrumbs, main.querySelector(".hero"));
  }

  let tocHost = document.querySelector("[data-page-toc]");
  const article = document.querySelector(".docs-article") || main;
  if (article && !tocHost) {
    tocHost = document.createElement("aside");
    tocHost.className = "page-toc demo-page-toc";
    tocHost.dataset.pageToc = "";
    tocHost.innerHTML = "<h2>On this page</h2>";
    const hero = main?.querySelector(".hero");
    hero?.insertAdjacentElement("afterend", tocHost);
  }

  if (article && tocHost) {
    const headings = [...article.querySelectorAll("h2, h3")].filter((heading) => !heading.closest(".page-toc"));
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "On this page");
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `${normalize(heading.textContent).replace(/ /g, "-") || "section"}-${index + 1}`;
      }
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.className = heading.tagName === "H3" ? "toc-depth-3" : "";
      nav.appendChild(link);
    });
    if (headings.length) tocHost.appendChild(nav); else tocHost.hidden = true;
  }

  let dynamicLaunchers = [...document.querySelectorAll("[data-docs-search]")];
  if (!dynamicLaunchers.length) {
    const sidebar = document.querySelector(".sidebar-nav");
    const kicker = sidebar?.querySelector(".sidebar-kicker");
    if (sidebar && kicker) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "docs-search-launch";
      button.dataset.docsSearch = "";
      button.innerHTML = "<span>Search documentation</span><kbd>/</kbd>";
      kicker.insertAdjacentElement("afterend", button);
    }
    const mobile = document.querySelector(".mobile-topbar");
    if (mobile) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "docs-search-launch mobile-docs-search";
      button.dataset.docsSearch = "";
      button.textContent = "Search";
      mobile.querySelector(".menu-button")?.insertAdjacentElement("beforebegin", button);
    }
    dynamicLaunchers = [...document.querySelectorAll("[data-docs-search]")];
  }
  const launchers = dynamicLaunchers;
  if (!launchers.length) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "docs-search-overlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <section class="docs-search-dialog" role="dialog" aria-modal="true" aria-labelledby="docs-search-title">
      <div class="docs-search-head">
        <div>
          <p class="docs-search-kicker">linked2pay - integration for Acumatica</p>
          <h2 id="docs-search-title">Search documentation</h2>
        </div>
        <button type="button" class="docs-search-close" aria-label="Close search"><span aria-hidden="true"></span></button>
      </div>
      <label class="docs-search-field">
        <span class="sr-only">Search documentation</span>
        <input type="search" autocomplete="off" placeholder="Search setup, payments, webhooks, errors, or testing" />
      </label>
      <div class="docs-search-results" aria-live="polite"></div>
    </section>
  `;
  document.body.appendChild(overlay);

  const input = overlay.querySelector("input");
  const results = overlay.querySelector(".docs-search-results");
  const closeButton = overlay.querySelector(".docs-search-close");
  const index = Array.isArray(window.L2P_DOCS_INDEX) ? window.L2P_DOCS_INDEX : [];
  let previousFocus = null;

  const render = (query) => {
    const terms = normalize(query).split(" ").filter(Boolean);
    if (!terms.length) {
      results.innerHTML = '<p class="docs-search-empty">Start typing to search the implementation, payment, security, and support guides.</p>';
      return;
    }

    const matches = index.map((item) => {
      const haystack = normalize(`${item.title} ${item.summary} ${item.keywords || ""}`);
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
      return { item, score };
    }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title)).slice(0, 12);

    if (!matches.length) {
      results.innerHTML = '<p class="docs-search-empty">No matching pages. Try a screen ID, status, payment type, or error message.</p>';
      return;
    }

    results.innerHTML = matches.map(({ item }) => `
      <a class="docs-search-result" href="${item.url}">
        <strong>${item.title}</strong>
        <span>${item.summary}</span>
      </a>
    `).join("");
  };

  const open = (launcher) => {
    previousFocus = launcher;
    overlay.hidden = false;
    document.body.classList.add("docs-search-open");
    render("");
    requestAnimationFrame(() => input.focus());
  };

  const close = () => {
    overlay.hidden = true;
    document.body.classList.remove("docs-search-open");
    input.value = "";
    previousFocus?.focus();
  };

  launchers.forEach((launcher) => launcher.addEventListener("click", () => open(launcher)));
  input.addEventListener("input", () => render(input.value));
  closeButton.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && overlay.hidden && !/input|textarea|select/i.test(document.activeElement?.tagName || "")) {
      event.preventDefault();
      open(launchers[0]);
    } else if (event.key === "Escape" && !overlay.hidden) {
      close();
    }
  });
})();
