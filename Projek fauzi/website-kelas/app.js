/* ============================================================
   app.js — Website Kelas XII Axioo 
   ============================================================ */

// ─── DATA SISWA ──────────────────────────────────────────────
const dataSiswa = [
  { no:1,  nama:"Ahmad Fatul",              kataKata:"Dunia tidak akan berubah hanya karena kau mengubah dirimu sendiri", gender:"L", foto:"foto/AHMAD FATHUL.jpg" },
  { no:2,  nama:"Ahmad Ramdhani",           kataKata:"", gender:"L", foto:"foto/AHMAD RAMDHANI.jpg" },
  { no:3,  nama:"Akhmad Abizar",            kataKata:"Jangan menyerah, hari yang sulit bukan berarti hidup yang buruk. Semua akan ada hasilnya pada waktunya", gender:"L", foto:"foto/AHMAD ABIZAR.jpg" },
  { no:4,  nama:"Alip Rizky",               kataKata:"Kalo mimpinya mahal sholatnya jangan di timggal", gender:"L", foto:"foto/ALIF R.jpg" },
  { no:5,  nama:"Azkal Azkia",              kataKata:"gusti allah boten sare ", gender:"L", foto:"foto/AZKAL.jpg" },
  { no:6,  nama:"Destian Ezhar",            kataKata:"mungkin kita sampai, mungkin saja tidak, tugas kita hanyalah berjalan", gender:"L", foto:"foto/Destian Ezar Fahlevy.jpg" },
  { no:7,  nama:"Fakeeh Aziela",            kataKata:"", gender:"L", foto:"foto/FAKEEH AZIELA.jpg" },
  { no:8,  nama:"Fauzi Dwifajar",           kataKata:"Stay Tuned", gender:"L", foto:"" },
  { no:9,  nama:"Fikri Syahruly",           kataKata:"saat berada di puncak , ingatlah bahwa kakimu pernah di bawah . jangan lupa pada Meraka yang merangkul saat kamu bukan siapa siapa", gender:"L", foto:"foto/Fikrih Syahrully.jpg" },
  { no:10, nama:"Hanif Nektar",             kataKata:"Bukan tentang berapa lama kita bersama, tapi seberapa berarti kita pernah ada.", gender:"L", foto:"foto/Hanif Nektarnaza Adiva.jpg" },
  { no:11, nama:"Ibnu Shaleh",              kataKata:"", gender:"L", foto:"foto/IBNU SHOLEH.jpg" },
  { no:12, nama:"Ibnu Shirozan",            kataKata:"Jangan takut gagal, karena kegagalan adalah bagian dari proses belajar", gender:"L", foto:"foto/IBNU SHIROZAN.jpg" },
  { no:13, nama:"Lukman Hakim",             kataKata:"Sungguh dunia itu sebenarnya mudah, hanya saja pikiranmu yang membuatnya rumit", gender:"L", foto:"foto/LUKMAN H.jpg" },
  { no:14, nama:"Mohammad Nur Sulthon",     kataKata:"kegagalan bukan lah akhir dari segalanya, tapi awal dari cara bagaimana caramu berdiri lagi", gender:"L", foto:"foto/Mohammad Nur Sulthon Putra Marzan.jpg" },
  { no:15, nama:"Muhamad Cipta Cahya",      kataKata:"", gender:"L", foto:"foto/M. CIPTA.jpg" },
  { no:16, nama:"Muhamad Ibrahim",          kataKata:"", gender:"L", foto:"foto/M. IBRAHIM.jpg" },
  { no:17, nama:"Muhamad Parhan",           kataKata:"", gender:"L", foto:"foto/M. PARHAN.jpg" },
  { no:18, nama:"Muhamad Revy",             kataKata:"Setelah ini, nama kita mungkin tidak lagi ada di daftar kelas yang sama, tapi kita pernah jadi bagian dari cerita yang sama ", gender:"L", foto:"foto/M. REVY.jpg" },
  { no:19, nama:"Muhamad Sa'u Fahrizal",    kataKata:"", gender:"L", foto:"foto/Muhamad Sa'u Fahrizal.jpg" },
  { no:20, nama:"Muhammad Aria",            kataKata:"berhasil atau gagal, proses ini akan tetap berjalan, tidak ada kata menyerah sebelum impian itu tercapai#ariamodemalam", gender:"L", foto:"foto/M. ARIA.jpg" },
  { no:21, nama:"Muhammad Ilmi",            kataKata:"tidak ada habisnya jika semuanya terus dipikirin, jalani saja soal sulit atau mudahnya biar tuhan yang menentukan", gender:"L", foto:"foto/Ilmi.jpeg" },
  { no:22, nama:"Rabbani Ubaid",            kataKata:"", gender:"L", foto:"foto/Rabbani Ubaid.jpg" },
  { no:23, nama:"Rafael Akbar",             kataKata:"", gender:"L", foto:"" },
  { no:24, nama:"Satria Dwi Putra",         kataKata:"", gender:"L", foto:"foto/SATRIA DWI PUTRA.jpg" },
  { no:25, nama:"Satria Wijaya",            kataKata:"bukan saya yang mengejar uang, tapi uang yang mengejar saya", gender:"L", foto:"foto/SATRIA WIJAYA.jpg" },
  { no:26, nama:"Surya Sapriyo",            kataKata:"", gender:"L", foto:"foto/SURYA S.jpg" },
  { no:27, nama:"Wildan Ahmad Fauzan",      kataKata:"Cintai Jantungmu~~ Nonton Miawaug Setiap Hari ", gender:"L", foto:"foto/WILDAN.jpg" },
  { no:28, nama:"Yasir Mauludin",           kataKata:"", gender:"L", foto:"foto/yasir mauludin.jpeg" },
  { no:29, nama:"Yusif Syaiful Milad",      kataKata:"", gender:"L", foto:"foto/YUSIF.jpg" }
  ,
];
// ─── DATA GURU ──────────────────────────────────────────────
const dataGuru = [
  { no:1,  nama:"Oky Setiawan, S.T.",               mapel:"Keamanan Jaringan & ASJ & Kaprog TJKT",                   gender:"L", foto:"foto/Pa Okky.jpeg" },
  { no:2,  nama:"Sri Ratna Istiqomah, S.Pd.I.",     mapel:"Pemrograman Jaringan (Wali Kelas)",          gender:"P", foto:"foto/bu sri.jpeg" },
  { no:3,  nama:"Irvan Azizy, S.Kom.",              mapel:"Teknologi Jaringan Komputer & Nirkabel",     gender:"L", foto:"foto/Pa irvan.jpeg" },
  { no:5,  nama:"Ayu Rengganie, S.Pd.",             mapel:"Bahasa Indonesia",                           gender:"P", foto:"foto/guru indonesia.jpeg" },
  { no:6,  nama:"Magfiroh, M.Pd.",                  mapel:"Matematika",                                 gender:"P", foto:"foto/foto guru mtk.jpeg" },
  { no:7,  nama:"Siti Nurhayati, M.Pd.",            mapel:"Bahasa Inggris",                             gender:"P", foto:"foto/guru inggris.jpeg" },
  { no:8,  nama:"Hari Apriyanto, S.E.",             mapel:"KIK",                                        gender:"L", foto:"foto/Pak hari.jpeg" },
  { no:9,  nama:"Johanudin, S.Pd.",                 mapel:"Bimbingan Konseling (BK)",                   gender:"L", foto:"" },
  { no:10, nama:"Selma Salsabila, S.Hum.",          mapel:"Bahasa Jepang",                              gender:"P", foto:"foto/guru jepang.jpeg" },
  { no:11, nama:"Nuruddin, S.Pd.I.",                mapel:"KPS",                                        gender:"L", foto:"" },
  { no:12, nama:"Imas Gandasari, S.E.I.",           mapel:"Pendidikan Agama & Budi Pekerti (PABP)",     gender:"P", foto:"foto/guru PABP.jpeg" },
  { no:13, nama:"Neneng Nureani, S.Sos.",           mapel:"PPKN",                                       gender:"P", foto:"" },
  { no:14, nama:"Satrio Wicaksono, S.Kom.",         mapel:"PIC TJKT",                                   gender:"L", foto:"foto/pa satrio.jpeg" },
  { no:15, nama:"Madiki, S.Kom",                    mapel:"Konfigurasi dan Pengelolaan jaringan",       gender:"L", foto:"" },
];
const Guru = dataGuru;

