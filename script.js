const app = document.querySelector("#app");
const bandMenu = document.querySelector("#bandMenu");
const cartButton = document.querySelector(".cart-button");
const cartCount = cartButton.querySelector("strong");
const mobileCartButton = document.querySelector("[data-mobile-cart]");
const mobileCartCount = mobileCartButton.querySelector("strong");
const mobileNavItems = document.querySelectorAll("[data-mobile-nav]");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItemsList = document.querySelector("#cartItems");
const cartOverlay = document.querySelector(".cart-overlay");
const cartTotal = document.querySelector("#cartTotal");
const cartCloseButton = document.querySelector(".cart-drawer__close");
const checkoutButton = document.querySelector(".cart-checkout");
const checkoutModal = document.querySelector("#checkoutModal");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutFormView = document.querySelector("[data-checkout-form-view]");
const checkoutSuccess = document.querySelector("[data-checkout-success]");
const checkoutSummary = document.querySelector("#checkoutSummary");
const checkoutOrderNumber = document.querySelector("#checkoutOrderNumber");
const toast = document.querySelector(".toast");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = themeToggle.querySelector(".theme-toggle__text");
const homeContentTemplate = document.querySelector("#homeContent");
const collectionsContentTemplate = document.querySelector("#collectionsContent");
const CART_STORAGE_KEY = "riff-emo-cart";
let cartItems = 0;
let cartProducts = loadCart();
let currentTheme = document.documentElement.dataset.theme || "dark";
let toastTimer;
let cartFeedbackTimer;

function loadCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));

    if (!Array.isArray(storedCart)) return [];

    const catalog = allProducts();

    return storedCart.map((item) => {
      if (!Number.isInteger(item?.quantity) || item.quantity <= 0) return null;

      const currentProduct = catalog.find((product) => (
        (product.id === item.id && product.bandId === item.bandId) ||
        (product.name === item.name && product.band === item.band)
      ));

      if (!currentProduct) return null;

      const defaultSize = currentProduct.sizes.includes("M") ? "M" : currentProduct.sizes[0];
      const size = currentProduct.sizes.includes(item.size) ? item.size : defaultSize;

      return {
        ...currentProduct,
        size,
        quantity: Math.min(item.quantity, 99)
      };
    }).filter(Boolean);
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartProducts));
  } catch {
    // A sacola continua funcionando durante a sessão se o armazenamento estiver indisponível.
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("is-visible"));

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => {
      toast.hidden = true;
    }, 180);
  }, 2400);
}

function animateCartFeedback() {
  const cartTriggers = [cartButton, mobileCartButton];

  window.clearTimeout(cartFeedbackTimer);
  cartTriggers.forEach((button) => button.classList.remove("is-updated"));

  requestAnimationFrame(() => {
    cartTriggers.forEach((button) => button.classList.add("is-updated"));
  });

  cartFeedbackTimer = window.setTimeout(() => {
    cartTriggers.forEach((button) => button.classList.remove("is-updated"));
  }, 620);
}

function productList(band) {
  return band.products.map((product) => ({
    ...product,
    band: band.name,
    bandId: band.id,
    bandShort: band.short,
    source: band.source,
    sourceUrl: band.sourceUrl
  }));
}

function allProducts() {
  return bands.flatMap(productList);
}

function findProduct(bandId, productId) {
  const band = bands.find((item) => item.id === bandId);
  const product = band?.products.find((item) => item.id === productId);

  if (!band || !product) return null;

  return {
    band,
    product: productList(band).find((item) => item.id === productId)
  };
}

function formatPrice(price) {
  return `R$ ${price.toLocaleString("pt-BR")},00`;
}

function readTemplateContent(template) {
  const content = {};

  if (!template) return content;

  template.content.querySelectorAll("[data-field]").forEach((item) => {
    content[item.dataset.field] = item.textContent.trim();
  });

  return content;
}

function getHomeContent() {
  return readTemplateContent(homeContentTemplate);
}

function getCollectionsContent() {
  return readTemplateContent(collectionsContentTemplate);
}

