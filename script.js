/* ================================================
   BILAS.IN — script.js
   ================================================ */

/* ---------- Typewriter "Coming Soon" ---------- */
(function () {
  const el     = document.getElementById('typewriterText');
  if (!el) return;
  const text   = 'Coming Soon';
  let   i      = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 100);
    }
  }
  setTimeout(type, 600); // mulai setelah 600ms
})();

/* ---------- Nav scroll ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ---------- Mobile menu ---------- */
const burger     = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Fabric selector ---------- */
const fabrics = [
  {
    name: 'Sutra & Satin',
    title: 'Lembut pada serat, tegas pada noda.',
    desc: 'Sutra kehilangan kilaunya jika diperlakukan seperti katun biasa. Kami merawatnya dengan siklus paling lembut yang ada.',
    steps: [
      'Cuci tangan atau siklus delicate dengan deterjen pH-netral khusus protein serat',
      'Air suhu ruang — panas adalah musuh utama serat sutra',
      'Dikeringkan flat-lay, tidak pernah digantung basah atau masuk dryer',
      'Setrika uap suhu rendah dengan kain pelapis',
    ],
  },
  {
    name: 'Wol & Cashmere',
    title: 'Menjaga bentuk, mencegah menyusut.',
    desc: 'Satu kesalahan suhu bisa membuat sweater cashmere menyusut dua ukuran. Di sini, hal itu tidak akan terjadi.',
    steps: [
      'Inspeksi pilling & struktur rajutan sebelum perawatan',
      'Dry clean lembut atau hand-wash dingin dengan wool-safe detergent',
      'Reshaping manual saat setengah kering agar bentuk kembali presisi',
      'Disimpan terlipat dengan tissue, bukan digantung',
    ],
  },
  {
    name: 'Linen',
    title: 'Rapi tanpa kehilangan karakter.',
    desc: 'Keindahan linen ada pada teksturnya yang hidup. Kami menyetrika untuk merapikan, bukan mematikan karakternya.',
    steps: [
      'Cuci terpisah air dingin untuk menjaga warna natural',
      'Pengeringan angin sebagian sebelum finishing',
      'Setrika uap saat serat masih lembap — kunci hasil linen sempurna',
      'Digantung di hanger kayu lebar agar bahu tidak berbekas',
    ],
  },
  {
    name: 'Denim Raw',
    title: 'Memudar dengan indah, bukan rusak.',
    desc: 'Pemilik raw denim tahu: fade adalah investasi bertahun-tahun. Kami mencuci tanpa menghapus cerita di setiap lipatannya.',
    steps: [
      'Konsultasi dulu — sebagian raw denim lebih baik tidak sering dicuci',
      'Rendam dingin terbalik (inside-out) tanpa diaduk mesin',
      'Tanpa dryer, hanya kering angin dengan posisi menggantung lurus',
      'Tidak disetrika kecuali diminta, menjaga crease natural',
    ],
  },
  {
    name: 'Batik Tulis',
    title: 'Warisan yang dirawat seperti seharusnya.',
    desc: 'Pewarna alami batik tulis sangat sensitif. Kami merawatnya dengan cara yang dihormati para perajinnya.',
    steps: [
      'Uji kelunturan warna di area tersembunyi sebelum proses apa pun',
      'Cuci tangan dengan lerak atau deterjen khusus batik',
      'Diangin-anginkan di tempat teduh — sinar matahari langsung memudarkan warna',
      'Setrika suhu rendah dari sisi dalam dengan kain pelapis',
    ],
  },
  {
    name: 'Gaun & Jas',
    title: 'Siap dipakai di momen penting berikutnya.',
    desc: 'Struktur padding, lapisan interfacing, payet dan aplikasi — semuanya butuh penanganan yang tidak bisa diwakili mesin.',
    steps: [
      'Dokumentasi detail aplikasi (payet, kancing, bordir) sebelum proses',
      'Dry clean profesional dengan perlindungan area aplikasi',
      'Steam finishing manual untuk mengembalikan struktur bahu & lapel',
      'Dikemas dalam garment bag breathable, siap langsung dipakai',
    ],
  },
];

const fabricImages = [
  'aset/satin fabric.jpg',
  'aset/woll.jpg',
  'aset/kemeja gantung (2).jpg',
  'aset/jeans.jpg',
  'aset/batik tulis.png',
  'aset/suits (1).jpg',
];

