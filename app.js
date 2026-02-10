// ===== Config =====
const qrTarget = "https://linktr.ee/OmlEurope";

const socials = [
  { icon:"fa-brands fa-whatsapp",  label:"WhatsApp",  url:"https://wa.me/31623518022" },
  { icon:"fa-solid fa-location-dot", label:"Google Maps", url:" Van Vredenburgweg 4, 2282SG y Rijswijk – PAISES BAJOS" },
  { icon:"fa-solid fa-globe",    label:"Web",    url:"https://lcreurope.com"  },
  { icon:"fa-brands fa-linkedin-in", label:"LinkedIn",  url:"https://www.linkedin.com/company/omleurope"  },
];

const linksData = [
  {
    title: "Boy Stuijfzand | VENTAS",    url: "https://wa.me/31623518022",icon: "fa-solid fa-user"},
  {title: "WhatsApp Ventas", url: "https://wa.me/31623518022",icon: "fa-brands fa-whatsapp"},
  {title: "omleurope.com", url: "https://omleurope.com/",icon: "fa-solid fa-globe"},
  {title: "Google Maps",url: "https://www.google.com/maps/search/?api=1&query=Van%20Vredenburgweg%204%2C%202282SG%20Rijswijk%2C%20Pa%C3%ADses%20Bajos",icon: "fa-solid fa-location-dot"},
  {title: "Correo Electrónico", url: "mailto:sales@omleurope.com?subject=Consulta%20de%20ventas",icon: "fa-solid fa-envelope"},
];

