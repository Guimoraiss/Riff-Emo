const bands = [
  {
    id: "my-chemical-romance",
    name: "My Chemical Romance",
    short: "MCR",
    accent: "#b92b35",
    dark: "#151111",
    mood: "emo teatral, preto gasto e vermelho profundo",
    source: "Loja oficial My Chemical Romance / Warner Records",
    sourceUrl: "https://mychemicalromance.warnerrecords.com/",
    hero: "https://cdn.shopify.com/s/files/1/0597/5402/1052/files/The_FabulousKillyjoysHoodie-FRONT.png?v=1778775842",
    editorial: "https://cdn.shopify.com/s/files/1/0597/5402/1052/files/1.AftermathPulloverHoodie-FRONT.png?v=1778683178",
    categories: ["Camisetas", "Moletons",],
    detail: "Uma seleção de apparel oficial com cara de arquivo de turnê: moletons gráficos, camisetas escuras e acessórios que funcionam fora do show.",
    products: [
      { name: "Together We March Zip Hoodie", type: "Moletons", price: 389, tag: "peça de capa", image: "https://mychemicalromance.warnerrecords.com/cdn/shop/products/TogetherWeMarchZipHoodie.png?v=1771369068&width=1024" },
      { name: "Revenge Rosary Hoodie", type: "Moletons", price: 389, tag: "drop recente", image: "https://mychemicalromance.warnerrecords.com/cdn/shop/files/Rosaryhoodie.png?v=1744145134&width=1024" },
      { name: "Walk This World Alone Hoodie", type: "Moletons", price: 349, tag: "camada chave", image: "https://mychemicalromance.warnerrecords.com/cdn/shop/files/1-WalkThisWorldHoodieFrt.png?v=1771367616&width=1024" },
      { name: "RVNG RMXD T-Shirt", type: "Camisetas", price: 219, tag: "essencial", image: "https://mychemicalromance.warnerrecords.com/cdn/shop/files/2-RvngRmxdfrt.png?v=1771368556&width=1024" },
      { name: "Let's All Be Friends Juniors T-Shirt", type: "Camisetas", price: 189, tag: "baby tee", image: "https://mychemicalromance.warnerrecords.com/cdn/shop/products/MCR_Let_sAllBeFriends__1.png?v=1771369248&width=1024" },
      { name: "Praying Hands Distressed T-Shirt", type: "Camisetas", price: 359, tag: "estampa forte", image: "https://mychemicalromance.warnerrecords.com/cdn/shop/products/mcr_prayinghandsdistressedtshirt.png?v=1635198707&width=1024" }
    ]
  },
  {
    id: "bring-me-the-horizon",
    name: "Bring Me The Horizon",
    short: "BMTH",
    accent: "#6f55ff",
    dark: "#14131b",
    mood: "metalcore digital, urbano e pesado",
    source: "Loja oficial Bring Me The Horizon",
    sourceUrl: "https://shop.bringmethehorizon.com/",
    hero: "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---TTS-Embroidered-black-hoodie.png?v=1757505221",
    editorial: "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---Scribbled-black-washed-t-shirt-front.png?v=1752139877",
    categories: ["Camisetas", "Moletons",],
    detail: "Peças oficiais com estética de zine digital, gráficos grandes e preto lavado. A curadoria evita mídia física e foca só em roupa.",
    products: [
      { name: "Goat Girl T-Shirt", type: "Camisetas", price: 229, tag: "gráfico forte", image: "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/bmth-cyb-goat-girl-t-shirt-mock-up.png?v=1776072621" },
      { name: "Scribbled Washed T-Shirt", type: "Camisetas", price: 219, tag: "visual limpo", image: "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---Scribbled-black-washed-t-shirt-front.png?v=1752139877" },
      { name: "One Body One Soul Hoodie", type: "Moletons", price: 389, tag: "camada", image: "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---Together-heather-grey-hoodie-front.png?v=1763399399" },
      { name: "TTS Black Hoodie", type: "Moletons", price: 399, tag: "minimal", image: "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---TTS-Embroidered-black-hoodie.png?v=1757505221" },
    
      
    ]
  },
  {
    id: "paramore",
    name: "Paramore",
    short: "PMR",
    accent: "#e25a3b",
    dark: "#241715",
    mood: "alt-pop quente, jovem e bem usável",
    source: "Loja oficial Paramore / Bravado",
    sourceUrl: "https://store.paramore.net/",
    hero: "https://cdn.shopify.com/s/files/1/0895/5494/4287/files/ParamoreJacket_Front_3ea52c58-5c8a-4e16-8b56-1fcf1ac2aabf.png?v=1738247137",
    editorial: "https://cdn.shopify.com/s/files/1/0895/5494/4287/files/PRODUCT_PARA_25_ECOMM_AWKIFSSTEE_IVRY.png?v=1753214672",
    categories: ["Camisetas", "Moletons", "Long sleeves",],
    detail: "Curadoria de roupa oficial com energia pop-punk sem virar fantasia: baby tees, jaqueta de destaque e camisetas claras para uso diário.",
    products: [
      { name: "Our Kissing Spot T-Shirt", type: "Camisetas", price: 239, tag: "indie leve", image: "https://cdn.shopify.com/s/files/1/0895/5494/4287/files/PRODUCT_PARA_25_ECOMM_AWKIFSSTEE_IVRY.png?v=1753214672" },
      { name: "Cowboy Hayley Long Sleeve", type: "Long sleeves", price: 249, tag: "oversized", image: "https://store.paramore.net/cdn/shop/files/PRODUCT_PARA_ILARIA_COWBOY_LSTEE.png?v=1738778316&width=800" },
      { name: "Paramore Vines Hoodie", type: "Moletons", price: 219, tag: "camada leve", image: "https://store.paramore.net/cdn/shop/files/PRODUCT_PARA_BRJ_VINES_HOODIE_1.png?v=1731355873&width=800" },
      { name: "Same Lesson Again T-Shirt", type: "Camisetas", price: 219, tag: "favorita", image: "https://store.paramore.net/cdn/shop/files/PRODUCT_PARA_24_ECOMM_FAN_ELANORA_SAMELESSON_SSTEE.png?v=1738778319&width=800" },
      { name: "Thick Skull Zine Long Sleeve", type: "Long sleeves", price: 469, tag: "peça de capa", image: "https://store.paramore.net/cdn/shop/files/PARA_ILARIA_ZINE_LS_1B.png?v=1731357211&width=800" },
      { name: "Thick Skull Van Crewneck", type: "Moletons", price: 189, tag: "moletom", image: "https://store.paramore.net/cdn/shop/files/PARA_ELANORA_VAN_CREW_1B.png?v=1731356353&width=800" }
    ]
  },
  {
    id: "linkin-park",
    name: "Linkin Park",
    short: "LP",
    accent: "#3f75d7",
    dark: "#10151d",
    mood: "nu metal gráfico, técnico e urbano",
    source: "Loja oficial Linkin Park",
    sourceUrl: "https://store.linkinpark.com/",
    hero: "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP193A_PROJEKTREVOLUTIONLIVESTREAMTEEBCK.png?v=1774372641",
    editorial: "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP249D_VINTAGEMETEORASPRAYYTHBLACKZIPHOODIE_B.png?v=1773356733",
    categories: ["Camisetas", "Moletons"],
    detail: "Roupas oficiais com cara de arquivo de festival, logo forte e peças fáceis de combinar com denim, cargo e tênis preto.",
    products: [
      { name: "Projekt Revolution Live Stream Tee", type: "Camisetas", price: 229, tag: "arquivo tour", image: "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP193A_PROJEKTREVOLUTIONLIVESTREAMTEEBCK.png?v=1774372641" },
      { name: "From Zero Logo Youth Tee", type: "Camisetas", price: 199, tag: "logo", image: "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP1305A_FROMZEROLOGOYOUTHBLACKTEE.png?v=1773936683" },
      { name: "Meteora Spray Youth Tee", type: "Camisetas", price: 199, tag: "clássico", image: "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP249C_VINTAGEMETEORASPRAYBLACKYOUTHTEE_41134ac0-7007-4b16-b753-fd2214403191.png?v=1779917362" },
      { name: "Meteora Spray Zip Hoodie", type: "Moletons", price: 389, tag: "camada", image: "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP249D_VINTAGEMETEORASPRAYYTHBLACKZIPHOODIE_B.png?v=1773356733" }
    ]
  },
  {
    id: "deftones",
    name: "Deftones",
    short: "DFT",
    accent: "#6d8faa",
    dark: "#101316",
    mood: "escuro, atmosférico e minimalista",
    source: "Loja oficial Deftones / Manhead",
    sourceUrl: "https://shopdeftones.com/",
    hero: "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/deftones-x-dickies-black-hoodie-apparel-729.png?v=1762274787",
    editorial: "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/statue-t-shirt-apparel-264.png?v=1779662414",
    categories: ["Camisetas", "Long sleeves"],
    detail: "Peças oficiais de clima frio, silhueta escura e gráfico controlado. A seleção favorece roupa que parece de brechó bom.",
    products: [
      { name: "Statue T-Shirt", type: "Camisetas", price: 229, tag: "drop recente", image: "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/statue-t-shirt-apparel-264.png?v=1779662414" },
      { name: "Sphynx T-Shirt", type: "Camisetas", price: 229, tag: "gráfico", image: "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/sphynx-t-shirt-apparel-599.png?v=1773090970" },
      { name: "Private Music Tracklist Long Sleeve", type: "Long sleeves", price: 239, tag: "azul frio", image: "https://shopdeftones.com/cdn/shop/files/private-music-tracklist-long-sleeve-apparel-791.png?v=1777322427&width=823" },
      { name: "Roses Long Sleeve", type: "Long sleeves", price: 399, tag: "colab", image: "https://shopdeftones.com/cdn/shop/files/roses-long-sleeve-apparel-542.png?v=1758909160&width=823" },
      { name: "ghosts cream t-shirt", type: "Camisetas", price: 199, tag: "acessório", image: "https://shopdeftones.com/cdn/shop/files/ghosts-cream-t-shirt-472.png?v=1755825491&width=823" },
      { name: "wires t-shirt", type: "Camisetas", price: 119, tag: "detalhe", image: "https://shopdeftones.com/cdn/shop/files/wires-t-shirt-apparel-618.png?v=1758909157&width=823" }
    ]
  },
  {
    id: "slipknot",
    name: "Slipknot",
    short: "SK",
    accent: "#9b2020",
    dark: "#111111",
    mood: "industrial agressivo, cinza e vermelho",
    source: "Loja oficial Slipknot",
    sourceUrl: "https://slipknotmerch.com/",
    hero: "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_9_Point_Star_Black_Hoodie_1_FRONT.png?v=1770049348",
    editorial: "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_Skull_Grey_TShirt_1_FRONT.png?v=1770049741",
    categories: ["Camisetas", "Moletons", "Long sleeves"],
    detail: "Vestuário oficial pesado, com vermelho fechado e textura industrial. A curadoria separa as peças mais usáveis das mais colecionáveis.",
    products: [
      { name: "IOWA 25 Raised 2 Tee", type: "Camisetas", price: 229, tag: "aniversário", image: "https://cdn.shopify.com/s/files/1/1461/5290/files/raised2front.png?v=1782143803" },
      { name: "Skull Grey T-Shirt", type: "Camisetas", price: 219, tag: "cinza gasto", image: "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_Skull_Grey_TShirt_1_FRONT.png?v=1770049741" },
      { name: "9 Point Star Black Hoodie", type: "Moletons", price: 389, tag: "peça forte", image: "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_9_Point_Star_Black_Hoodie_1_FRONT.png?v=1770049348" },
      { name: "Barcode Grey Thermal", type: "Long sleeves", price: 279, tag: "camada", image: "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_Barcode_Grey_Thermal_1_FRONT_RESHOOT.png?v=1770049494" },
      { name: "Long Sleeve Tour Tee", type: "Long sleeves", price: 159, tag: "detalhe", image: "https://slipknotmerch.com/cdn/shop/files/LS-tee_03.png?v=1752849677&width=800" }
    ]
  },
  {
    id: "arctic-monkeys",
    name: "Arctic Monkeys",
    short: "AM",
    accent: "#a27649",
    dark: "#191614",
    mood: "indie britânico, editorial e noturno",
    source: "Loja oficial Arctic Monkeys",
    sourceUrl: "https://store.arcticmonkeys.com/",
    hero: "https://cdn.shopify.com/s/files/1/0652/6491/0583/products/AMO016A-HOBLK-FRONT.png?v=1660289021",
    editorial: "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Classic-Logo-Front_2.png?v=1698942099",
    categories: ["Camisetas", "Moletons"],
    detail: "A parte mais indie da loja: logo discreto, camiseta de foto e moletom simples para um visual de show pequeno em bar escuro.",
    products: [
      { name: "Arctic Monkeys Logo Hood", type: "Moletons", price: 379, tag: "minimal", image: "https://cdn.shopify.com/s/files/1/0652/6491/0583/products/AMO016A-HOBLK-FRONT.png?v=1660289021" },
      { name: "Gold Logo Black T-Shirt", type: "Camisetas", price: 219, tag: "essencial", image: "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Classic-Logo-Front_2.png?v=1698942099" },
      { name: "Distorted Photo Tee", type: "Camisetas", price: 229, tag: "foto", image: "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Photo-Tee.png?v=1694616367" },
      { name: "Band Photo White T-Shirt", type: "Camisetas", price: 229, tag: "arquivo", image: "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Band-Photo.png?v=1687414955" },
      { name: "Ornate Logo Tee", type: "Camisetas", price: 219, tag: "clássica", image: "https://cdn.shopify.com/s/files/1/0652/6491/0583/products/AMO013A-TSWHI.png?v=1660289142" }
    ]
  },
  {
    id: "radiohead",
    name: "Radiohead",
    short: "RH",
    accent: "#6d7357",
    dark: "#171a15",
    mood: "experimental, sóbrio e conceitual",
    source: "W.A.S.T.E. Store oficial",
    sourceUrl: "https://store-us.wasteheadquarters.com/",
    hero: "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouseTee_Stacked.png?v=1777651404",
    editorial: "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouse_WhiteTee_Stacked.png?v=1777651469",
    categories: ["Camisetas"],
    detail: "Coleção reduzida e verificada: camisetas oficiais com estética de arquivo, arte conceitual e pouca interferência visual.",
    products: [
      { name: "Motion Picture House Black T-Shirt", type: "Camisetas", price: 229, tag: "preta", image: "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouseTee_Stacked.png?v=1777651404" },
      { name: "Motion Picture House White T-Shirt", type: "Camisetas", price: 229, tag: "branca", image: "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouse_WhiteTee_Stacked.png?v=1777651469" }
    ]
  }
];