const tabsEl   = document.getElementById('fabricTabs');
const panelEl  = document.getElementById('fabricPanel');
const checkSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>`;

function renderFabric(i) {
  tabsEl.innerHTML = fabrics.map((f, j) =>
    `<button class="fabric-tab ${j === i ? 'active' : ''}" role="tab" aria-selected="${j === i}" onclick="renderFabric(${j})">${f.name}</button>`
  ).join('');
  const f = fabrics[i];
  panelEl.innerHTML = `
    <div class="fabric-panel">
      <img src="${fabricImages[i]}" alt="${f.name}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius);">
      <div class="fabric-detail">
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
        <ul class="fabric-steps">${f.steps.map(s => `<li>${checkSvg}<span>${s}</span></li>`).join('')}</ul>
      </div>
    </div>`;
}
renderFabric(0);

/* ---------- Estimator ---------- */
const items = [
  { name: 'Kemeja premium',         price: 45000  },
  { name: 'Blazer / Jas',           price: 120000 },
  { name: 'Gaun pesta',             price: 180000 },
  { name: 'Sweater wol / cashmere', price: 95000  },
  { name: 'Batik tulis',            price: 110000 },
  { name: 'Sepatu premium',         price: 150000 },
];
let curItem = 0, qty = 1, mult = 1;

const itemChips = document.getElementById('itemChips');
itemChips.innerHTML = items.map((it, i) =>
  `<button class="chip ${i === 0 ? 'active' : ''}" data-i="${i}">${it.name}</button>`
).join('');

itemChips.addEventListener('click', e => {
  const b = e.target.closest('.chip');
  if (!b) return;
  curItem = +b.dataset.i;
  itemChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  b.classList.add('active');
  updateEstimate();
});

document.getElementById('speedChips').addEventListener('click', e => {
  const b = e.target.closest('.chip');
  if (!b) return;
  mult = +b.dataset.mult;
  b.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  b.classList.add('active');
  updateEstimate();
});

document.getElementById('qtyMinus').addEventListener('click', () => { if (qty > 1)  { qty--; updateEstimate(); } });
document.getElementById('qtyPlus').addEventListener('click',  () => { if (qty < 20) { qty++; updateEstimate(); } });

function updateEstimate() {
  const it    = items[curItem];
  const total = it.price * qty * mult;
  document.getElementById('qtyVal').textContent   = qty;
  document.getElementById('estPrice').textContent = 'Rp ' + total.toLocaleString('id-ID');
  document.getElementById('estDesc').textContent  =
    `${qty} ${it.name.toLowerCase()} · layanan ${mult > 1 ? 'express' : 'reguler'}`;
  const msg = encodeURIComponent(
    `Halo Bilas.in, saya ingin konsultasi perawatan untuk ${qty} ${it.name.toLowerCase()} ` +
    `(${mult > 1 ? 'express' : 'reguler'}). Estimasi dari website: Rp ${total.toLocaleString('id-ID')}.`
  );
  document.getElementById('estCta').href = `https://wa.me/6281234567890?text=${msg}`;
}
updateEstimate();

/* ---------- Modal ---------- */
const pForm = document.getElementById('pickupForm');
const modal  = document.getElementById('thankYouModal');

function openModal(name) {
  document.getElementById('modalName').textContent = name;
  const scrollY = window.scrollY;
  modal._scrollY = scrollY;
  document.body.style.top = `-${scrollY}px`;
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
  modal.classList.add('open');
}

function closeModal() {
  const scrollY = modal._scrollY || 0;
  document.documentElement.classList.remove('modal-open');
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  modal.classList.remove('open');
  window.scrollTo({ top: scrollY, behavior: 'instant' });
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- Privacy Policy Modal ---------- */
const privacyModal = document.getElementById('privacyModal');

document.getElementById('openPrivacy').addEventListener('click', () => {
  privacyModal.classList.add('open');
});
document.getElementById('closePrivacy').addEventListener('click', () => {
  privacyModal.classList.remove('open');
  document.getElementById('fPrivacy').checked = true;
  document.getElementById('fPrivacyField').classList.remove('invalid');
});
privacyModal.addEventListener('click', e => {
  if (e.target === privacyModal) privacyModal.classList.remove('open');
});

/* ---------- Pickup form ---------- */
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbznfBR0qWXLBqUYDsJ2itdPeKj9lHCOTuGsa8PNlXNt2i8cfk4LRIn-6JZ1vvaokGeK/exec';

pForm.addEventListener('submit', e => {
  e.preventDefault();
  const nama      = document.getElementById('fNama');
  const instagram = document.getElementById('fInstagram');
  const paket     = document.getElementById('fPaket');
  const waktu     = document.getElementById('fWaktu');
  let ok = true;
  const check = (el, valid) => {
    el.closest('.f-field').classList.toggle('invalid', !valid);
    if (!valid) ok = false;
  };
  const privacy   = document.getElementById('fPrivacy');
  check(nama,      nama.value.trim().length >= 2);
  check(instagram, instagram.value.trim().length >= 2);
  check(paket,     paket.value !== '');
  // validasi checkbox privacy
  const privacyField = document.getElementById('fPrivacyField');
  if (!privacy.checked) {
    privacyField.classList.add('invalid');
    ok = false;
  } else {
    privacyField.classList.remove('invalid');
  }
  if (!ok) return;

  const payload = {
    nama:      nama.value.trim(),
    instagram: instagram.value.trim(),
    paket:     paket.value,
    waktu:     waktu.value
  };

  fetch(SHEET_URL, {
    method:  'POST',
    mode:    'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload)
  }).catch(() => {});

  const msg = encodeURIComponent(
    'PENDAFTARAN BERLANGGANAN (via website)\n' +
    'Nama: '        + payload.nama      + '\n' +
    'Instagram: '   + payload.instagram + '\n' +
    'Paket: '       + payload.paket     + '\n' +
    'Penjemputan: ' + payload.waktu
  );
  window.open('https://wa.me/6281234567890?text=' + msg, '_blank', 'noopener');

  openModal(nama.value.trim());
  pForm.reset();
});

pForm.querySelectorAll('input, select').forEach(el =>
  el.addEventListener('input', () => el.closest('.f-field').classList.remove('invalid'))
);

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

/* ---------- Count-up animation ---------- */
function countUp(el, target, suffix, duration) {
  const step      = 16;
  const steps     = duration / step;
  let   current   = 0;
  const increment = target / steps;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, step);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    statsObserver.unobserve(entry.target);
    entry.target.querySelectorAll('[data-count]').forEach(el => {
      const raw    = el.dataset.count;
      const suffix = el.dataset.suffix || '';
      if (raw.includes('/')) {
        el.style.opacity = '0';
        setTimeout(() => {
          el.textContent      = raw + suffix;
          el.style.transition = 'opacity .4s ease';
          el.style.opacity    = '1';
        }, 150);
      } else {
        el.textContent = '0' + suffix;
        countUp(el, parseFloat(raw), suffix, 1200);
      }
    });
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);