const shopItems = [
  { title:"Producto - Jengibre",  price:"", img:"https://static.vecteezy.com/system/resources/previews/065/334/734/non_2x/fresh-whole-ginger-root-with-finger-like-rhizomes-png.png", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Yarphone - Curcuma",   price:"", img:"https://mercafreshperu.com/wp-content/uploads/2024/02/Curcuma.webp", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Esparrago", price:"", img:"https://www.herbazest.com/imgs/4/6/6/453075/esparragos.jpg", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Arandano",  price:"", img:"https://www.organiclife.ec/wp-content/uploads/2022/05/organic-blueberry-f.jpeg", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Aguacate",     price:"", img:"https://www.haifa-group.com/sites/default/files/crop/avocado%20cut%20isolated%2044503222_xxl.jpg", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Ajo",    price:"", img:"https://okdiario.com/img/recetas/2017/07/17/ajos-2.jpg", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Mangos",     price:"", img:"https://www.camposol.com/wp-content/uploads/2019/01/mangos.jpg", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Granadas",     price:"", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbompPeCfdBpdeW6Ni7zk33wEiXDz5-I0zQ&s", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Mandarinas",     price:"", img:"https://mercampo.pe/wp-content/uploads/2021/12/AnyConv.com__mandarina-300x300-1.webp", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Uvas",     price:"", img:"https://fundaciondelcorazon.com/images/stories/corazon-facil/impulso-vital/uvas.jpg", url:"https://omleurope.com/nuestros-productos/"},
  { title:"Producto - Cebollas",     price:"", img:"https://www.fructusterrum.com/wp-content/uploads/2020/07/cebolla-roja-1.jpg", url:"https://omleurope.com/nuestros-productos/"},
];

// ===== Render redes =====
const socialsWrap = document.querySelector(".socials");
socials.forEach(s=>{
  const a=document.createElement("a");
  a.href=s.url; a.target="_blank"; a.rel="noopener";
  a.setAttribute('aria-label', s.label);
  a.innerHTML=`<i class="${s.icon}" aria-hidden="true"></i>`;
  socialsWrap.appendChild(a);
});

// ===== Render links =====
const list = document.getElementById("links");
linksData.forEach(item=>{
  const el=document.createElement("div");
  el.className="item";
  el.innerHTML=`
    <span class="logo"><i class="${item.icon}" aria-hidden="true"></i></span>
    <div class="txt"><div class="title">${item.title}</div></div>
    <div class="dots" title="Opciones"><i class="fa-solid fa-ellipsis-vertical"></i></div>
    <a class="link" href="${item.url}" target="_blank" rel="noopener" aria-label="${item.title}"></a>
  `;
  list.appendChild(el);
});

// ===== Render tienda =====
const grid = document.getElementById('shopGrid');
shopItems.forEach(p=>{
  const card=document.createElement('div');
  card.className='product-card';
  card.innerHTML=`
    <img class="product-img" src="${p.img}" alt="${p.title}">
    <div class="product-title">${p.title}</div>
    ${p.price ? `<div class="product-price">${p.price}</div>` : ''}
    <i class="fa-solid fa-ellipsis-vertical product-dots"></i>
    <a class="product-link" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.title}"></a>`;
  grid.appendChild(card);
});

// ===== Tabs (Links / Shop) =====
const segBtns = document.querySelectorAll('.seg-btn');
const indicator = document.querySelector('.seg-indicator');

function setActive(tab){
  segBtns.forEach(b=>b.setAttribute('aria-selected', b===tab ? 'true' : 'false'));
  const idx=[...segBtns].indexOf(tab);
  indicator.style.transform=`translateX(${idx*100}%)`;
  const isShop=tab.dataset.tab==='shop';
  document.getElementById('links').style.display=isShop?'none':'block';
  document.getElementById('shop').style.display=isShop?'block':'none';
}
segBtns.forEach(btn=>{
  btn.addEventListener('click',()=>setActive(btn));
  btn.addEventListener('keydown',e=>{
    if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight') return;
    e.preventDefault();
    const arr=[...segBtns], i=arr.indexOf(btn);
    const next=e.key==='ArrowRight'?arr[(i+1)%arr.length]:arr[(i-1+arr.length)%arr.length];
    next.focus(); setActive(next);
  });
});
setActive(segBtns[0]);

// ===== QR =====
(function makeQR(){
  const el=document.getElementById("qrcode");
  el.innerHTML="";
  const light=getComputedStyle(document.documentElement).getPropertyValue('--page-bg').trim()||"#d9d9d9";
  /* global QRCode */
  new QRCode(el,{text:qrTarget,width:120,height:120,colorDark:"#000000",colorLight:light,correctLevel:QRCode.CorrectLevel.H});
})();

// ===== Piso blanco dinámico =====
function updateWhiteFloor(){
  const floor=document.getElementById('whiteFloor');
  const card=document.querySelector('.card');
  const styles=getComputedStyle(document.documentElement);
  const promoBottom=parseInt(styles.getPropertyValue('--promo-bottom'))||0;
  const promoGradH=parseInt(styles.getPropertyValue('--promo-grad-h'))||180;
  const captionBottom=parseInt(styles.getPropertyValue('--caption-bottom'))||0;
  const cardBottom=card.getBoundingClientRect().bottom;
  const needDynamic=Math.max(0,window.innerHeight-cardBottom)+promoBottom;
  const needMinimum=promoGradH+140+captionBottom+promoBottom;
  floor.style.height=Math.max(needMinimum,needDynamic)+'px';
}
addEventListener('resize',updateWhiteFloor);
addEventListener('scroll',updateWhiteFloor);
document.addEventListener('DOMContentLoaded',updateWhiteFloor);

// ===== Promo bar =====
(function promoInit(){
  const bar=document.getElementById("promoBar");
  const link=document.getElementById("promoLink");
  const close=document.getElementById("promoClose");
  const cap=document.getElementById("promoCaption");
  link.href=qrTarget;
  try{
    const u=new URL(qrTarget);
    link.textContent=(u.host+u.pathname).replace(/\/$/,"");
    cap.textContent="Únete a "+(u.pathname.replace(/\//g,"")||"Yarphoneperu")+" hoy en Linktree";
  }catch{ link.textContent="linktr.ee/you"; }

  function showBar(show){
    document.documentElement.style.setProperty("--promo-bottom", show ? "120px" : "0px");
    bar.classList.toggle("hidden",!show);
    updateWhiteFloor();
  }

  const closed=sessionStorage.getItem("promoClosed")==="1";
  showBar(!closed);
  close.addEventListener("click",()=>{
    sessionStorage.setItem("promoClosed","1");
    showBar(false);
  });
})();
