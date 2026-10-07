const KAL_PRODUCTS = [
  {id:'res-01',category:'residencial',tag:'Mais vendido',name:'Tinta Acrílica Premium Fosco',detail:'18 L · Branco Neve',price:189.9,image:'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=85'},
  {id:'res-02',category:'residencial',tag:'',name:'Tinta Acrílica Premium Semibrilho',detail:'18 L · Branco Gelo',price:219.9,image:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=85'},
  {id:'res-03',category:'residencial',tag:'Durabilidade',name:'Tinta para Fachada Protegida',detail:'18 L · Branco',price:249.9,image:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85'},
  {id:'res-04',category:'residencial',tag:'',name:'Esmalte Sintético Brilhante',detail:'3,6 L · Branco',price:89.9,image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85'},
  {id:'res-05',category:'residencial',tag:'',name:'Fundo Preparador de Paredes',detail:'3,6 L · Incolor',price:74.9,image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85'},
  {id:'res-06',category:'residencial',tag:'',name:'Massa Corrida Interior',detail:'25 kg · Branco',price:52.9,image:'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=900&q=85'},
  {id:'res-07',category:'residencial',tag:'',name:'Massa Acrílica Exterior',detail:'25 kg · Branco',price:76.9,image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85'},
  {id:'res-08',category:'residencial',tag:'',name:'Impermeabilizante Flexível',detail:'4 kg · Cinza',price:119.9,image:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85'},
  {id:'res-09',category:'residencial',tag:'',name:'Tinta Piso Alta Resistência',detail:'18 L · Cinza',price:239.9,image:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=85'},
  {id:'res-10',category:'residencial',tag:'',name:'Verniz Acrílico Base Água',detail:'3,6 L · Natural',price:99.9,image:'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-01',category:'automotiva',tag:'Profissional',name:'Tinta PU Automotiva',detail:'3,6 L · Preto',price:289.9,image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-02',category:'automotiva',tag:'',name:'Primer PU Alto Sólidos',detail:'3,6 L · Cinza',price:239.9,image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-03',category:'automotiva',tag:'Mais vendido',name:'Verniz PU Alto Brilho',detail:'4,5 L · Incolor',price:319.9,image:'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-04',category:'automotiva',tag:'',name:'Esmalte Sintético Automotivo',detail:'900 ml · Branco',price:79.9,image:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-05',category:'automotiva',tag:'',name:'Thinner PU Premium',detail:'5 L · Solvente',price:119.9,image:'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-06',category:'automotiva',tag:'',name:'Massa Poliéster para Funilaria',detail:'1 kg · Cinza',price:64.9,image:'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-07',category:'automotiva',tag:'',name:'Catalisador PU',detail:'900 ml · Catalisado',price:89.9,image:'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-08',category:'automotiva',tag:'',name:'Spray Colorgin Uso Geral',detail:'350 ml · Preto',price:29.9,image:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-09',category:'automotiva',tag:'',name:'Polidor Corte Rápido',detail:'1 kg · Profissional',price:84.9,image:'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85'},
  {id:'aut-10',category:'automotiva',tag:'',name:'Cera Líquida Ceramic',detail:'500 ml · Proteção',price:74.9,image:'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=85'},
  {id:'ind-01',category:'industrial',tag:'Alto rendimento',name:'Esmalte Industrial Sintético',detail:'3,6 L · Amarelo',price:159.9,image:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85'},
  {id:'ind-02',category:'industrial',tag:'Resistente',name:'Esmalte Epóxi 2K',detail:'3,6 L · Cinza',price:329.9,image:'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=85'},
  {id:'ind-03',category:'industrial',tag:'',name:'Primer Epóxi Anticorrosivo',detail:'3,6 L · Cinza',price:299.9,image:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85'},
  {id:'ind-04',category:'industrial',tag:'',name:'Tinta Demarcação de Solo',detail:'18 L · Amarelo',price:279.9,image:'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85'},
  {id:'ind-05',category:'industrial',tag:'',name:'Tinta Alta Temperatura',detail:'3,6 L · Preto',price:189.9,image:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85'},
  {id:'ind-06',category:'industrial',tag:'',name:'Revestimento Poliuretano',detail:'18 L · Cinza',price:589.9,image:'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=900&q=85'},
  {id:'ind-07',category:'industrial',tag:'',name:'Fundo Óxido de Ferro',detail:'3,6 L · Vermelho',price:119.9,image:'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=85'},
  {id:'acc-01',category:'acessorios',tag:'',name:'Rolo de Lã',detail:'23 cm · Lã sintética',price:22.9,image:'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=85'},
  {id:'acc-02',category:'acessorios',tag:'',name:'Kit Pincéis Premium',detail:'3 peças · Cerda gris',price:34.9,image:'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=900&q=85'},
  {id:'acc-03',category:'acessorios',tag:'',name:'Fita Crepe Profissional',detail:'48 mm · 40 m',price:18.9,image:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85'}
];

const CART_KEY = 'kal-tintas-cart-v3';
const money = value => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const productById = id => KAL_PRODUCTS.find(product => product.id === id);
const getCart = () => { try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch { return []; } };
const saveCart = cart => localStorage.setItem(CART_KEY, JSON.stringify(cart));
const cartQuantity = cart => cart.reduce((total,item) => total + item.qty, 0);
const cartSubtotal = cart => cart.reduce((total,item) => { const product = productById(item.id); return total + (product ? product.price * item.qty : 0); }, 0);

function toast(message){
  let element = document.querySelector('.toast');
  if(!element){ element = document.createElement('div'); element.className = 'toast'; document.body.appendChild(element); }
  element.textContent = message; element.classList.add('show'); clearTimeout(window.kalToastTimer);
  window.kalToastTimer = setTimeout(() => element.classList.remove('show'), 2200);
}

function syncCart(){
  const cart = getCart();
  document.querySelectorAll('[data-cart-count]').forEach(element => element.textContent = cartQuantity(cart));
  const items = document.querySelector('#cart-items, #drawer-items');
  const total = document.querySelector('#cart-total, #drawer-total');
  if(!items || !total) return;
  if(!cart.length){ items.innerHTML = '<div class="empty">Sua sacola está vazia.<br><a class="inline-link" href="products.html">Escolher produtos</a></div>'; total.textContent = money(0); return; }
  items.innerHTML = cart.map(item => { const product = productById(item.id); return `<div class="cart-item"><img src="${product.image}" alt="${product.name}"/><div><h4>${product.name}</h4><p>${product.detail}</p><div class="qty"><button data-action="decrease" data-id="${product.id}" aria-label="Diminuir">−</button><span>${item.qty}</span><button data-action="increase" data-id="${product.id}" aria-label="Aumentar">+</button></div></div><div class="cart-item-price">${money(product.price * item.qty)}</div></div>`; }).join('');
  total.textContent = money(cartSubtotal(cart));
}

function addToCart(id){
  const cart = getCart(); const line = cart.find(item => item.id === id);
  if(line) line.qty += 1; else cart.push({id,qty:1});
  saveCart(cart); syncCart(); toast('Produto adicionado à sacola');
}

function changeQuantity(id, delta){
  const cart = getCart(); const line = cart.find(item => item.id === id); if(!line) return;
  line.qty += delta; const next = line.qty > 0 ? cart : cart.filter(item => item.id !== id); saveCart(next); syncCart();
  if(document.querySelector('#checkout-lines')) renderCheckout();
}

function openCart(){ document.querySelector('#cart-drawer')?.classList.add('open'); syncCart(); }
function closeCart(){ document.querySelector('#cart-drawer')?.classList.remove('open'); }

function productCard(product){
  return `<article class="product-card"><div class="product-img"><img src="${product.image}" alt="${product.name}" loading="lazy">${product.tag ? `<span class="tag">${product.tag}</span>` : ''}</div><div class="product-info"><div class="product-category">${product.category}</div><h3 class="product-name">${product.name}</h3><div class="product-detail">${product.detail}</div><div class="stock"><i></i>Em estoque na loja</div><div class="product-bottom"><div><div class="price">${money(product.price)}</div><div class="installments">até 3x sem juros</div></div><button class="add" data-action="add" data-id="${product.id}" aria-label="Adicionar ${product.name}">+</button></div></div></article>`;
}

function renderProducts(){
  const grid = document.querySelector('#product-grid'); if(!grid) return;
  const params = new URLSearchParams(location.search); let active = (params.get('category') || 'todos').toLowerCase(); const initialQuery = params.get('q') || '';
  const search = document.querySelector('#global-search'); if(search) search.value = initialQuery;
  const draw = () => { const query = (search?.value || '').trim().toLowerCase(); const filtered = KAL_PRODUCTS.filter(product => (active === 'todos' || product.category === active) && (!query || `${product.name} ${product.detail} ${product.category}`.toLowerCase().includes(query))); grid.innerHTML = filtered.length ? filtered.map(productCard).join('') : '<div class="empty">Não encontramos produtos para esse filtro.</div>'; const count = document.querySelector('#results-count'); if(count) count.textContent = `${filtered.length} produtos encontrados`; document.querySelectorAll('[data-filter]').forEach(button => button.classList.toggle('active',button.dataset.filter === active)); };
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { active = button.dataset.filter.toLowerCase(); draw(); }));
  document.querySelector('#search-submit, [data-search]')?.addEventListener('click', draw); search?.addEventListener('keydown', event => { if(event.key === 'Enter') draw(); }); draw();
}

function renderCheckout(){
  const list = document.querySelector('#checkout-lines'); if(!list) return;
  const cart = getCart(); const subtotal = cartSubtotal(cart); const delivery = document.querySelector('input[name="shipping"]:checked')?.value === 'delivery' ? 18 : 0; const total = subtotal + delivery;
  list.innerHTML = cart.length ? cart.map(item => { const product = productById(item.id); return `<div class="summary-line"><span>${item.qty}× ${product.name}</span><strong>${money(product.price * item.qty)}</strong></div>`; }).join('') : '<div class="empty">Sua sacola está vazia. <a class="inline-link" href="products.html">Voltar aos produtos</a></div>';
  const subtotalElement = document.querySelector('#checkout-subtotal, #subtotal'); const deliveryElement = document.querySelector('#checkout-delivery, #shipping-cost'); const totalElement = document.querySelector('#checkout-total, #total');
  if(subtotalElement) subtotalElement.textContent = money(subtotal); if(deliveryElement) deliveryElement.textContent = delivery ? money(delivery) : 'Grátis'; if(totalElement) totalElement.textContent = money(total);
  document.querySelector('#address-fields')?.classList.toggle('hidden', delivery === 0);
  document.querySelector('#card-fields')?.classList.toggle('hidden', document.querySelector('input[name="payment"]:checked')?.value !== 'card');
}

document.addEventListener('click', event => {
  const target = event.target.closest('[data-action]'); if(!target) return;
  const action = target.dataset.action; if(action === 'add') addToCart(target.dataset.id); if(action === 'increase') changeQuantity(target.dataset.id,1); if(action === 'decrease') changeQuantity(target.dataset.id,-1); if(action === 'open-cart') openCart(); if(action === 'close-cart') closeCart();
});
document.addEventListener('click', event => {
  if(event.target.closest('#open-cart')) openCart();
  if(event.target.closest('#close-cart')) closeCart();
  if(event.target.closest('#finish-order')){
    const cart = getCart(); const name = document.querySelector('#name')?.value.trim(); const phone = document.querySelector('#phone')?.value.trim(); const delivery = document.querySelector('input[name="shipping"]:checked')?.value === 'delivery'; const address = document.querySelector('#address')?.value.trim();
    if(!cart.length){ toast('Adicione produtos antes de finalizar'); return; }
    if(!name || !phone || (delivery && !address)){ toast(delivery ? 'Preencha nome, WhatsApp e endereço' : 'Preencha nome e WhatsApp'); return; }
    const total = document.querySelector('#total')?.textContent || document.querySelector('#checkout-total')?.textContent || '';
    const order = `Olá, sou ${name}. Gostaria de confirmar meu pedido na KAL Tintas. Total: ${total}.`;
    saveCart([]); syncCart(); event.target.textContent = 'Pedido preparado'; event.target.disabled = true; toast('Pedido preparado para confirmação');
    setTimeout(() => { window.location.href = `https://wa.me/553538217450?text=${encodeURIComponent(order)}`; }, 450);
  }
});
document.addEventListener('click', event => { if(event.target.matches('#cart-drawer')) closeCart(); });
document.addEventListener('change', event => { if(event.target.matches('input[name="shipping"], input[name="payment"]')) renderCheckout(); });
document.addEventListener('DOMContentLoaded', () => { syncCart(); renderProducts(); renderCheckout(); });

document.addEventListener('submit', event => {
  if(!event.target.matches('#checkout-form')) return; event.preventDefault();
  const cart = getCart(); if(!cart.length){ toast('Adicione produtos antes de finalizar'); return; }
  if(!event.target.reportValidity()) return;
  const form = new FormData(event.target); const order = `Olá, sou ${form.get('name')}. Gostaria de confirmar meu pedido na KAL Tintas. Total: ${document.querySelector('#checkout-total')?.textContent || ''}.`;
  saveCart([]); syncCart(); event.target.innerHTML = `<div class="empty"><h3>Pedido recebido!</h3><p>Obrigado, ${form.get('name')}. Nossa equipe vai confirmar os detalhes pelo WhatsApp.</p><a class="btn btn-dark" href="https://wa.me/553538217450?text=${encodeURIComponent(order)}">Continuar no WhatsApp</a></div>`;
});

