/*
 FACE DISTRICT — CONFIG
 1) WhatsApp: nomor internasional tanpa tanda +, spasi, atau strip. Contoh Malaysia: 60123456789
 2) Discord: gunakan link invite Discord kamu.
 3) Edit nama, harga, deskripsi, dan image produk di array products.
*/
const whatsappNumber = ""; // contoh: "60123456789"
const discordInvite = ""; // contoh: "https://discord.gg/INVITEKAMU"
const products = [
 {id:"FD-001",name:"helface",gender:"male",price:"RP 350.000",status:"TERSEDIA",description:"Look tegas dengan karakter street-luxury untuk roleplay yang menonjol.",image:"assets/faces/FD-001.png"},
 {id:"FD-002",name:"helface",gender:"male",price:"RP 350.000",status:"TERSEDIA",description:"Style elegan dengan identitas visual yang clean dan modern.",image:"assets/faces/FD-002.png"},
 {id:"FD-003",name:"helface",gender:"male",price:"RP 350.000",status:"TERSEDIA",description:"Nuansa urban untuk karakter dengan cerita kuat.",image:"assets/faces/FD-003.png"},
 {id:"FD-004",name:"helface",gender:"male",price:"RP 350.000",status:"TERSEDIA",description:"Tampilan gelap dan refined untuk karakter berkelas.",image:"assets/faces/FD-004.png"},
 {id:"FD-005",name:"helface",gender:"male",price:"RP 350.000",status:"TERSEDIA",description:"Pilihan premium dengan look berkarakter dan berani.",image:"assets/faces/FD-005.png"},
 {id:"FD-006",name:"helface",gender:"male",price:"RP 350.000",status:"TERSEDIA",description:"Style premium untuk identitas karakter yang khas.",image:"assets/faces/FD-006.png"}
];
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let filter="all";
function render(){const list=products.filter(p=>filter==="all"||p.gender===filter);$("#count").textContent=String(products.length).padStart(2,"0");$("#products").innerHTML=list.map(p=>`<article class="card"><div class="preview ${p.gender}"><span class="chip">${esc(p.status)}</span><div class="bust"></div>${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)} preview" loading="lazy" onerror="this.style.display='none'">`:""}<button class="zoom" data-detail="${esc(p.id)}" aria-label="Detail ${esc(p.name)}">↗</button></div><div class="info"><div class="meta"><span>${esc(p.id)}</span><span>${p.gender.toUpperCase()}</span></div><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="bottom"><span class="price">${esc(p.price)}</span><button class="detail" data-detail="${esc(p.id)}">DETAIL PRODUK ↗</button></div></div></article>`).join("");}
function orderLink(p){const msg=encodeURIComponent(`Halo Face District, saya tertarik dengan ${p.name} (${p.id}) — harga ${p.price}. Boleh info detail dan ketersediaan?`);return whatsappNumber?`https://wa.me/${whatsappNumber}?text=${msg}`:"#contact";}
function show(id){const p=products.find(x=>x.id===id);if(!p)return;$("#modalBody").innerHTML=`<div class="preview ${p.gender}" style="height:220px">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)} preview">`:'<div class="bust"></div>'}</div><p class="eyebrow">${esc(p.id)} — ${p.gender.toUpperCase()} / ${esc(p.status)}</p><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><p><strong class="price">${esc(p.price)}</strong></p><p>Hubungi admin untuk memastikan ketersediaan, format file, kompatibilitas, dan ketentuan penggunaan.</p><a class="goldbtn" href="${orderLink(p)}" ${whatsappNumber?'target="_blank" rel="noopener"':""}>TANYAKAN PRODUK INI ↗</a>`;$("#modal").showModal();}
document.addEventListener("click",e=>{const f=e.target.closest("[data-filter]");if(f){filter=f.dataset.filter;$$(".filter").forEach(b=>b.classList.toggle("active",b===f));render();}const d=e.target.closest("[data-detail]");if(d)show(d.dataset.detail);});
$("#close").addEventListener("click",()=>$("#modal").close());$("#modal").addEventListener("click",e=>{if(e.target===$("#modal"))$("#modal").close();});
$("#year").textContent=new Date().getFullYear();
$("#menuToggle").addEventListener("click",()=>$("#nav").classList.toggle("open"));$("#nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));
$("#wa").href=whatsappNumber?`https://wa.me/${whatsappNumber}`:"https://wa.me/";
$("#wa").addEventListener("click",e=>{if(!whatsappNumber){e.preventDefault();alert("Tambahkan nomor WhatsApp di bagian konfigurasi atas script.js.");}});
$("#discord").href=discordInvite||"#contact";$("#discord").addEventListener("click",e=>{if(!discordInvite){e.preventDefault();alert("Tambahkan link invite Discord di bagian konfigurasi atas script.js.");}});
render();