function productCard(product) {
  const isPhoto = /\.(jpe?g)(\?|$)/i.test(product.image);
  const defaultSize = product.sizes.includes("M") ? "M" : product.sizes[0];
  const productUrl = `#product/${product.bandId}/${product.id}`;

  return `
    <article class="product-card" data-type="${product.type}">
      <a class="product-media${isPhoto ? " is-photo" : ""}" href="${productUrl}" aria-label="Ver detalhes de ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
      </a>
      <div class="product-info">
        <div>
          <span class="product-tag">${product.tag}</span>
          <h3><a href="${productUrl}">${product.name}</a></h3>
          <p>${product.band} / ${product.type}</p>
        </div>
        <div class="product-buy">
          <strong>${formatPrice(product.price)}</strong>
          <button
            class="icon-buy"
            type="button"
            aria-label="Adicionar ${product.name}, tamanho ${defaultSize}, à sacola"
            data-cart-add
            data-product-id="${product.id}"
            data-band-id="${product.bandId}"
            data-size="${defaultSize}"
            data-quantity="1"
          >+</button>
        </div>
      </div>
    </article>
  `;
}

function home() {
  const featuredBand = bands.find((band) => band.id === "arctic-monkeys");
  const featuredTags = ["drop recente", "peça de capa", "favorita", "minimal", "arquivo tour"];
  const recentProducts = allProducts().filter((product) => featuredTags.includes(product.tag)).slice(0, 8);
  const content = getHomeContent();
  const collectionsContent = getCollectionsContent();
  const heroButtons = [
    content.primaryCta ? `<a class="btn" href="#new">${content.primaryCta}</a>` : "",
    content.secondaryCta ? `<a class="btn secondary" href="#collections">${content.secondaryCta}</a>` : ""
  ].join("");
  const heroNote = content.noteTitle || content.noteText
    ? `
      <aside class="hero-note" aria-label="Critério da curadoria">
        ${content.noteTitle ? `<strong>${content.noteTitle}</strong>` : ""}
        ${content.noteText ? `<span>${content.noteText}</span>` : ""}
      </aside>
    `
    : "";

  return `
    <section class="hero fade-in" id="home">
      <img src="${featuredBand.hero}" alt="Moletom oficial Arctic Monkeys" fetchpriority="high">
      <div class="hero-content">
        ${content.eyebrow ? `<p class="eyebrow">${content.eyebrow}</p>` : ""}
        ${content.title ? `<h1>${content.title}</h1>` : ""}
        ${content.lead ? `<p class="lead">${content.lead}</p>` : ""}
        ${heroButtons ? `<div class="button-row">${heroButtons}</div>` : ""}
      </div>
      ${heroNote}
    </section>

    <section class="section" id="bands" aria-labelledby="collectionsTitle">
      <span class="section-anchor" id="collections"></span>
      <div class="section-header">
        <div>
          ${collectionsContent.eyebrow ? `<p class="eyebrow">${collectionsContent.eyebrow}</p>` : ""}
          ${collectionsContent.title ? `<h2 id="collectionsTitle">${collectionsContent.title}</h2>` : ""}
        </div>
        ${collectionsContent.copy ? `<p class="section-copy">${collectionsContent.copy}</p>` : ""}
      </div>
      <div class="band-strip">
        ${bands.map((band) => `<a class="band-chip" href="#band/${band.id}" style="--chip: ${band.accent}"><span aria-hidden="true">${band.short}</span>${band.name}</a>`).join("")}
      </div>
    </section>

    <section class="section" aria-label="Coleções em destaque">
      <div class="editorial-grid">
          <a class="editorial-card large" href="#band/my-chemical-romance">
          <img src="${bands.find((band) => band.id === "my-chemical-romance").editorial}" alt="">
          <span>MY CHEMICAL ROMANCE / CAMADA EMO</span>
          </a>
        <a class="editorial-card" href="#band/paramore">
          <img src="${bands[2].hero}" alt="Jaqueta oficial Paramore" loading="lazy" decoding="async">
          ${collectionsContent.paramoreLabel ? `<span>${collectionsContent.paramoreLabel}</span>` : ""}
        </a>
        <a class="editorial-card" href="#band/radiohead">
          <img src="${bands[7].hero}" alt="Camiseta oficial Radiohead" loading="lazy" decoding="async">
          ${collectionsContent.radioheadLabel ? `<span>${collectionsContent.radioheadLabel}</span>` : ""}
        </a>
      </div>
    </section>

    <section class="section" id="new" aria-labelledby="newTitle">
      <div class="section-header">
        <div>
          <p class="eyebrow">Melhores peças</p>
          <h2 id="newTitle">Drop escolhido</h2>
        </div>
        <a class="btn secondary" href="#band/arctic-monkeys">Mais indie</a>
      </div>
      <div class="product-grid">
        ${recentProducts.map(productCard).join("")}
      </div>
    </section>
  `;
}