// ─── DATA JADWAL ─────────────────────────────────────────────
const warna = {
  "Matematika":                                "#6366f1",
  "BK":                                        "#f59e0b",
  "Bahasa Jepang ":                            "#10b981",
  "KPS":                                       "#ec4899",
  "Bahasa Indonesia":                          "#3b82f6",
  "Bahasa Inggris":                            "#8b5cf6",
  "Pemrograman Jaringan":                      "#f97316",
  "Teknologi Jaringan Komputer dan Nirkabel":  "#14b8a6",
  "Keamanan Jaringan":                         "#ef4444",
  "Konfigurasi dan Pengelolaan Jaringan":      "#84cc16",
  "PKn":                                       "#06b6d4",
  "Pendidikan Agama":                          "#a855f7",
  "Administrasi Sistem Jaringan":              "#22c55e",
};

const dataJadwal = {
  senin: [
    { waktu:"07.00 – 07.40", mapel:"Upacara Bendera",        guru:"Seluruh Guru", istirahat: false },
    { waktu:"07.40 – 08.20", mapel:"BK",             guru:"Bpk. Johanudin.S.Pd." },
    { waktu:"08.20 – 09.00", mapel:"Keamanan Jaringan",             guru:"Bpk. Oky Setiawan.S.T." },
    { waktu:"09.00 – 09.40", mapel:"Keamanan Jaringan",                 guru:"Bpk. Oky Setiawan.S.T." },
    { waktu:"09.40 – 10.10", mapel:"Istirahat I",            istirahat: true },
    { waktu:"10.10 – 10.50", mapel:"Keamanan Jaringan",                 guru:"Bpk. Oky Setiawan.S.T." },
    { waktu:"10.50 – 11.30", mapel:"Keamanan Jaringan",                  guru:"Bpk. Oky Setiawan.S.T." },
    { waktu:"11.30 – 12.10", mapel:"Istirahat II Sholat", istirahat: true },                  
    { waktu:"12.10– 12.40", mapel:"Teknologi Jaringan Komputer dan Nirkabe",  guru:"Bpk. Irvan Azizy. S.Kom." },
    { waktu:"12.40 – 13.20", mapel:"Teknologi Jaringan Komputer dan Nirkabe",       guru:"Bpk;. Irvan Azizy. S.Kom." },
    { waktu:"13.20 – 14.00", mapel:"Teknologi Jaringan Komputer dan Nirkabe",       guru:"Bpk. Irvan Azizy. S.Kom." },
    { waktu:"14.00– 14.40", mapel:"Teknologi Jaringan Komputer dan Nirkabe",       guru:"Bpk. Irvan Azizy. S.Kom." },
  ],
  selasa: [
    { waktu:"07.00 – 07.40", mapel:"Bahasa Indonesia",                guru:"Ibu Ayu Rengganie. S.Pd." },
    { waktu:"07.40 – 08.20", mapel:"Bahasa Indoensia",                guru:"Ibu Ayu Rengganie. S.Pd." },
    { waktu:"08.20 – 09.00", mapel:"Bahasa Indoensia",         guru:"Ibu Ayu Rengganie. S.Pd." },
    { waktu:"09.00 – 09.40", mapel:"Matematika",         guru:"Ibu Magfiroh. M.Pd." },
    { waktu:"09.40 – 10.10", mapel:"Istirahat I",            istirahat: true },
    { waktu:"10.10 – 10.50", mapel:"Matematika",                guru:"Ibu Magfiroh. M.Pd." },
    { waktu:"10.50 – 11.30", mapel:"Matematika",                guru:"Ibu Magfiroh. M.Pd." },
    { waktu:"11.30 – 12.10", mapel:"Bahasa Jepang",             guru:"Ibu Selma Salsabila. S.Hum." },
    { waktu:"12.10– 12.40", mapel:"Istirahat II & Sholat",  istirahat: true },
    { waktu:"12.40 – 13.20", mapel:"Bahasa Jepang",                    guru:"Ibu Selma Salsabila. S.Hum." },
    { waktu:"13.20 – 14.00", mapel:"KIK",                     guru:"Bpk Hari Apriyanto. S.E." },
    { waktu:"14.00– 14.40", mapel:"KIK",       guru:"Bpk Hari Apriyanto. S.E." },
  ],
  rabu: [
    { waktu:"07.00 – 07.40", mapel:"Bahasa Inggris",                guru:"Ibu Siti Nurhayati, M.Pd." },
    { waktu:"07.40 – 08.20", mapel:"Bahasa Inggris",                guru:"Ibu Siti Nurhayati, M.Pd." },
    { waktu:"08.20 – 09.00", mapel:"KPS",         guru:"Bpk. Nuruddin, S.Pd.I," },
    { waktu:"09.00 – 09.40", mapel:"KPS",         guru:"Bpk. Nuruddin, S.Pd.I," },
    { waktu:"09.40 – 10.10", mapel:"Istirahat I",            istirahat: true },
    { waktu:"10.10 – 10.50", mapel:"Pemrograman Jaringan",          guru:"Ibu Sri Ratna Istiqomah.S.Pd,I." },
    { waktu:"10.50 – 11.30", mapel:"Pemrograman Jaringan",          guru:"Ibu Sri Ratna Istiqomah.S.Pd,I." },
    { waktu:"11.30 – 12.10", mapel:"Konfigurasi dan Pengelolaan Jaringan",             guru:"Bpk. Madiki, S.Kom" },
    { waktu:"12.10– 12.40", mapel:"Istirahat II & Sholat",  istirahat: true },
    { waktu:"12.40 – 13.20", mapel:"Konfigurasi dan Pengelolaan Jaringan",                    guru:"Bpk. Madiki, S.Kom" },
    { waktu:"13.20 – 14.00", mapel:"Konfigurasi dan Pengelolaan Jaringan",                     guru:"Bpk. Madiki, S.Kom" },
    { waktu:"14.00– 14.40", mapel:"Konfigurasi dan Pengelolaan jaringan",       guru:"Bpk. Madiki, S.Kom" },
  ],
  kamis: [
    { waktu:"07.00 – 07.40", mapel:"PABP",                guru:"Ibu Imas Gandasari, S.E.I" },
    { waktu:"07.40 – 08.20", mapel:"PABP",                guru:"Ibu Imas Gandasari, S.E.I" },
    { waktu:"08.20 – 09.00", mapel:"PABP",         guru:"Ibu Imas Gandasari, S.E.I" },
    { waktu:"09.00 – 09.40", mapel:"Administrasi Sistem Jaringan",         guru:"Bpk. Oky Setiawan, S.T." },
    { waktu:"09.40 – 10.10", mapel:"Istirahat I",            istirahat: true },
    { waktu:"10.10 – 10.50", mapel:"Administrasi Sistem Jaringan",          guru:"Bpk. Oky Setiawan, S.T." },
    { waktu:"10.50 – 11.30", mapel:"Administrasi Sistem Jaringan",          guru:"Bpk. Oky Setiawan, S.T." },
    { waktu:"11.30 – 12.10", mapel:"PPKN",             guru:"Ibu Neneng Nureani, S.Sos." },
    { waktu:"12.10– 12.40", mapel:"Istirahat II & Sholat",  istirahat: true },
    { waktu:"12.40 – 13.20", mapel:"PPKN",                    guru:"Ibu Neneng Nureani, S.Sos." },
   { waktu:"13.20 – 14.00", mapel:"Bahasa Ingrri",                     guru:"Ibu Siti Nurhayati, M.Pd." },
    { waktu:"14.00– 14.40", mapel:"Bahasa Ingrris",       guru:"Ibu Siti Nurhayati, M.Pd." },
  ],
  jumat:  [
    { waktu:"07.00 – 07.40", mapel:"Keagamaan",                guru:"Semua guru" },
    { waktu:"07.40 – 08.20", mapel:"Pemograman Jaringan",         guru:"Ibu Sri Ratna Istiqomah, S.Pd,I." },
    { waktu:"08.20 – 09.00", mapel:"Pemograman Jaringan",         guru:"Ibu Sri Ratna Istiqomah, S.Pd,I." },
    { waktu:"09.00 – 09.40", mapel:"Pemograman Jaringan",         guru:"Ibu Sri Ratna Istiqomah, S.Pd,I." },
    { waktu:"09.40 – 10.10", mapel:"Istirahat I",            istirahat: true },
    { waktu:"10.10 – 10.50", mapel:"Administrasi Sistem Jaringan",          guru:"Bpk. Oky Setiawan, S.T." },
    { waktu:"10.50 – 11.30", mapel:"Administrasi Sistem Jaringan",          guru:"Bpk. Oky Setiawan, S.T." },
    { waktu:"11.30– 12.40", mapel:"Istirahat II & Sholat Jumat",  istirahat: true },
    { waktu:"12.40 – 13.20", mapel:"KIK",                    guru:"Bpk Hari Apriyanto, S.E." },
   { waktu:"13.20 – 14.00", mapel:"KIK",                     guru:"Bpk Hari Apriyanto, S.E." },
    { waktu:"14.00– 14.40", mapel:"KIK",       guru:"Bpk Hari Apriyanto, S.E." },
  ],
  
};

