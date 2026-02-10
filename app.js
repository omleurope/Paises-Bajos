// ===== Config =====
const qrTarget = "https://linktr.ee/OmlEurope";

// Teléfono
const phoneDisplay = "+31 6 87505884";
const phoneWa = "31687505884"; // wa.me SIN "+"

// Dirección / Maps
const mapsQuery = "Van Vredenburgweg 4, 2282SG Rijswijk, Netherlands";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapsQuery);
const mapsEmbed = "https://www.google.com/maps?q=" + encodeURIComponent(mapsQuery) + "&z=16&output=embed";

const socials = [
  { icon: "fa-brands fa-whatsapp",    label: "WhatsApp",    url: `https://wa.me/${phoneWa}` },
  { icon: "fa-solid fa-location-dot", label: "Google Maps", url: mapsUrl },
  { icon: "fa-solid fa-globe",        label: "Web",         url: "https://omleurope.com/" },
  { icon: "fa-brands fa-linkedin-in", label: "LinkedIn",    url: "https://www.linkedin.com/company/omleurope" },
];

const linksData = [
  // ✅ Vladimir SIN número abajo
  {
    title: "Vladimir | VENTAS",
    url: `https://wa.me/${phoneWa}`,
    icon: "fa-solid fa-user",
    // sin sub
  },

  // ✅ WhatsApp Ventas CON número abajo
  {
    title: "WhatsApp Ventas",
    url: `https://wa.me/${phoneWa}`,
    icon: "fa-brands fa-whatsapp",
    sub: phoneDisplay,
  },

  { title: "omleurope.com", url: "https://omleurope.com/", icon: "fa-solid fa-globe" },
  { title: "Google Maps", url: mapsUrl, icon: "fa-solid fa-location-dot" },
  { title: "Correo Electrónico", url: "mailto:vladimir@omleurope.com?subject=Consulta%20de%20ventas", icon: "fa-solid fa-envelope" },

  // ✅ TARJETA MAPA
  {
    type: "map",
    title: "UBICACIÓN",
    url: mapsUrl,
    embed: mapsEmbed,
  },
];

const shopItems = [
  { title: "Producto - Jengibre",  price: "", img: "https://www.ortis.com/media/plant/zingiber-officinale-roscoe.png", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Curcuma",   price: "", img: "https://mercafreshperu.com/wp-content/uploads/2024/02/Curcuma.webp", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Esparrago", price: "", img: "https://www.herbazest.com/imgs/4/6/6/453075/esparragos.jpg", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Arandano",  price: "", img: "https://www.organiclife.ec/wp-content/uploads/2022/05/organic-blueberry-f.jpeg", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Aguacate",  price: "", img: "https://www.haifa-group.com/sites/default/files/crop/avocado%20cut%20isolated%2044503222_xxl.jpg", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Ajo",       price: "", img: "https://okdiario.com/img/recetas/2017/07/17/ajos-2.jpg", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Mangos",    price: "", img: "https://www.camposol.com/wp-content/uploads/2019/01/mangos.jpg", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Granadas",  price: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbompPeCfdBpdeW6Ni7zk33wEiXDz5-I0zQ&s", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Mandarinas",price: "", img: "https://www.joyafruits.com/sistema/data/source/producto/MANDARINA.png", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Uvas",      price: "", img: "https://fundaciondelcorazon.com/images/stories/corazon-facil/impulso-vital/uvas.jpg", url: "https://omleurope.com/nuestros-productos/" },
  { title: "Producto - Cebollas",  price: "", img: "https://www.fructusterrum.com/wp-content/uploads/2020/07/cebolla-roja-1.jpg", url: "https://omleurope.com/nuestros-productos/" },
];

// ===== Render redes =====
const socialsWrap = document.querySelector(".socials");
if (socialsWrap) {
  socialsWrap.innerHTML = "";
  socials.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", s.label);
    a.innerHTML = `<i class="${s.icon}" aria-hidden="true"></i>`;
    socialsWrap.appendChild(a);
  });
}

// ===== Render links =====
const list = document.getElementById("links");
if (list) {
  list.innerHTML = "";

  linksData.forEach((item) => {
    // Tarjeta mapa
    if (item.type === "map") {
      const wrap = document.createElement("div");
      wrap.className = "map-card";
      wrap.innerHTML = `
        <div class="map-frame">
          <iframe
            src="${item.embed}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="${item.title}"
            allowfullscreen
          ></iframe>
        </div>

        <div class="map-bar">
          <span class="map-title">${item.title}</span>
        </div>
      `;
      list.appendChild(wrap);
      return;
    }

    // Link normal
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `
      <span class="logo"><i class="${item.icon}" aria-hidden="true"></i></span>

      <div class="txt">
        <div class="title">${item.title}</div>
        ${item.sub ? `<div class="sub">${item.sub}</div>` : ""}
      </div>

      <div class="dots" title="Opciones"><i class="fa-solid fa-ellipsis-vertical"></i></div>
      <a class="link" href="${item.url}" target="_blank" rel="noopener" aria-label="${item.title}"></a>
    `;
    list.appendChild(el);
  });
}