function bandPage(band) {
  const products = productList(band);

  return `
    <div class="band-page fade-in" style="--band-accent: ${band.accent}; --band-dark: ${band.dark}">
      <section class="band-hero">
        <img src="${band.hero}" alt="Produto oficial de vestuário ${band.name}" fetchpriority="high">
        <div class="band-hero__content">
          <div class="band-hero__meta">
            <span>${band.short}</span>
            <span>${band.mood}</span>
            <a href="${band.sourceUrl}" target="_blank" rel="noreferrer">${band.source}</a>
          </div>
          <h1>${band.name}</h1>
          <p class="lead">${band.detail}</p>
          <div class="button-row">
            <a class="btn" href="#products">Comprar roupas</a>
            <a class="btn secondary" href="#bestsellers">Peças-chave</a>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="collectionTitle">
        <div class="collection-intro">
          <div>
            <p class="eyebrow">Coleção dedicada</p>
            <h2 id="collectionTitle">${band.short} apparel</h2>
          </div>
          <div>
            <p>${band.detail}</p>
            <div class="category-menu" aria-label="Filtros de produto">
              <button class="filter-chip active" type="button" data-filter="all" aria-pressed="true">Tudo</button>
              ${band.categories.map((category) => `<button class="filter-chip" type="button" data-filter="${category}" aria-pressed="false">${category}</button>`).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="products" aria-labelledby="productsTitle">
        <div class="section-header">
          <div>
            <p class="eyebrow">Verificado em lojas oficiais</p>
            <h2 id="productsTitle">Shop ${band.short}</h2>
          </div>
          <a class="btn secondary" href="${band.sourceUrl}" target="_blank" rel="noreferrer">Abrir loja oficial</a>
        </div>
        <div class="product-grid" id="bandProducts">
          ${products.map(productCard).join("")}
        </div>
      </section>

      <section class="texture-band" id="bestsellers" aria-labelledby="bestTitle">
        <div class="section">
          <div class="section-header">
            <div>
              <p class="eyebrow">Peças-chave</p>
              <h2 id="bestTitle">Comece por aqui</h2>
            </div>
          </div>
          <div class="product-grid">
            ${products.slice(0, 4).map(productCard).join("")}
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="stylingTitle">
        <div class="split-showcase">
          <div class="showcase-copy">
            <p class="eyebrow">Nota de styling</p>
            <h2 id="stylingTitle">Use como roupa, não como lembrança.</h2>
            <p>O visual funciona melhor com jeans reto, alfaiataria simples, tênis baixo ou bota preta. A peça da banda vira o ponto de ruído no look.</p>
            <div class="button-row"><a class="btn" href="#products">Ver coleção</a></div>
          </div>
          <div class="showcase-media">
            <img src="${band.editorial}" alt="Produto oficial de vestuário relacionado a ${band.name}" loading="lazy" decoding="async">
          </div>
        </div>
      </section>
    </div>
  `;
}