const app = document.querySelector("#app");
const bandMenu = document.querySelector("#bandMenu");
const cartButton = document.querySelector(".cart-button");
const cartCount = cartButton.querySelector("strong");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItemsList = document.querySelector("#cartItems");
const cartOverlay = document.querySelector(".cart-overlay");
const cartTotal = document.querySelector("#cartTotal");
const cartCloseButton = document.querySelector(".cart-drawer__close");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = themeToggle.querySelector(".theme-toggle__text");
const homeContentTemplate = document.querySelector("#homeContent");
const collectionsContentTemplate = document.querySelector("#collectionsContent");
let cartItems = 0;
let cartProducts = [];
let currentTheme = localStorage.getItem("riff-emo-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function productList(band) {
  return band.products.map((product) => ({ ...product, band: band.name }));
}

function allProducts() {
  return bands.flatMap(productList);
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

  return `
    <article class="product-card" data-type="${product.type}">
      <a class="product-media${isPhoto ? " is-photo" : ""}" href="${product.image}" target="_blank" rel="noreferrer" aria-label="Ver imagem de ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
      </a>
      <div class="product-info">
        <div>
          <span class="product-tag">${product.tag}</span>
          <h3>${product.name}</h3>
          <p>${product.band} / ${product.type}</p>
        </div>
        <div class="product-buy">
          <strong>${formatPrice(product.price)}</strong>
          <button
            class="icon-buy"
            type="button"
            aria-label="Adicionar ${product.name} à sacola"
            data-cart-add
            data-name="${product.name}"
            data-band="${product.band}"
            data-type="${product.type}"
            data-price="${product.price}"
            data-image="${product.image}"
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

    <section class="section" id="collections" aria-labelledby="collectionsTitle">
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

function setCartCount(value) {
  cartItems = value;
  cartCount.textContent = cartItems;
  cartButton.setAttribute("aria-label", `Sacola com ${cartItems} ${cartItems === 1 ? "item" : "itens"}`);
}

function renderCart() {
  const total = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartProducts.reduce((sum, item) => sum + item.quantity, 0);

  setCartCount(itemCount);
  cartTotal.textContent = formatPrice(total);

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
        <p>${item.band} / ${item.type}</p>
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
  const product = {
    name: button.dataset.name,
    band: button.dataset.band,
    type: button.dataset.type,
    price: Number(button.dataset.price),
    image: button.dataset.image,
    quantity: 1
  };
  const existing = cartProducts.find((item) => item.name === product.name && item.band === product.band);

  if (existing) {
    existing.quantity += 1;
  } else {
    cartProducts.push(product);
  }

  renderCart();
  openCart();
}

function decreaseCartItem(index) {
  const item = cartProducts[index];

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cartProducts.splice(index, 1);
  }

  renderCart();
}

function increaseCartItem(index) {
  const item = cartProducts[index];

  if (!item) return;

  item.quantity += 1;
  renderCart();
}

function removeCartItem(index) {
  cartProducts.splice(index, 1);
  renderCart();
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("riff-emo-theme", theme);

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

function render() {
  const hash = window.location.hash || "#home";
  const bandId = hash.startsWith("#band/") ? hash.replace("#band/", "") : null;
  const band = bands.find((item) => item.id === bandId);

  app.innerHTML = band ? bandPage(band) : home();
  window.scrollTo({ top: 0, behavior: "auto" });
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

  if (cartButton.contains(event.target)) {
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