// ===== Render tienda =====
const grid = document.getElementById("shopGrid");
if (grid) {
  grid.innerHTML = "";
  shopItems.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-top">
        <img class="product-img" src="${p.img}" alt="${p.title}">
      </div>

      <div class="product-meta">
        <div class="product-text">
          <div class="product-title">${p.title}</div>
          ${p.price ? `<div class="product-price">${p.price}</div>` : ""}
        </div>
        <i class="fa-solid fa-ellipsis-vertical product-dots" aria-hidden="true"></i>
      </div>

      <a class="product-link" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.title}"></a>
    `;
    grid.appendChild(card);
  });
}

// ===== Tabs (Links / Shop) =====
const segBtns = document.querySelectorAll(".seg-btn");
const indicator = document.querySelector(".seg-indicator");

function setActive(tab) {
  segBtns.forEach((b) => b.setAttribute("aria-selected", b === tab ? "true" : "false"));
  const idx = [...segBtns].indexOf(tab);
  if (indicator) indicator.style.transform = `translateX(${idx * 100}%)`;

  const isShop = tab.dataset.tab === "shop";
  const links = document.getElementById("links");
  const shop = document.getElementById("shop");
  if (links) links.style.display = isShop ? "none" : "block";
  if (shop) shop.style.display = isShop ? "block" : "none";
}

if (segBtns.length) {
  segBtns.forEach((btn) => {
    btn.addEventListener("click", () => setActive(btn));
    btn.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const arr = [...segBtns];
      const i = arr.indexOf(btn);
      const next =
        e.key === "ArrowRight"
          ? arr[(i + 1) % arr.length]
          : arr[(i - 1 + arr.length) % arr.length];
      next.focus();
      setActive(next);
    });
  });

  setActive(segBtns[0]);
}

// ===== QR =====
(function makeQR() {
  const el = document.getElementById("qrcode");
  if (!el) return;

  el.innerHTML = "";
  const light =
    getComputedStyle(document.documentElement).getPropertyValue("--page-bg").trim() || "#d9d9d9";

  /* global QRCode */
  if (typeof QRCode === "undefined") return;

  new QRCode(el, {
    text: qrTarget,
    width: 120,
    height: 120,
    colorDark: "#000000",
    colorLight: light,
    correctLevel: QRCode.CorrectLevel.H,
  });
})();

// ===== Piso blanco dinámico =====
function updateWhiteFloor() {
  const floor = document.getElementById("whiteFloor");
  const card = document.querySelector(".card");
  if (!floor || !card) return;

  const styles = getComputedStyle(document.documentElement);
  const promoBottom = parseInt(styles.getPropertyValue("--promo-bottom")) || 0;
  const promoGradH = parseInt(styles.getPropertyValue("--promo-grad-h")) || 180;
  const captionBottom = parseInt(styles.getPropertyValue("--caption-bottom")) || 0;

  const cardBottom = card.getBoundingClientRect().bottom;
  const needDynamic = Math.max(0, window.innerHeight - cardBottom) + promoBottom;
  const needMinimum = promoGradH + 140 + captionBottom + promoBottom;

  floor.style.height = Math.max(needMinimum, needDynamic) + "px";
}

addEventListener("resize", updateWhiteFloor);
addEventListener("scroll", updateWhiteFloor);
document.addEventListener("DOMContentLoaded", updateWhiteFloor);

// ===== Promo bar =====
(function promoInit() {
  const bar = document.getElementById("promoBar");
  const link = document.getElementById("promoLink");
  const close = document.getElementById("promoClose");
  const cap = document.getElementById("promoCaption");

  if (!bar || !link || !close || !cap) return;

  link.href = qrTarget;

  try {
    const u = new URL(qrTarget);
    link.textContent = (u.host + u.pathname).replace(/\/$/, "");
    cap.textContent = "Únete a OmlEurope hoy en Linktree";
  } catch {
    link.textContent = "linktr.ee/OmlEurope";
    cap.textContent = "Únete a OmlEurope hoy en Linktree";
  }

  function showBar(show) {
    document.documentElement.style.setProperty("--promo-bottom", show ? "120px" : "0px");
    bar.classList.toggle("hidden", !show);
    updateWhiteFloor();
  }

  const closed = sessionStorage.getItem("promoClosed") === "1";
  showBar(!closed);

  close.addEventListener("click", () => {
    sessionStorage.setItem("promoClosed", "1");
    showBar(false);
  });
})();