function productPage(band, product) {
  const relatedProducts = productList(band)
    .filter((item) => item.id !== product.id)
    .slice(0, 4);
  const defaultSize = product.sizes.includes("M") ? "M" : product.sizes[0];

  return `
    <div class="product-page fade-in" style="--band-accent: ${band.accent}; --band-dark: ${band.dark}">
      <section class="product-detail section" aria-labelledby="productTitle">
        <nav class="product-breadcrumb" aria-label="Caminho do produto">
          <a href="#home">Início</a>
          <span aria-hidden="true">/</span>
          <a href="#band/${band.id}">${band.name}</a>
          <span aria-hidden="true">/</span>
          <span>${product.name}</span>
        </nav>

        <div class="product-detail__layout">
          <div class="product-detail__media">
            <span class="product-detail__index" aria-hidden="true">${band.short}</span>
            <img src="${product.image}" alt="${product.name}, ${product.color.toLowerCase()}" fetchpriority="high">
          </div>

          <div class="product-detail__content">
            <div>
              <p class="eyebrow">${band.name} / ${product.type}</p>
              <h1 id="productTitle">${product.name}</h1>
              <div class="product-detail__price">
                <strong>${formatPrice(product.price)}</strong>
                <span>Disponível na demonstração</span>
              </div>
              <p class="product-detail__description">${product.description}</p>
            </div>

            <dl class="product-specs">
              <div><dt>Cor</dt><dd>${product.color}</dd></div>
              <div><dt>Caimento</dt><dd>${product.fit}</dd></div>
              <div><dt>Curadoria</dt><dd>${product.tag}</dd></div>
            </dl>

            <form class="product-purchase" data-product-form>
              <fieldset class="size-selector">
                <legend>Escolha o tamanho</legend>
                <div>
                  ${product.sizes.map((size) => `
                    <label>
                      <input type="radio" name="size" value="${size}" ${size === defaultSize ? "checked" : ""}>
                      <span>${size}</span>
                    </label>
                  `).join("")}
                </div>
              </fieldset>

              <div class="product-purchase__actions">
                <div class="quantity-selector" aria-label="Quantidade">
                  <button type="button" data-product-quantity-decrease aria-label="Diminuir quantidade">−</button>
                  <output data-product-quantity aria-live="polite">1</output>
                  <button type="button" data-product-quantity-increase aria-label="Aumentar quantidade">+</button>
                </div>
                <button
                  class="btn product-add"
                  type="button"
                  data-cart-add
                  data-product-id="${product.id}"
                  data-band-id="${band.id}"
                  data-size="${defaultSize}"
                  data-quantity="1"
                >Adicionar à sacola</button>
              </div>
            </form>

            <div class="product-detail__notes">
              <p>Projeto fictício: tamanhos, disponibilidade e valores são demonstrativos.</p>
              <a href="${band.sourceUrl}" target="_blank" rel="noreferrer">Ver fonte oficial da coleção ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section class="product-story texture-band" aria-labelledby="productStoryTitle">
        <div class="section product-story__grid">
          <div>
            <p class="eyebrow">Por que entrou na curadoria</p>
            <h2 id="productStoryTitle">Merch que funciona como roupa.</h2>
          </div>
          <div>
            <p>${product.description}</p>
            <p>${band.detail}</p>
          </div>
        </div>
      </section>

      ${relatedProducts.length ? `
        <section class="section" aria-labelledby="relatedTitle">
          <div class="section-header">
            <div>
              <p class="eyebrow">Da mesma banda</p>
              <h2 id="relatedTitle">Continue no universo ${band.short}</h2>
            </div>
            <a class="btn secondary" href="#band/${band.id}">Ver coleção completa</a>
          </div>
          <div class="product-grid">
            ${relatedProducts.map(productCard).join("")}
          </div>
        </section>
      ` : ""}
    </div>
  `;
}

function setCartCount(value) {
  cartItems = value;
  cartCount.textContent = cartItems;
  mobileCartCount.textContent = cartItems;
  cartButton.setAttribute("aria-label", `Sacola com ${cartItems} ${cartItems === 1 ? "item" : "itens"}`);
  mobileCartButton.setAttribute("aria-label", `Abrir sacola com ${cartItems} ${cartItems === 1 ? "item" : "itens"}`);
}