// ─── DATA GALERI ─────────────────────────────────────────────
const dataGaleri = [
  { id: 1,  title: "After 17 Agustus 🇮", foto: "foto/foto kelas 1.jpeg" },
  { id: 2,  title: "After Petugas Upacara ", foto: "foto/foto kelas 2.jpeg" },
  { id: 3,  title: "Skuad Petugas Upacara ", foto: "foto/foto kelas 3.jpeg" },
  { id: 4,  title: "Santai di Villa ", foto: "foto/foto kelas 4.jpeg" },
  { id: 5,  title: "Makrab Villa Bareng ", foto: "foto/foto kelas 5.jpeg" },
  { id: 6,  title: "KAI or Axioo ", foto: "foto/foto kelas 6.jpeg" },
  { id: 7,  title: "Bareng Ibu Sri ", foto: "foto/foto kelas 7.jpeg" },
  { id: 8,  title: "XII Axioo & Ibu Sri ", foto: "foto/foto kelas 8.jpeg" },
  { id: 9,  title: "After Sidang PKL ", foto: "foto/foto kelas 9.jpeg" },
  { id: 10, title: "Lulus Sidang PKL! ", foto: "foto/foto kelas 10.jpeg" },
  { id: 11, title: "After bantai-bantai kelas lain ", foto: "foto/foto kelas 11.jpeg" },
  { id: 12, title: "Ganteng-ganteng serigala ", foto: "foto/foto kelas 12.jpeg" },
  { id: 13, title: "Pak Oky & Pak Izat ", foto: "foto/foto kelas 13.jpeg" },
  { id: 14, title: "Berenang & Refreshing ", foto: "foto/foto kelas 14.jpeg" },
  { id: 15, title: "Sidang PKL ", foto: "foto/sidang pkl.jpeg" },
  { id: 16, title: "Sidang PKL 2 ", foto: "foto/sidang pkl 2.jpeg" },
  { id: 17, title: "Sidang PKL 3 ", foto: "foto/sidang pkl 3.jpeg" },
  { id: 17, title: "TKA", foto: "" },
];

