// Carousel
(function(){
  const slides = document.querySelector('.slides');
  const total = document.querySelectorAll('.slide').length;
  let idx = 0;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  function show(i){
    idx = (i + total) % total;
    slides.style.transform = `translateX(${ -idx * 100 }%)`;
  }

  prev.addEventListener('click', ()=>show(idx-1));
  next.addEventListener('click', ()=>show(idx+1));

  setInterval(()=>show(idx+1),5000);
})();

// Products
const products = [
  {title:'Spartan Helmet',price:'Rp 480.000.000',img:'https://w7.pngwing.com/pngs/492/828/png-transparent-leonidas-i-spartan-warrior-helmet-film-knight-helmet-sports-equipment-300-spartans-300-thumbnail.png'},
  {title:'Airsoft Helmet',price:'Rp 200.000',img:'https://img.lazcdn.com/g/p/66848aced7ccc068ae925b3623a74bed.jpg_720x720q80.jpg'},
  {title:'K6 S',price:'$299',img:'https://images.unsplash.com/photo-1526178619770-41f1b3b8f703?auto=format&fit=crop&w=800&q=60'},
  {title:'AX9',price:'$259',img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60'},
  {title:'Tourmodular',price:'$349',img:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60'},
  {title:'Visor Iridium',price:'$146',img:'https://images.unsplash.com/photo-1532634896-26909d0d4f14?auto=format&fit=crop&w=800&q=60'},
];

const grid = document.getElementById('products');
products.forEach(p=>{
  const el = document.createElement('article');
  el.className='card';
  el.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h4>${p.title}</h4>
    <div style="flex:1"></div>
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div class="price">${p.price}</div>
      <button class="btn">Add</button>
    </div>
  `;
  grid.appendChild(el);
});