function renderCart() {
  const total = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartProducts.reduce((sum, item) => sum + item.quantity, 0);

  setCartCount(itemCount);
  cartTotal.textContent = formatPrice(total);
  checkoutButton.disabled = cartProducts.length === 0;

  if (!cartProducts.length) {
    cartItemsList.innerHTML = `
      <div class="cart-empty">
        <strong>Sua sacola está vazia.</strong>
        <span>Adicione uma peça com o botão + em qualquer card.</span>
      </div>
    `;
    return;
  }

  cartItemsList.innerHTML = cartProducts.map((item, index) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">
      <div>
        <h3>${item.name}</h3>
        <p>${item.band} / ${item.type} / Tam. ${item.size}</p>
        <strong>${formatPrice(item.price)}</strong>
      </div>
      <div class="cart-item__controls" aria-label="Controles de quantidade para ${item.name}">
        <button class="cart-item__step" type="button" data-cart-decrease="${index}" aria-label="Remover uma unidade de ${item.name}">−</button>
        <span aria-label="Quantidade ${item.quantity}">${item.quantity}</span>
        <button class="cart-item__step" type="button" data-cart-increase="${index}" aria-label="Adicionar uma unidade de ${item.name}">+</button>
        <button type="button" data-cart-remove="${index}" aria-label="Remover ${item.name} da sacola">Remover</button>
      </div>
    </article>
  `).join("");
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
  document.body.classList.add("cart-open");
  cartCloseButton.focus();
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
  document.body.classList.remove("cart-open");
}

function addToCart(button) {
  const result = findProduct(button.dataset.bandId, button.dataset.productId);

  if (!result) return;

  const { product } = result;
  const defaultSize = product.sizes.includes("M") ? "M" : product.sizes[0];
  const size = product.sizes.includes(button.dataset.size) ? button.dataset.size : defaultSize;
  const quantity = Math.min(Math.max(Number(button.dataset.quantity) || 1, 1), 99);
  const cartProduct = { ...product, size, quantity };
  const existing = cartProducts.find((item) => (
    item.id === product.id && item.bandId === product.bandId && item.size === size
  ));

  if (existing) {
    existing.quantity = Math.min(existing.quantity + quantity, 99);
  } else {
    cartProducts.push(cartProduct);
  }

  saveCart();
  renderCart();
  animateCartFeedback();
  showToast(`${product.name}, tamanho ${size}, foi adicionado à sacola.`);
}

function decreaseCartItem(index) {
  const item = cartProducts[index];

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cartProducts.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function increaseCartItem(index) {
  const item = cartProducts[index];

  if (!item) return;

  item.quantity = Math.min(item.quantity + 1, 99);
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  cartProducts.splice(index, 1);
  saveCart();
  renderCart();
}

function openCheckout() {
  if (!cartProducts.length) return;

  const total = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);

  checkoutSummary.innerHTML = `
    <div class="checkout-summary__header">
      <strong>Resumo</strong>
      <span>${cartItems} ${cartItems === 1 ? "item" : "itens"}</span>
    </div>
    <ul>
      ${cartProducts.map((item) => `
        <li>
          <span>${item.quantity}× ${item.name} · Tam. ${item.size}</span>
          <strong>${formatPrice(item.price * item.quantity)}</strong>
        </li>
      `).join("")}
    </ul>
    <div class="checkout-summary__total">
      <span>Total fictício</span>
      <strong>${formatPrice(total)}</strong>
    </div>
  `;

  checkoutFormView.hidden = false;
  checkoutSuccess.hidden = true;
  closeCart();
  checkoutModal.showModal();
}

function closeCheckout() {
  if (checkoutModal.open) checkoutModal.close();
}

function completeCheckout() {
  const orderNumber = `RE-${Date.now().toString().slice(-6)}`;

  checkoutOrderNumber.textContent = orderNumber;
  checkoutFormView.hidden = true;
  checkoutSuccess.hidden = false;
  checkoutForm.reset();
  cartProducts = [];
  saveCart();
  renderCart();
  showToast(`Pedido fictício ${orderNumber} confirmado.`);
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem("riff-emo-theme", theme);
  } catch {
    // O tema continua aplicado durante a sessão se o armazenamento estiver indisponível.
  }

  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
  themeToggleText.textContent = isDark ? "Claro" : "Escuro";
}

function applyFilter(filter) {
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    const isActive = chip.dataset.filter === filter;
    chip.classList.toggle("active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("#bandProducts .product-card").forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.type !== filter;
  });
}

function currentMobileSection(hash) {
  if (hash.startsWith("#band/")) return "bands";
  if (hash.startsWith("#product/")) return "bands";
  if (hash === "#bands") return "bands";
  if (hash === "#collections") return "bands";
  if (hash === "#new") return "new";
  return "home";
}

function updateMobileNav() {
  const activeSection = currentMobileSection(window.location.hash || "#home");

  mobileNavItems.forEach((item) => {
    const isActive = item.dataset.mobileNav === activeSection;
    item.classList.toggle("is-active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

function render() {
  const hash = window.location.hash || "#home";
  const productRoute = hash.startsWith("#product/") ? hash.replace("#product/", "").split("/") : [];
  const productResult = productRoute.length === 2 ? findProduct(productRoute[0], productRoute[1]) : null;
  const bandId = hash.startsWith("#band/") ? hash.replace("#band/", "") : null;
  const band = bands.find((item) => item.id === bandId);

  if (productResult) {
    app.innerHTML = productPage(productResult.band, productResult.product);
  } else {
    app.innerHTML = band ? bandPage(band) : home();
  }
  updateMobileNav();

  if (band || productResult || hash === "#home") {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  requestAnimationFrame(() => {
    document.querySelector(hash)?.scrollIntoView({ block: "start" });
  });
}

bandMenu.innerHTML = bands.map((band) => `<a href="#band/${band.id}">${band.name}</a>`).join("");

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  const buyButton = event.target.closest("[data-cart-add]");
  const themeButton = event.target.closest(".theme-toggle");
  const closeCartButton = event.target.closest("[data-cart-close]");
  const decreaseButton = event.target.closest("[data-cart-decrease]");
  const increaseButton = event.target.closest("[data-cart-increase]");
  const removeButton = event.target.closest("[data-cart-remove]");
  const mobileCartTrigger = event.target.closest("[data-mobile-cart]");
  const checkoutTrigger = event.target.closest(".cart-checkout");
  const checkoutCloseButton = event.target.closest("[data-checkout-close]");
  const productQuantityDecrease = event.target.closest("[data-product-quantity-decrease]");
  const productQuantityIncrease = event.target.closest("[data-product-quantity-increase]");

  if (filterButton) {
    applyFilter(filterButton.dataset.filter);
  }

  if (buyButton) {
    addToCart(buyButton);
    buyButton.classList.add("added");
    window.setTimeout(() => buyButton.classList.remove("added"), 180);
  }

  if (themeButton) {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  if (cartButton.contains(event.target) || mobileCartTrigger) {
    openCart();
  }

  if (closeCartButton) {
    closeCart();
  }

  if (decreaseButton) {
    decreaseCartItem(Number(decreaseButton.dataset.cartDecrease));
  }

  if (increaseButton) {
    increaseCartItem(Number(increaseButton.dataset.cartIncrease));
  }

  if (removeButton) {
    removeCartItem(Number(removeButton.dataset.cartRemove));
  }

  if (checkoutTrigger) {
    openCheckout();
  }

  if (checkoutCloseButton) {
    closeCheckout();
  }

  if (productQuantityDecrease || productQuantityIncrease) {
    const form = event.target.closest("[data-product-form]");
    const output = form?.querySelector("[data-product-quantity]");
    const addButton = form?.querySelector("[data-cart-add]");

    if (output && addButton) {
      const direction = productQuantityIncrease ? 1 : -1;
      const quantity = Math.min(Math.max(Number(output.value) + direction, 1), 10);
      output.value = quantity;
      output.textContent = quantity;
      addButton.dataset.quantity = quantity;
    }
  }
});

document.addEventListener("change", (event) => {
  if (!event.target.matches("[data-product-form] input[name='size']")) return;

  const addButton = event.target.closest("[data-product-form]")?.querySelector("[data-cart-add]");
  if (addButton) addButton.dataset.size = event.target.value;
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  completeCheckout();
});

checkoutModal.addEventListener("click", (event) => {
  if (event.target === checkoutModal) closeCheckout();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) {
    closeCart();
  }
});

setTheme(currentTheme);
renderCart();
window.addEventListener("hashchange", render);
render();