// ─── STATE ───────────────────────────────────────────────────
let currentGender = "semua";
let currentGuruGender = "semua";
let currentLightboxIndex = 0;
let currentLightboxList = [];
let activeSiswaCount = { total: dataSiswa.length };

// ─── NAVIGASI ────────────────────────────────────────────────
function showSection(id) {
  const normalizedId = (id || '').toLowerCase();
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(normalizedId);
  if (target) target.classList.add('active');

  // Update nav link active state
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href.toLowerCase() === '#' + normalizedId);
  });

  // Close mobile menu
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-render if needed
  if (normalizedId === 'siswa')   renderSiswa();
  if (normalizedId === 'guru')    renderGuru();
  if (normalizedId === 'jadwal')  renderJadwal('senin');
  if (normalizedId === 'galeri')  renderGaleri();
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── INITIALS HELPER ─────────────────────────────────────────
function getInitials(nama) {
  const cleaned = nama.replace(/^(Bpk\.?|Ibu\.?|Pak\.?)\s+/i, '').trim();
  const parts = cleaned.split(' ').filter(p => !p.includes('.') && p.length > 0);
  if (parts.length === 0) return cleaned.slice(0, 2).toUpperCase();
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// ─── SISWA ───────────────────────────────────────────────────
function renderSiswa(filter = '') {
  const grid = document.getElementById('siswaGrid');
  if (!grid) return;
  const lowerFilter = filter.toLowerCase();

  const filtered = dataSiswa.filter(s => {
    const matchQuery  = s.nama.toLowerCase().includes(lowerFilter) || (s.kataKata && s.kataKata.toLowerCase().includes(lowerFilter));
    const matchGender = currentGender === 'semua' || s.gender === currentGender;
    return matchQuery && matchGender;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem">
      <i class="fa fa-search" style="font-size:2rem;margin-bottom:0.5rem;display:block"></i>
      Tidak ada siswa yang ditemukan.
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map((s, i) => {
    const initials = getInitials(s.nama);
    const avatarFallback = `
      <div class="siswa-avatar avatar-${s.gender}" id="avatar-init-${s.no}">${initials}</div>
    `;
    const fotoEl = s.foto ? `
      <div class="siswa-foto-wrap">
        <img
          src="${s.foto}"
          alt="Foto ${s.nama}"
          class="siswa-foto"
          onerror="this.style.display='none'; const el = document.getElementById('avatar-init-${s.no}'); if (el) el.style.display='flex';"
          onload="const el = document.getElementById('avatar-init-${s.no}'); if (el) el.style.display='none'; this.style.display='block';"
        />
        <div class="siswa-avatar avatar-${s.gender}" id="avatar-init-${s.no}" style="display:flex">${initials}</div>
      </div>
    ` : avatarFallback;

    return `
    <div class="siswa-card" style="animation-delay:${i * 0.04}s">
      ${fotoEl}
      <div class="siswa-no">No. ${s.no}</div>
      <div class="siswa-name">${s.nama}</div>
      <div class="siswa-quote">${s.kataKata ? `“${s.kataKata}”` : ''}</div>
      <span class="siswa-gender-tag gender-${s.gender}">
        ${s.gender === 'L' ? '♂ Laki-laki' : '♀ Perempuan'}
      </span>
    </div>
  `;
  }).join('');
}

function filterSiswa() {
  const q = document.getElementById('searchInput')?.value || '';
  renderSiswa(q);
}

function filterGender(gender, btn) {
  currentGender = gender;
  document.querySelectorAll('#siswaGenderFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const q = document.getElementById('searchInput')?.value || '';
  renderSiswa(q);
}

// ─── GURU ───────────────────────────────────────────────────
function renderGuru(filter = '') {
  const grid = document.getElementById('guruGrid');
  if (!grid) return;
  const lowerFilter = filter.toLowerCase();

  const filtered = dataGuru.filter(g => {
    const matchName   = g.nama.toLowerCase().includes(lowerFilter) || (g.mapel && g.mapel.toLowerCase().includes(lowerFilter));
    const matchGender = currentGuruGender === 'semua' || g.gender === currentGuruGender;
    return matchName && matchGender;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem">
      <i class="fa fa-search" style="font-size:2rem;margin-bottom:0.5rem;display:block"></i>
      Tidak ada guru yang ditemukan.
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map((g, i) => {
    const initials = getInitials(g.nama);
    const avatarFallback = `
      <div class="guru-avatar avatar-${g.gender}" id="guru-avatar-init-${g.no}">${initials}</div>
    `;
    const fotoEl = g.foto ? `
      <div class="guru-foto-wrap">
        <img
          src="${g.foto}"
          alt="Foto ${g.nama}"
          class="guru-foto"
          onerror="this.style.display='none'; const el = document.getElementById('guru-avatar-init-${g.no}'); if (el) el.style.display='flex';"
          onload="const el = document.getElementById('guru-avatar-init-${g.no}'); if (el) el.style.display='none'; this.style.display='block';"
        />
        <div class="guru-avatar avatar-${g.gender}" id="guru-avatar-init-${g.no}" style="display:flex">${initials}</div>
      </div>
    ` : avatarFallback;

    return `
    <div class="guru-card" style="animation-delay:${i * 0.04}s">
      ${fotoEl}
      <div class="guru-no">No. ${g.no}</div>
      <div class="guru-name">${g.nama}</div>
      <div class="guru-mapel"><i class="fa fa-book-open"></i> ${g.mapel}</div>
      <span class="guru-gender-tag gender-${g.gender}">
        ${g.gender === 'L' ? '♂ Laki-laki' : '♀ Perempuan'}
      </span>
    </div>
  `;
  }).join('');
}

function filterGuru() {
  const q = document.getElementById('searchGuruInput')?.value || '';
  renderGuru(q);
}

function filterGuruGender(gender, btn) {
  currentGuruGender = gender;
  document.querySelectorAll('#guruGenderFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const q = document.getElementById('searchGuruInput')?.value || '';
  renderGuru(q);
}

// ─── JADWAL ──────────────────────────────────────────────────
function renderJadwal(hari) {
  const container = document.getElementById('jadwalContainer');
  const items = dataJadwal[hari] || [];

  container.innerHTML = items.map(item => {
    if (item.istirahat) {
      return `<div class="jadwal-item jadwal-istirahat">
        ☕ ${item.mapel} &nbsp;|&nbsp; ${item.waktu}
      </div>`;
    }
    const color = warna[item.mapel] || '#94a3b8';
    return `<div class="jadwal-item">
      <div class="jadwal-time">🕐 ${item.waktu}</div>
      <div class="jadwal-color" style="background:${color}"></div>
      <div class="jadwal-info">
        <div class="jadwal-mapel">${item.mapel}</div>
        <div class="jadwal-guru"><i class="fa fa-user" style="font-size:0.7rem"></i> ${item.guru}</div>
      </div>
      <div class="jadwal-ruang"></div>
    </div>`;
  }).join('');
}

function showDay(hari, btn) {
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderJadwal(hari);
}

// ─── PENGUMUMAN ──────────────────────────────────────────────
function toggleDetail(btn) {
  const card   = btn.closest('.pengumuman-card');
  const detail = card.querySelector('.peng-detail');
  const isHidden = detail.classList.contains('hidden');
  detail.classList.toggle('hidden');
  btn.textContent = isHidden ? 'Tutup' : 'Selengkapnya';
}

// ─── GALERI (AESTHETIC & SANTAI) ─────────────────────────────
function getLikesData() {
  try {
    return JSON.parse(localStorage.getItem('xii_axioo_galeri_likes') || '{}');
  } catch(e) {
    return {};
  }
}

function togglePhotoLike(id, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const likes = getLikesData();
  likes[id] = !likes[id];
  localStorage.setItem('xii_axioo_galeri_likes', JSON.stringify(likes));
  renderGaleri();
}

function renderGaleri() {
  const grid = document.getElementById('galeriGrid');
  if (!grid) return;

  currentLightboxList = dataGaleri;
  const userLikes = getLikesData();

  grid.innerHTML = dataGaleri.map((g, index) => {
    const isLiked = !!userLikes[g.id];

    return `
      <div class="galeri-item" onclick="openLightboxByIndex(${index})" style="animation-delay:${index * 0.03}s">
        <div class="galeri-thumb-wrap">
          <img src="${g.foto}" alt="${g.title}" class="galeri-img" loading="lazy" />
          <button class="galeri-like-btn ${isLiked ? 'liked' : ''}" onclick="togglePhotoLike(${g.id}, event)" title="Suka foto ini">
            <i class="${isLiked ? 'fa' : 'far'} fa-heart"></i>
          </button>
          <div class="galeri-hover-info">
            <span class="galeri-view-pill"><i class="fa fa-expand"></i> Buka Foto</span>
          </div>
        </div>
        <div class="galeri-info">
          <div class="galeri-title">${g.title}</div>
          ${isLiked ? '<span class="galeri-liked-tag"><i class="fa fa-heart"></i> Disukai</span>' : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ─── LIGHTBOX ────────────────────────────────────────────────
function openLightboxByIndex(index) {
  if (!currentLightboxList.length) currentLightboxList = dataGaleri;
  currentLightboxIndex = (index + currentLightboxList.length) % currentLightboxList.length;
  updateLightbox();
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const item = currentLightboxList[currentLightboxIndex];
  if (!item) return;

  const imgBox = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');

  if (imgBox) {
    imgBox.innerHTML = `<img src="${item.foto}" alt="${item.title}" class="lightbox-img" />`;
  }
  if (captionEl) {
    captionEl.innerHTML = `<span class="lb-title">${item.title}</span>`;
  }
  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxList.length}`;
  }
}

function navLightbox(step) {
  if (!currentLightboxList.length) return;
  currentLightboxIndex = (currentLightboxIndex + step + currentLightboxList.length) % currentLightboxList.length;
  updateLightbox();
}

function closeLightbox(event) {
  if (event && event.target && event.target.closest('.lightbox-content')) return;
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Keyboard shortcuts for lightbox
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (lb && lb.classList.contains('open')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  }
});

// Mobile touch swipe
let touchStartX = 0;
let touchEndX = 0;
document.addEventListener('touchstart', e => {
  const lb = document.getElementById('lightbox');
  if (lb && lb.classList.contains('open') && e.changedTouches && e.changedTouches[0]) {
    touchStartX = e.changedTouches[0].screenX;
  }
}, { passive: true });

document.addEventListener('touchend', e => {
  const lb = document.getElementById('lightbox');
  if (lb && lb.classList.contains('open') && e.changedTouches && e.changedTouches[0]) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) navLightbox(1);
      else navLightbox(-1);
    }
  }
}, { passive: true });

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '';
  }
});

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Set first nav link active
  const firstLink = document.querySelector('.nav-links a');
  if (firstLink) firstLink.classList.add('active');

  // Pre-render grids
  renderSiswa();
  renderGuru();
  renderGaleri();

  // Animate stat counters
  animateCounter('countSiswa', 0, dataSiswa.length, 1200);
  animateCounter('countGuru', 0, dataGuru.length, 1200);
});

function animateCounter(id, start, end, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const range = end - start;
  const step  = Math.ceil(duration / range);
  let current = start;
  const timer = setInterval(() => {
    current++;
    el.textContent = current;
    if (current >= end) clearInterval(timer);
  }, step);
}
